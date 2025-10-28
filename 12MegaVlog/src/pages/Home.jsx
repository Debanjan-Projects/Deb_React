import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import {Container, PostCard} from '../components'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Home() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    
    const userData = useSelector((state) => state.auth.userData)
    const navigate = useNavigate()

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setLoading(true)
                setError('')
                
                console.log("🔄 Fetching posts...");
                const postsResponse = await appwriteService.getPosts();
                console.log("📄 Posts response:", postsResponse);
                
                // Now we get the full response with documents property
                if (postsResponse && postsResponse.documents) {
                    setPosts(postsResponse.documents);
                } else {
                    setPosts([]);
                }
            } catch (error) {
                console.error("❌ Error fetching posts:", error);
                setError(error.message || 'Failed to load posts');
                setPosts([]);
            } finally {
                setLoading(false);
            }
        }

        // Only fetch posts if user is authenticated
        if (userData) {
            fetchPosts();
        } else {
            setLoading(false);
        }
    }, [userData]);

    // Show loading state
    if (loading) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold">
                                Loading...
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }

    // Show public welcome for non-authenticated users
    if (!userData) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-4xl font-bold text-gray-800 mb-6">
                                Welcome to MegaVlog
                            </h1>
                            <p className="text-xl text-gray-600 mb-8">
                                Join our community to read and share amazing stories
                            </p>
                            <div className="space-x-4">
                                <button 
                                    onClick={() => navigate('/login')}
                                    className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors text-lg"
                                >
                                    Login
                                </button>
                                <button 
                                    onClick={() => navigate('/signup')}
                                    className="bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600 transition-colors text-lg"
                                >
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }

    // Show error state
    if (error) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold text-red-500 mb-4">
                                {error}
                            </h1>
                            <button 
                                onClick={() => window.location.reload()}
                                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                            >
                                Try Again
                            </button>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }

    // Show empty state when no posts
    if (!posts || posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold text-gray-600">
                                No posts available yet
                            </h1>
                            <p className="text-gray-500 mt-2">
                                Be the first to create a post!
                            </p>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }

    // Render posts
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-full md:w-1/2 lg:w-1/3 xl:w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home