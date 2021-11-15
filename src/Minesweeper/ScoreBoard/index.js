import { useSelector } from "react-redux";
import { ScoreBoardWrapper, SectionHeader, BestTime } from "./styled";
import { selectBestTime } from "./../minesweeperSlice";

const ScoreBoard = () => {
    const bestTime = useSelector(selectBestTime);
    console.log(bestTime);

    return (
        <>
            <ScoreBoardWrapper>
                <SectionHeader>Your best time</SectionHeader>
                <BestTime> {bestTime}</BestTime>
            </ScoreBoardWrapper >
        </>
    );
};

export default ScoreBoard;