import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom';

export default function PublicRoute() {
    const navigate = useNavigate();
    let isAuthenticated = localStorage.getItem('token');

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/');
        }
    }, [navigate, isAuthenticated]);

    return <Outlet />;
}
