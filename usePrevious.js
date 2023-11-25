import { useEffect, useRef } from 'react';

const usePrevious = (value) => {
    const previousValue = useRef();

    useEffect(() => {
        previousValue.current = value;
    }, [value]);

    return previousValue;
};
