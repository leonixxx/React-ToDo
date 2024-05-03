import styled from 'styled-components';

export const FormWrapp = styled.article`
	width: 50%;
	height: 710px;
	background-color: #494949;
	border: 4px solid red;
	border-radius: 10px;
	padding: 20px;
`;
export const FormTitle = styled.h2`
	font-size: 3em;
	margin-bottom: 15px;
`;
export const LabelWrap = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	gap: 20px;
	font-size: 2em;
	margin-bottom: 10px;
`;
export const Label = styled.label`
	margin-right: ${(props) => props.marginright};
`;
export const Input = styled.input`
	text-decoration: none;
	background: none;
	background-color: ${props => props.valid};
	border: none;
	width: 100%;
	color: white;
	color: ${(props) => props.color};
	font-size: 0.8em;
	border-bottom: 1px solid black;
`;
export const Textarea = styled.textarea`
	width: 100%;
	color: #5de8b3;
	background: #494949;
	font-size: 0.8em;
	background-color: ${props => props.valid};
`;
export const Select = styled.select`
	width: 100%;
	background: none;
	color: ${(props) => props.color};
	font-size: 0.8em;
	&:focus {
		background: #494949;
	}
`;
