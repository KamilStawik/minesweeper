import { useEffect, useState } from "react";

const useTimer = (gameStatus) => {

    const [actualTime, setActualTime] = useState(0);
    console.log(gameStatus);

    useEffect(() => {
        const intervalId = setInterval(() => {
            gameStatus === "gameIsOn" && setActualTime(PreviousActualTime => PreviousActualTime + 0.1);
        }, 100);
        return () => {
            clearInterval(intervalId);
        };
    }, [gameStatus]);

    return actualTime.toFixed(1);
};

export default useTimer;