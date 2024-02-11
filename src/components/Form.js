import { useState } from "react";

export default function Form({ onAddItem }) {
	const [description, setDescription] = useState("");

	function handleSubmit(e) {
		e.preventDefault();

		// ! -- Checking if the task is empty
		if (description.trim() === "") {
			alert("Please Add a task");
			return;
		}

		const id = crypto.randomUUID();
		const newItem = {
			description,
			completed: false,
			id,
		};

		onAddItem(newItem);

		setDescription("");
	}

	return (
		<form className="form" onSubmit={handleSubmit}>
			<input
				type="text"
				className="input"
				placeholder="Add an item here..."
				value={description}
				onChange={(e) => setDescription(e.target.value)}
			/>
			<button type="submit" className="submit-button">
				Add Item
			</button>
		</form>
	);
}
