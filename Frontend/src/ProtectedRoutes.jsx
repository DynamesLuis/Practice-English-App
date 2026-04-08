import { Navigate } from 'react-router-dom';
import { useAuth } from './auth/hooks/useAuth'

export default function ProtectedRoutes({ children }) {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return children;
}
