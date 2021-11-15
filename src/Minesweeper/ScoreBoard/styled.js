import styled, { css } from 'styled-components';

export const ScoreBoardWrapper = styled.section`
    flex-basis: 300px;
    padding: 20px;
    border-radius: 10px;

    ${({ difficultyLevel }) => difficultyLevel === "intermediate" && css`
        width: 560px;
    `};
    ${({ difficultyLevel }) => difficultyLevel === "expert" && css`
        width: 884px;
    `};
`;

export const SectionHeader = styled.header`
    font-size: 30px;
    color: ${({ theme }) => theme.colors.mainLight};
    font-weight: bold;
    text-align: center;
    padding: 6px;
    border-bottom: 2px solid ${({ theme }) => theme.colors.mainLight};
`;

export const BestTime = styled.span`
    display: block;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.mainLight};
    text-align: center;
    padding: 6px;
`;