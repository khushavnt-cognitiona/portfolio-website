import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="container mx-auto px-4 py-12 text-center">
          <h2 className="text-2xl font-bold text-red-600">Something went wrong.</h2>
          <p>Please try refreshing the page or come back later.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
