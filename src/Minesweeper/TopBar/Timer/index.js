import { useSelector, useDispatch } from "react-redux";
import { newGameButtonClick, selectGameStatus } from "./../../minesweeperSlice";
import useTimer from "./useTimer";

const Timer = () => {

    const gameStatus = useSelector(selectGameStatus);
    const dispatch = useDispatch();

    return (
        <>
            {useTimer(gameStatus)}
            <button onClick={() => dispatch(newGameButtonClick)}>
                Czas start / stop
            </button>
        </>
    );
};

export default Timer;