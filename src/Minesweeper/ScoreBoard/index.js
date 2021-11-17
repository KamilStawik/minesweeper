import { useSelector } from "react-redux";
import { ScoreBoardWrapper, SectionHeader, BestTime } from "./styled";
import { selectBestTime } from "./../minesweeperSlice";

const ScoreBoard = () => {
    const bestTimes = useSelector(selectBestTime);

    return (
        <>
            <ScoreBoardWrapper>
                <SectionHeader>Your best time</SectionHeader>

                {bestTimes.map(bestTime => (<BestTime> {bestTime}</BestTime>))}
                {/* <BestTime> {bestTime}</BestTime> */}
            </ScoreBoardWrapper >
        </>
    );
};

export default ScoreBoard;