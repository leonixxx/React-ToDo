// import { createContext } from 'react';

// export const ListContext = createContext({
//     name: 'Поход в горы',
//     timeStart: '16:00',
//     timeEnd: '18:00',
//     date: '11.01.2023',
//     prior: 'высокий',
//     descr: 'Это будет лучшее путешествие в моей жизни, я абсолютно уверен в этом',
//     id: 1
// });

const INITIAL_STATE = [
	{
		name: 'Поход в горы',
		timeStart: '16:00',
		timeEnd: '18:00',
		date: '11.01.2023',
		prior: 'высокий',
		descr: 'Это будет лучшее путешествие в моей жизни, я абсолютно уверен в этом',
		id: 5
	},
	{
		name: 'Поход в горы',
		timeStart: '16:00',
		timeEnd: '18:00',
		date: '11.01.2023',
		prior: 'высокий',
		descr: 'Это будет лучшее путешествие в моей жизни, я абсолютно уверен в этом',
		id: 6
	}
];
let arr = INITIAL_STATE.filter(item => item.id === 5);
console.log(arr);
