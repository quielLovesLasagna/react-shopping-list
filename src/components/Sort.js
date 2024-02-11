export default function Sort({ sortBy, onSort }) {
	return (
		<select
			className="select"
			value={sortBy}
			onChange={(e) => onSort(e.target.value)}
		>
			<option value="default">Default</option>
			<option value="alphabetical">A-Z</option>
			<option value="completed">Completed</option>
		</select>
	);
}
