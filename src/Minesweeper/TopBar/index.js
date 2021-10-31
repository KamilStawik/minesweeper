import { useSelector } from "react-redux"
import { selectDifficultyLevel, selectFlaggedFieldsQuantity } from "../minesweeperSlice";

const TopBar = () => {
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
        </div>
    );
};

export default TopBar;