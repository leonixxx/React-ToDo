import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const Wrapper = styled.section`
	max-width: 1440px;
	display: flex;
	/* justify-content: center; */
	align-items: center;
	flex-direction: column;
	color: #fff;
	width: 1500px;
`;
export const Global = createGlobalStyle`
    *,
    *::before,
    *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }
    #root {
    min-height: 100vh;
    background: black;
    display: grid;
    place-content: center;
    text-align: center;
	font-size: 16px;
    }
    `;
export const MainWrapp = styled.main`
	padding: 30px 50px;
	display: flex;
	justify-content: space-between;
	width: 100%;
`;
