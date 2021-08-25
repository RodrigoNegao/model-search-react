import React, { Component } from 'react';
import pub from './assets/pub.jpg';

// https://reactjs.org/docs/error-boundaries.html

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.log('error', error);
    console.log('errorInfo', errorInfo);
    this.setState({
      hasError: true,
    });
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <>
          <img src={pub} />
          <h1>Something went wrong.</h1>
        </>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
