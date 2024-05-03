import styled from 'styled-components';

const StyledTitle = styled.h1`
	font-size: 5em;
    /* color: white; */
	margin-bottom: 20px;
`;

function Title({ children }) {
	return (
		<>
			<StyledTitle>{children}</StyledTitle>
		</>

	);
}

export default Title;
