import React, { useState, useEffect } from 'react';
import { ItemsList } from './ItemsList';
import { ItemForm } from './ItemForm';

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {
	const [itemFormClicked, setItemFormClicked] = useState(false)
	const [items, setItems] = useState([]);

	async function fetchItems(){
		try {
			const response = await fetch(`${apiURL}/items`);
			const itemsData = await response.json();

			setItems(itemsData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	useEffect(() => {
		fetchItems();
	}, []);

	return (
		<main>
			<h1>Phone Store</h1>
			<h2>All things 🔥</h2>
			<ItemForm />
			<ItemsList items={items} />
		</main>
	)
}