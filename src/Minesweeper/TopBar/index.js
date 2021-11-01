import { useSelector } from "react-redux";
import { selectDifficultyLevel, selectFlaggedFieldsQuantity, selectGameStatus } from "../minesweeperSlice";
import Timer from "./Timer";

const TopBar = () => {
    const gameStatus = useSelector(selectGameStatus);
    const difficultyLevel = useSelector(selectDifficultyLevel);
    const flaggedFieldsQuantity = useSelector(selectFlaggedFieldsQuantity);
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
            {gameStatus === "gameIsOn" && <Timer />}
        </div>
    );
};

export default TopBar;