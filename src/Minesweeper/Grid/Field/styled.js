import styled, { css } from 'styled-components';

export const StyledField = styled.button`
	width: 40px;
    height: 40px;
    font-size: 13px;
    font-weight: bold;
    background-color: ${({ theme }) => theme.colors.mainLight};
    border-top: 2px solid ${({ theme }) => theme.colors.lightBorder};
    border-right: 2px solid ${({ theme }) => theme.colors.darkBorder};
    border-bottom: 2px solid ${({ theme }) => theme.colors.darkBorder};
    border-left: 2px solid ${({ theme }) => theme.colors.lightBorder};

    ${({ difficultyLevel }) => difficultyLevel === "intermediate" && css`
        width: 32px;
        height: 32px;;
    `};

    ${({ revealed }) => revealed && css`
        filter: brightness(108%);
        border-top: 1px solid ${({ theme }) => theme.colors.semiDarkBorder};
        border-left: 1px solid ${({ theme }) => theme.colors.semiDarkBorder};
        border-right: initial;
        border-bottom: initial;
    `}

    ${({ surroundingMines }) => surroundingMines === 1 && css`
        color: ${({ theme }) => theme.colors.surroundingMines.one};
    `}
    ${({ surroundingMines }) => surroundingMines === 2 && css`
        color: ${({ theme }) => theme.colors.surroundingMines.two};
    `}
    ${({ surroundingMines }) => surroundingMines === 3 && css`
        color: ${({ theme }) => theme.colors.surroundingMines.three};
    `}
    ${({ surroundingMines }) => surroundingMines === 4 && css`
        color: ${({ theme }) => theme.colors.surroundingMines.four};
    `}
    ${({ surroundingMines }) => surroundingMines === 5 && css`
        color: ${({ theme }) => theme.colors.surroundingMines.five};
    `}
    ${({ surroundingMines }) => surroundingMines === 6 && css`
        color: ${({ theme }) => theme.colors.surroundingMines.six};
    `}
    ${({ surroundingMines }) => surroundingMines === 7 && css`
        color: ${({ theme }) => theme.colors.surroundingMines.seven};
    `}
    ${({ surroundingMines }) => surroundingMines === 8 && css`
        color: ${({ theme }) => theme.colors.surroundingMines.eight};
    `}

    ${({ mine, lost }) => mine && lost && css`
        color: black;
        background-color: red;
    `}
    ${({ mine, won }) => mine && won && css`
        color: black;
        background-color: green;
    `}
`;