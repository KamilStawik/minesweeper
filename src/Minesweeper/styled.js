import styled, { css } from 'styled-components';

export const Container = styled.div`
    margin: 100px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const Wrapper = styled.div`
    width: 364px;
    padding: 20px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.mainLight};
    display: flex;
    flex-direction: column;
    align-items: center;

    ${({ difficultyLevel }) => difficultyLevel === "intermediate" && css`
        width: 560px;
    `};
    ${({ difficultyLevel }) => difficultyLevel === "expert" && css`
        width: 884px;
    `};
`;