import Button from '../Button/Button';
import { useState, useRef } from 'react';
import {
	FormWrapp,
	FormTitle,
	LabelWrap,
	Label,
	Input,
	Textarea,
	Select
} from '../fragments/fragmentForm';

const IsValid = {
	descr: true,
	name: true,
	prior: true,
	timeStart: true,
	timeEnd: true,
	date: true
};

function Form(props) {
	const [isValid, setValid] = useState(IsValid);
	const nameEror = useRef();
	const timeStartEror = useRef();
	const timeEndEror = useRef();
	const dateEror = useRef();
	const descrEror = useRef();

	function checkedEror(obj) {
		switch (true) {
		case !obj.name:
			nameEror.current.focus();
			break;
		case !obj.timeStart:
			timeStartEror.current.focus();
			break;
		case !obj.timeEnd:
			timeEndEror.current.focus();
			break;
		case !obj.date:
			dateEror.current.focus();
			break;
		case !obj.descr:
			descrEror.current.focus();
			break;
		}
	}

	const addForm = (e) => {
		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);
		e.preventDefault();
		setValid(() => {
			return {
				descr: formProps.descr ? true : false,
				name: formProps.name ? true : false,
				prior: formProps.prior ? true : false,
				timeStart: formProps.timeStart ? true : false,
				timeEnd: formProps.timeEnd ? true : false,
				date: formProps.date ? true : false
			};
		});
		checkedEror(formProps);
		let counter = 0;
		for (let item in formProps) {
			if (formProps[item]) {
				counter++;
			}
		}
		if (counter === 6) {
			e.target.reset();
			props.changeArr(formProps);
		}
		setTimeout(() => {
			setValid(isValid);
		}, 2000);
	};
	return (
		<>
			<FormWrapp>
				<FormTitle>Новая задача</FormTitle>
				<form onSubmit={addForm}>
					<LabelWrap>
						<Label marginright="20px" htmlFor="name">
							Название:
						</Label>
						<Input
							ref={nameEror}
							valid={isValid.name ? '' : 'red'}
							color={'#5de869'}
							type="text"
							id="name"
							name="name"
							maxLength="22"
						/>
					</LabelWrap>
					<LabelWrap>
						<Label marginright="60px" htmlFor="timeStart">
							Время:
						</Label>
						<Input
							valid={isValid.timeStart ? '' : 'red'}
							color="#5d70e8"
							type="time"
							id="timeStart"
							name="timeStart"
							ref={timeStartEror}
						/>
						<Input
							valid={isValid.timeEnd ? '' : 'red'}
							color="#5d70e8"
							type="time"
							id="timeEnd"
							name="timeEnd"
							ref={timeEndEror}
						/>
					</LabelWrap>
					<LabelWrap>
						<Label marginright="80px" htmlFor="date">
							Дата:
						</Label>
						<Input
							valid={isValid.date ? '' : 'red'}
							type="date"
							id="date"
							name="date"
							ref={dateEror}
						/>
					</LabelWrap>
					<LabelWrap>
						<Label htmlFor="prior">Приоритет:</Label>
						<Select color={'#e85dc1'} id="prior" name="prior">
							<option value="низкий">Низкий</option>
							<option value="средний">Средний</option>
							<option value="высокий">Высокий</option>
						</Select>
					</LabelWrap>
					<LabelWrap>
						<Label marginright="10px" htmlFor="descr">
							Описание:
						</Label>
						<Textarea
							valid={isValid.descr ? '' : 'red'}
							id="descr"
							name="descr"
							maxLength="420"
							rows="11"
							cols="30"
							ref={descrEror}
						></Textarea>
					</LabelWrap>
					<Button>Внести задачу</Button>
				</form>
			</FormWrapp>
		</>
	);
}

export default Form;
