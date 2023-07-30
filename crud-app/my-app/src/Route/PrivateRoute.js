import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom';

export default function PrivateRoute() {
    const navigate = useNavigate();
    let isAuthenticated = localStorage.getItem('token');
    useEffect(() => {
        if (!isAuthenticated || isAuthenticated == null) {
            navigate('/login');
        }
    }, [navigate, isAuthenticated]);

    return <Outlet />;
}
