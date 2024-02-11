import { useState } from "react";
import Form from "./Form.js";
import ShoppingList from "./ShoppingList.js";
import Statistics from "./Statistics.js";
import Sort from "./Sort.js";

export default function App() {
	const [items, setItems] = useState([]);
	const [sortBy, setSortBy] = useState("default");

	// ! -- Adds a new item based on current items
	function handleAddItem(item) {
		setItems((items) => [...items, item]);
	}

	// ! -- Toggles the "completed" property of a specific item based on item id
	function handleToggleItem(id) {
		setItems((items) =>
			items.map((item) =>
				item.id === id ? { ...item, completed: !item.completed } : item
			)
		);
	}

	// ! -- Deletes a specific item based on item id
	function handleDeleteItem(id) {
		setItems((items) => items.filter((item) => item.id !== id));
	}

	// ! -- Sorting functionality
	let sortedItems;

	if (sortBy === "default") {
		sortedItems = items;
	}

	if (sortBy === "alphabetical") {
		sortedItems = items
			.slice()
			.sort((a, b) => a.description.localeCompare(b.description));
	}

	if (sortBy === "completed") {
		sortedItems = items
			.slice()
			.sort((a, b) => Number(b.completed) - Number(a.completed));
	}

	return (
		<div className="container">
			<Form onAddItem={handleAddItem} />
			{items.length > 0 && (
				<>
					<Sort sortBy={sortBy} onSort={setSortBy} />
					<Statistics items={items} />
					<ShoppingList
						items={sortedItems}
						onToggleItem={handleToggleItem}
						onDeleteItem={handleDeleteItem}
					/>
				</>
			)}
		</div>
	);
}
