import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can log the error here
        console.error("Error caught by ErrorBoundary: ", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <div className=' flex flex-col items-center text-center text-white p-4 h-screen'>

                <h1 className='text-2xl font-bold' >Oops! Something went wrong.</h1>
            </div>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
