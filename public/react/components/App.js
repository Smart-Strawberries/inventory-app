import React, { useState, useEffect } from 'react';
import { ItemsList } from './ItemsList';
import { Item } from './Item';
import SingleItem from './singleItem'
import Form, {Collection, Input, useForm} from 'usetheform'
import {Cart} from './Cart'


// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	const [items, setItems, setCartItem] = useState([]);
    const [singleItem, setSingleItem] = useState(0);

	const onRemoveItem = (idToRemove) =>
		setCartItem((prev) => prev.filter(({id}) => id !== idToRemove))

	const onAddItem = () => {
		const item = createRandomItem();
		setCartItem((prev) => [...prev, item])
	}

	const Reset = props => {
		const { reset, pristine } = useForm();
		return (
			<button disabled={pristine} type="button" onClick={reset}>
				Reset
			</button>
		);
	}

	const onChange = (state, isFormValid) => console.log('CHANGE', state, isFormValid)

	const onSubmit= (state) => console.log('SUBMIT', state)

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
	}, [singleItem]);


	return (
		<div className="main">
			<h1>Phone Store</h1>
			<h2 >All things 🔥</h2>
			<div className="App">
				<Form onChange={onChange} onSubmit={onSubmit}>
					<Cart items={items} onRemoveItem={onRemoveItem}/>
					<button type="submit">Remove Item</button>
				</Form>
				<br/>
				<button type="button" onClick={onAddItem}>Add item to cart</button>
			</div>
			<ItemsList items={items} />

			<Form onSubmit={state => alert(JSON.stringify(state))}>
				<Collection object name="user">
					<Input type="text" name="name" placeholder="Your Name" />
					<Input type="text" name="email" placeholder="Your Email" />
				</Collection>
				<button type="submit" onClick={{onAddItem}}>Submit</button>
				<Reset />
			</Form>
		</div>
	)
}
let id = 0;
const createRandomItem = () => {
	id = id + 1
	return {
		id,
		qty: 1,
		description: `Item number: ${id}`,
		price: Number((Math.random() * 10 + 1).toFixed(2))
	}


}