import { useSelector, useDispatch } from "react-redux";
import { newGameButtonClick, selectDifficultyLevel, selectFlaggedFieldsQuantity, selectGameStatus } from "../minesweeperSlice";
import Timer from "./Timer";

const TopBar = () => {
    const gameStatus = useSelector(selectGameStatus);
    const difficultyLevel = useSelector(selectDifficultyLevel);
    const flaggedFieldsQuantity = useSelector(selectFlaggedFieldsQuantity);
    const dispatch = useDispatch();
    let minesQuantity = 0;

    switch (difficultyLevel) {
        case 'beginner':
            minesQuantity = 10;
            break;
        case 'intermediate':
            minesQuantity = 40;
            break;
    };

    const minesLeft = minesQuantity - flaggedFieldsQuantity;

    return (
        <div>
            mines left: {minesLeft}
            <button onClick={() => dispatch(newGameButtonClick())}>
                Czas start / stop
            </button>
            <Timer />
        </div>
    );
};

export default TopBar;