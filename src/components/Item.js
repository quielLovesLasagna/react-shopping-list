export default function Item({ item, onToggleItem, onDeleteItem }) {
	return (
		<li className="item">
			<input
				type="checkbox"
				className="checkbox"
				checked={item.completed}
				value={item.completed}
				onChange={() => onToggleItem(item.id)}
			/>
			<p
				className="task-description"
				style={item.completed ? { textDecoration: "line-through" } : {}}
			>
				{item.description}
			</p>
			<button className="delete-button" onClick={() => onDeleteItem(item.id)}>
				❌
			</button>
		</li>
	);
}
