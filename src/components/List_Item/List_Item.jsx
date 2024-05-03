import trash from '../../img/trash.svg';
import fire3 from '../../img/fire3.svg';
import fire2 from '../../img/fire2.svg';
import fire1 from '../../img/fire1.svg';
import open from '../../img/open.svg';
import { Li, P, Img } from '../fragments/fragmentList';

function List_Item(props) {
	const viewTask = () => {
		props.viewTask(props.id);
	};  const DeleteTask = () => {
		props.DeleteTask(props.id);
	};
	return (
		<>
			<ul>
				<Li id={props.id}>
					<P size="1.8em">{props.name}</P>
					<P>{`${props.timeStart} - ${props.timeEnd}`}</P>
					<Img src={open} onClick={viewTask} />
					<Img
						src={
							props.img === 3
								? fire3
								: props.img === 2 ? fire2 : fire1
						}
					/>
					<Img onClick={DeleteTask} src={trash} />
				</Li>
			</ul>
		</>
	);
}

export default List_Item;
