// src/components/AuthCheck.jsx
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import authService from '../appwrite/auth';
import { login, logout } from '../store/authSlice';

export const AuthCheck = ({ children }) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                console.log("🔍 Checking authentication status...");
                const userData = await authService.getCurrentUser();
                console.log("📋 User data received:", userData);
                
                if (userData) {
                    console.log("✅ User is authenticated:", userData.email);
                    dispatch(login({ userData }));
                } else {
                    console.log("❌ No user logged in");
                    dispatch(logout());
                }
            } catch (error) {
                console.error("🚨 Auth check failed:", error);
                dispatch(logout());
            } finally {
                setLoading(false);
            }
        };

        checkAuth();
    }, [dispatch]);

    // Show loading while checking authentication
    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Checking authentication...</p>
                </div>
            </div>
        );
    }

    return children;
};