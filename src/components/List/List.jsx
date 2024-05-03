import styled from 'styled-components';
import { FormWrapp, FormTitle, Select } from '../fragments/fragmentForm';
import List_Item from '../List_Item/List_Item';
import { v4 as uuidv4 } from 'uuid';
const ListWrapp = styled(FormWrapp)`
	width: 45%;
`;
const TitleWrap = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 25px;
`;
const Select2 = styled(Select)`
	width: 35%;
	font-size: 1.7em;
`;
const getUnicArr = (arr, param) => {
	const UnicSet = new Set();
	arr.forEach((item) => {
		UnicSet.add(item[param]);
	});
	return [...UnicSet];
};

function List(props) {
	const filterItem = (e) => {
		console.log(e.target.value);
		console.log(typeof e.target.value);
		props.filterItem(e.target.value);
	};

	const data = props.state;
	return (
		<>
			<ListWrapp>
				<TitleWrap>
					<FormTitle>Список задач</FormTitle>
					<Select2 onChange={filterItem} color={'#e85dc1'} id="prior" name="prior">
						<option value="">Выбор даты</option>
						<option value="все">Все</option>
						{getUnicArr(props.FiltrDate, 'date').map((item) => (
							<option  key={uuidv4()} value={item}>
								{item}
							</option>
						))}
					</Select2>
				</TitleWrap>

				{data.map((item) => (
					<List_Item
						DeleteTask = {props.DeleteTask}
						viewTask={props.onEventHandler}
						img={item.prior === 'высокий' ? 3 : item.prior === 'средний' ? 2 : 1}
						timeEnd={item.timeEnd}
						timeStart={item.timeStart}
						name={item.name}
						key={item.id}
						id={item.id}
					/>
				))}
			</ListWrapp>
		</>
	);
}

export default List;
