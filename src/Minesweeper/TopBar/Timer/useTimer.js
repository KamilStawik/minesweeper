import { useEffect, useState } from "react";

const useTimer = (gameStatus) => {

    const [actualTime, setActualTime] = useState(0);
    console.log(gameStatus);

    useEffect(() => {
        const intervalId = setInterval(() => {
            gameStatus === "gameIsOn" && setActualTime(actualTime => actualTime + 0.1);
        }, 100);
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return actualTime.toFixed(1);
};

export default useTimer;