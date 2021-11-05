import styled, { css } from 'styled-components';

export const StyledField = styled.button`
	width: 40px;
    height: 40px;
    background-color: ${({ theme }) => theme.colors.mainLight};
    border-top: 2px solid ${({ theme }) => theme.colors.lightBorder};
    border-right: 2px solid ${({ theme }) => theme.colors.darkBorder};
    border-bottom: 2px solid ${({ theme }) => theme.colors.darkBorder};
    border-left: 2px solid ${({ theme }) => theme.colors.lightBorder};

    ${({ revealed }) => revealed && css`
        filter: brightness(108%);
        border-top: 1px solid ${({ theme }) => theme.colors.semiDarkBorder};
        border-left: 1px solid ${({ theme }) => theme.colors.semiDarkBorder};
        border-right: initial;
        border-bottom: initial;
    `}
`;