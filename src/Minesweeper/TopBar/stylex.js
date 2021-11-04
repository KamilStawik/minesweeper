import styled from 'styled-components';

export const TopBarWrapper = styled.div`
    width: 100%;
    color: white;
    font-size: 24px;
    padding: 10px;
    margin-bottom: 12px;
    border-radius: 10px 10px 0px 0px;
    background-color: ${({ theme }) => theme.colors.mainDark};
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const NewGameButton = styled.button`
    border: none;
    background-color: inherit;
    padding: 0px;
    font-size: 36px;
`;