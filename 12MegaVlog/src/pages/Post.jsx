import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);
    
    // Safe author check with optional chaining
    const isAuthor = post?.userId === userData?.$id;

    useEffect(() => {
        const fetchPost = async () => {
            if (!slug) {
                navigate("/");
                return;
            }

            try {
                setLoading(true);
                const postData = await appwriteService.getPost(slug);
                if (postData) {
                    setPost(postData);
                } else {
                    navigate("/");
                }
            } catch (error) {
                console.error("Error fetching post:", error);
                navigate("/");
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [slug, navigate]);

    const deletePost = async () => {
        if (!post?.$id) return;

        try {
            const status = await appwriteService.deletePost(post.$id);
            if (status) {
                // Only try to delete file if featuredImage exists
                if (post.featuredImage) {
                    await appwriteService.deleteFile(post.featuredImage);
                }
                navigate("/");
            }
        } catch (error) {
            console.error("Error deleting post:", error);
        }
    };

    // Show loading state
    if (loading) {
        return (
            <div className="py-8">
                <Container>
                    <div className="text-center">Loading...</div>
                </Container>
            </div>
        );
    }

    // Return null if no post (will be handled by useEffect navigation)
    if (!post) return null;

    return (
        <div className="py-8">
            <Container>
                {/* Featured Image Section with Safety Checks */}
                <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
                    {post.featuredImage ? (
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title || "Post image"}
                            className="rounded-xl max-w-full h-auto"
                        />
                    ) : (
                        <div className="w-full h-64 bg-gray-200 rounded-xl flex items-center justify-center">
                            <span>No Image</span>
                        </div>
                    )}

                    {isAuthor && (
                        <div className="absolute right-6 top-6 flex gap-3">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button bgColor="bg-green-500" className="hover:bg-green-600">
                                    Edit
                                </Button>
                            </Link>
                            <Button 
                                bgColor="bg-red-500" 
                                onClick={deletePost}
                                className="hover:bg-red-600"
                            >
                                Delete
                            </Button>
                        </div>
                    )}
                </div>

                {/* Title with Safety Check */}
                <div className="w-full mb-6">
                    <h1 className="text-2xl font-bold">
                        {post.title || "Untitled Post"}
                    </h1>
                </div>

                {/* Content with Safety Check */}
                <div className="browser-css">
                    {post.content ? parse(post.content) : <p>No content available.</p>}
                </div>
            </Container>
        </div>
    );
}