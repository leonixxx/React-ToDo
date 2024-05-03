import styled from 'styled-components';

const Wrapp = styled.header`
	width: 80%;
	height: 470px;
	background-color: #494949;
	border: 4px solid red;
	border-radius: 20px;
	padding: 20px;
`;
const HeaderTitle = styled.h2`
	font-size: 3em;
	margin-bottom: 10px;
`;
export const HeaderText = styled.p`
	font-size: 2em;
	text-align: justify;
	margin-bottom: 9px;
	padding-bottom: 4px;
	color: ${(props) => props.color};
	width: ${(props) => props.content};
	border-bottom: ${(props) => props.borderbot};
`;
const Span = styled.span`
	color: ${(props) => props.color};
	border-bottom: ${(props) => props.borderbot};
`;

function Header(props) {
	return (
		<>
			<Wrapp>
				<HeaderTitle>Просмотр задач</HeaderTitle>
				<HeaderText
					content={'fit-content'}
					borderbot={'1px solid black'}
				>
					<Span color={'#5de869'}>Название:</Span>
					{` ${props.name}`}
				</HeaderText>
				<HeaderText borderbot={props.text != '' ? '1px solid black' : ''}>
					<Span borderbot={'1px solid black'} color={'#5de8b3'}>Описание: </Span>
					{props.text}
				</HeaderText>
				<HeaderText
					content={'fit-content'}
					borderbot={'1px solid black'}
				>
					<Span color={'#5d70e8'}>Дедлайн:</Span>
					{` ${props.time}`}
				</HeaderText>
				<HeaderText
					color={props.color}
					content={'fit-content'}
					borderbot={'1px solid black'}
				>
					<Span color={'#e85dc1'}>Приоритет:</Span>
					{` ${props.prior}`}
				</HeaderText>
			</Wrapp>
		</>
	);
}

export default Header;
