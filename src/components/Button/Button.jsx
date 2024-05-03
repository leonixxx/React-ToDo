import styled from 'styled-components';

const BTN = styled.button`
width: 300px;
height: 60px;
font-size: 2em;
border-radius: 20px;
background-color: #1588eb;
color: #fff;
margin-top:10px;
&:hover {
background-color: #0a487e;
}`;

function Button({children}) {
	return (
		<>
			<BTN type='submit'>{children}</BTN>
		</>
	);
}

export default Button;