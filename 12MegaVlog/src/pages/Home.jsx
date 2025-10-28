// src/pages/Home.jsx
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
                const postsData = await appwriteService.getPosts();
                console.log("📄 Posts data:", postsData);
                
                // Since your service returns array directly
                if (postsData && Array.isArray(postsData)) {
                    setPosts(postsData);
                } else {
                    setPosts([]);
                }
            } catch (error) {
                console.error("❌ Error fetching posts:", error);
                setError(error.message || 'Failed to load posts');
                setPosts([]);
                
                if (error.code === 401) {
                    setError('Please login to view posts');
                }
            } finally {
                setLoading(false);
            }
        }

        fetchPosts();
    }, [userData, navigate]);

    // Show loading state
    if (loading) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold">
                                Loading posts...
                            </h1>
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
                            {error.includes('login') && (
                                <button 
                                    onClick={() => navigate('/login')}
                                    className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                                >
                                    Login to Continue
                                </button>
                            )}
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
                                {userData ? 'No posts available yet' : 'Login to read posts'}
                            </h1>
                            {!userData && (
                                <button 
                                    onClick={() => navigate('/login')}
                                    className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                                >
                                    Login Now
                                </button>
                            )}
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