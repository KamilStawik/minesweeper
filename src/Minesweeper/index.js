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
            {gameStatus === "initial" && <Grid />}
            {gameStatus === "readyToStart" && <Grid />}
            {gameStatus === "gameIsOn" && <Grid />}
            {gameStatus === "lost" && "PRZEGRAŁEŚ !!!"}
            {gameStatus === "won" && "WYGRAŁEŚ !!!"}
        </Wrapper >
    );
};
export default Minesweeper;