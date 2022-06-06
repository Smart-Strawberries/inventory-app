import React, {useState} from 'react';
import apiURL from '../api';

export const ItemForm = ({cancelFunction, item, handleSubmit, setItem, method}) => {
  const {
    name,
    price,
    category,
    description,
    image
  } = item;

  const formName = method === 'add' ? 'Add Item' : 'Edit Item';


  return <div>
    <h3>{formName}</h3>
    <form  onSubmit={handleSubmit}>
      <label>name:</label>
      <input type="text" name="name" value={name} onChange={(ev) => setItem({...item, name: ev.target.value})}/>
      <label>Price:</label>
      <input type="number" name="price" value={price} onChange={(ev) => setItem({...item, price: ev.target.value})}/>
      <label>Category:</label>
      <input type="text" name="category" value={category} onChange={(ev) => setItem({...item, category: ev.target.value})}/>
      <label>Description:</label>
      <textarea name="description" value={description} onChange={(ev) => setItem({...item, description: ev.target.value})}/>
      <label>Image URL:</label>
      <input type="text" name="image" value={image} onChange={(ev) => setItem({...item, image: ev.target.value})}/>
      <span className='options-container'>
        <button type="submit">Submit</button>
        <button onClick={() => cancelFunction(false)}>Cancel</button>
      </span>
    </form>
  </div>
}
	