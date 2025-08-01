import { useEffect } from 'react';

const useDocTitle = (title) => {
    useEffect(() => {
        if (title) {
            document.title = `${title} | Sound-Box`;
        } else {
            document.title = 'Sound-Box | The Perfect Audio Store';
        }
    }, [title]);

    return null;
};

export default useDocTitle;
