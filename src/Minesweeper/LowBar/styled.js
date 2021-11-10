import styled from 'styled-components';

export const LowBarWrapper = styled.div`
    width: 100%;
    font-size: 20px;
    padding: 10px;
    margin-top: 12px;
    border-radius: 0px 0px 10px 10px;
    background-color: ${({ theme }) => theme.colors.mainDark};
    display: flex;
    justify-content: space-between;
`;

export const DificultyLevelButton = styled.button`
    border: none;
    color: white;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.topBarBackground};
    border-radius: 5px;
    padding: 6px;
    font-size: 16px;
`;