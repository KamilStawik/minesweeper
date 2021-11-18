import styled from 'styled-components';
import flag from './../icons/flag.png'
import angryFace from './../icons/angryFace.png'
import happyFace from './../icons/happyFace.png'
import likeABossFace from './../icons/likeABossFace.png'

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

export const FlagWrapper = styled.div`
    padding: 10px;
    min-width: 100px;
    text-align: center;
    border-radius: 10px 10px 0px 0px;
    background-color: ${({ theme }) => theme.colors.topBarBackground};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const FlagIcon = styled.div`
	background-image: url(${flag});
    margin-right: 6px;
    height: 24px;
    width: 24px;
    background-size: cover;
    background-position: center;
`;

const addStyleToFaceIcon = () =>
    `   
        width: 44px;
        height: 44px;
        background-size: cover;
        background-position: center;
    `;

export const AngryFaceIcon = styled.div`
    ${addStyleToFaceIcon()}
	background-image: url(${angryFace});
`;

export const HappyFaceIcon = styled.div`
    ${addStyleToFaceIcon()}
	background-image: url(${happyFace});
`;

export const LikeABossFaceIcon = styled.div`
    ${addStyleToFaceIcon()}
	background-image: url(${likeABossFace});
`;