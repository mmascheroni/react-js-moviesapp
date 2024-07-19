// ErrorBoundary.jsx
import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';

class ErrorBoundary extends Component {
    state = { hasError: false };

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.error("ErrorBoundary caught an error", error, info);
    }

    render() {
        if (this.state.hasError) {
            window.location.replace("/");
            return <Navigate to="/" />;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
