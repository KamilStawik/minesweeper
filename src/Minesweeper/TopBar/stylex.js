import styled from 'styled-components';

export const TopBarWrapper = styled.div`
    width: 100%;
    color: white;
    font-size: 20px;
    padding: 10px;
    margin-bottom: 12px;
    border-radius: 10px 10px 0px 0px;
    background-color: ${({ theme }) => theme.colors.mainDark};
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const NewGameButton = styled.button`
    border: none;
    background-color: inherit;
    padding: 0px;
    font-size: 40px;
`;

export const Wrapper = styled.div`
    padding: 10px;
    min-width: 100px;
    text-align: center;
    border-radius: 10px 10px 0px 0px;
    background-color: ${({ theme }) => theme.colors.topBarBackground};
`;