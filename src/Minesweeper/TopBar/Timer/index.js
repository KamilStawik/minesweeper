import { useSelector } from "react-redux";
import { selectGameStatus } from "./../../minesweeperSlice";
import useTimer from "./useTimer";

const Timer = () => {
    const gameStatus = useSelector(selectGameStatus);

    return (
        <>
            {useTimer(gameStatus)}
        </>
    );
};

export default Timer;