import React, { Component } from 'react';

export default function withLogProps(WrappedComponent) {
    return class extends Component {
        render() {
            console.log(this.props);
        };
    };
};

const EnhancedComponent = withLogProps(WrappedComponent);