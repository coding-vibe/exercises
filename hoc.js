const withLogProps = (WrappedComponent) => (props) => {
    return <WrappedComponent {...props} />
};

const EnhancedComponent = withLogProps(WrappedComponent);

<EnhancedComponent foo='bar' baz='qux' />
