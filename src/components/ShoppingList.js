import Item from "./Item";

export default function ShoppingList({ items, onToggleItem, onDeleteItem }) {
	return (
		<ul className="shopping-list">
			{items.map((item) => (
				<Item
					item={item}
					key={item.id}
					onToggleItem={onToggleItem}
					onDeleteItem={onDeleteItem}
				/>
			))}
		</ul>
	);
}
