import styled from 'styled-components';
export const Img = styled.img`
	width: 40px;
	height: 40px;
`;
export const Li = styled.li`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 15px;
`;
export const P = styled.p`
	font-size: 1.6em;
	font-size: ${(props) => props.size};
	&:first-child {
		display: block;
		width: 190px;
		text-align: left;
	}
`;
