import Title from './components/Title/Title';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import List from './components/List/List';
import { Global, Wrapper, MainWrapp } from './components/fragments/fragmentApp';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

let INITIAL_STATE = [
];
let filterArrNull = [
	{
		descr: '',
		name: '',
		prior: '',
		timeStart: '',
		timeEnd: '', 
		id: ''
	}
];
let filterArr = [
	{
		descr: '',
		name: '',
		prior: '',
		timeStart: '',
		timeEnd: '', 
		id: ''
	}
];
export default function App() {
	const [data, setData] = useState([]);
	const [dataFilter, setDataFilter] = useState(filterArr);
	const [dateFiltr, setItemFiltr] = useState([]);


	useEffect(() => {
		const dataB = JSON.parse(localStorage.getItem('data'));
		if (dataB && dataB.length > 0) {
			INITIAL_STATE = [...dataB];
			setData(INITIAL_STATE);
			setItemFiltr(INITIAL_STATE);
		}
	}, []);
	const viewTask = (newData) => {
		filterArr = INITIAL_STATE.filter((item) => item.id === newData);
		setDataFilter(filterArr);
	};
	const DeleteTask = (newData) => {
		let filtrDel = INITIAL_STATE.filter((item) => item.id === newData);
		INITIAL_STATE = INITIAL_STATE.filter((item) => item.id !== newData);
		if (filtrDel[0].id === filterArr[0].id) {
			filterArr = [...filterArrNull];
			setDataFilter(filterArr);
		} 
		localStorage.setItem('data', JSON.stringify(INITIAL_STATE));
		setData(INITIAL_STATE);
		setItemFiltr(INITIAL_STATE);
	};
	const changeArr = (formData) => {
		formData.id = uuidv4();
		INITIAL_STATE = [...INITIAL_STATE, formData];
		localStorage.setItem('data', JSON.stringify(INITIAL_STATE));
		setData(INITIAL_STATE);
		setItemFiltr(INITIAL_STATE);
	};
	const filterItemArr = (dateItem) => {
		if (dateItem === 'все') {
			setData(INITIAL_STATE);
		}
		else {
			let Filter_STATE = INITIAL_STATE.filter((item) => item.date === dateItem);
			setData(Filter_STATE);
		}
	};
		
	return (
		<>
			<Global />
			<Wrapper>
				<Title>Список задач</Title>
				<Header
					text={dataFilter[0].descr}
					name={dataFilter[0].name}
					color={
						dataFilter[0].prior === 'высокий'
							? 'red'
							: dataFilter[0].prior === 'средний'	? 'yellow'	: '#fff'
					}
					prior={dataFilter[0].prior}
					time={
						dataFilter[0].timeStart
							? `${dataFilter[0].timeStart}-${dataFilter[0].timeEnd}`
							: ''
					}
				/>
				<MainWrapp>
					<Form changeArr={changeArr} />
					<List
						filterItem={filterItemArr}
						DeleteTask={DeleteTask}
						onEventHandler={viewTask}
						state={data}
						FiltrDate={dateFiltr}
					/>
				</MainWrapp>
			</Wrapper>
		</>
	);
}
