import { useEffect, useState } from "react";

const useTimer = () => {

    const [actualTime, setActualTime] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setActualTime(actualTime + 0.1);
        }, 100);
        return () => {
            clearInterval(intervalId);
        };
    }, [actualTime]);

    return actualTime.toFixed(1);
};

export default useTimer;