export default function Buttons({ onDeleteAll, onCompleteAll }) {
	return (
		<div className="buttons-container">
			<Button onClick={onCompleteAll}>Complete All</Button>
			<Button onClick={onDeleteAll}>Clear All</Button>
		</div>
	);
}

function Button({ children, onClick }) {
	return (
		<button className="button" onClick={onClick}>
			{children}
		</button>
	);
}
