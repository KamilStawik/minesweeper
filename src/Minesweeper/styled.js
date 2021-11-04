import styled from 'styled-components';

export const Wrapper = styled.div`
    margin: 100px auto;
    max-width: 600px;
    padding: 20px;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.colors.mainLight};
    display: flex;
    flex-direction: column;
    align-items: center;
`;