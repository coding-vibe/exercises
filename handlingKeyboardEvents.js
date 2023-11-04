const handleEscapeKey = () => {
    const Logger = ({ key, keyCode, shiftKey }) => {
        if (shiftKey && keyCode === 65) {
            console.warn(`Pressed: Shift + ${key}`);
        }
    }

    document.addEventListener('keydown', Logger);
}

handleEscapeKey();