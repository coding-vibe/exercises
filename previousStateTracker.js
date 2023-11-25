import { useEffect, useRef } from 'react';

const previousStateTracker = (value) => {
    const previousValue = useRef();

    useEffect(() => {
        previousValue.current = value;
    }, [value]);

    return previousValue;
};
