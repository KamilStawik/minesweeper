import styled, { css } from 'styled-components';

export const GridWrapper = styled.div`
    display: grid;
	grid-template-columns: repeat(8, 1fr);
    padding: 1px;
    border-radius: 5px;
    border-top: 2px solid ${({ theme }) => theme.colors.darkBorder};
    border-right: 2px solid ${({ theme }) => theme.colors.lightBorder};
    border-bottom: 2px solid ${({ theme }) => theme.colors.lightBorder};
    border-left: 2px solid ${({ theme }) => theme.colors.darkBorder};

    ${({ difficultyLevel }) => difficultyLevel === "intermediate" && css`
        grid-template-columns: repeat(16, 1fr);
    `};
`;