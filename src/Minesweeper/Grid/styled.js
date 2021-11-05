import styled from 'styled-components';

export const GridWrapper = styled.div`
    display: grid;
    grid-gap: 2px;
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    padding: 1px;
    border-radius: 5px;
    border-top: 2px solid #555555;
    border-right: 2px solid #dddddd;
    border-bottom: 2px solid #dddddd;
    border-left: 2px solid #555555;
`;