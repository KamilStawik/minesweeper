import { useEffect, useState } from "react";

const useTimer = (gameStatus) => {

    const [actualTime, setActualTime] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            gameStatus === "initial" && setActualTime(0);
            gameStatus === "gameIsOn" && setActualTime(previousActualTime => previousActualTime + 0.1);
        }, 100);
        return () => {
            clearInterval(intervalId);
        };
    }, [gameStatus]);

    return actualTime.toFixed(1);
};

export default useTimer;