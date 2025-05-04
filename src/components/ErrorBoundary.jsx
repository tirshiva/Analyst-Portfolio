// filepath: src/components/ErrorBoundary.jsx
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
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[#0a192f] text-[#ccd6f6] p-4">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-[#64ffda] mb-4">Something went wrong</h1>
            <p className="text-[#8892b0] mb-4">We're working on fixing this issue. Please try again later.</p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-[#64ffda] text-[#0a192f] rounded-md hover:bg-[#64ffda]/90 transition-colors duration-200"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;