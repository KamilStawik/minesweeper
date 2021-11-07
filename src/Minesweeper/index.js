import { useSelector } from "react-redux";
import Grid from "./Grid"
import { selectGameStatus } from "./minesweeperSlice";
import TopBar from "./TopBar";
import { Wrapper } from "./styled";

const Minesweeper = () => {

    const gameStatus = useSelector(selectGameStatus);

    return (
        <Wrapper>
            <TopBar />
            <Grid />
        </Wrapper >
    );
};
export default Minesweeper;