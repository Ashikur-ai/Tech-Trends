import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import Skeleton from '../components/skeleton';

const PrivateRoutes = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    
    if (loading) {
        // return <progress className="progress w-56"></progress>;
        return <Skeleton></Skeleton>;
    }

    if (user?.email) {
        return children;
    }
    
    return <Navigate to="/login" replace></Navigate>
};

export default PrivateRoutes;