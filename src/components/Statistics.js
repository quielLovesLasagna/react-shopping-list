export default function Statistics({ items }) {
	const numOfItems = items.length;
	const numOfCompletedItems = items.filter((item) => item.completed).length;

	return (
		<div className="statistics">
			<p>Number of items: {numOfItems}</p>
			<p>Number of completed items: {numOfCompletedItems}</p>
		</div>
	);
}
