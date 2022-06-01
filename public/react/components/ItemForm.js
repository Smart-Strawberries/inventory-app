import React, { useState} from 'react';

export function ItemForm(props){
  const [quantity, setQuantity] = useState(0);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('/items/:id/update', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        quantity: quantity,
        name: name,
        category: category,
        price: price,
        description: description,
      }),
    }).then((res) => {
      res.json();
      props.setItemFormClicked(false)
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          type='text'
          placeholder='name'
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
        />
        <input 
          type='text'
          placeholder='quantity'
          onChange={(e) => setQuantity(e.target.value)}
          value={quantity}
          required
        />
        <input 
          type='text'
          placeholder='category'
          onChange={(e) => setCategory(e.target.value)}
          value={category}
          required
        />
        <input 
          type='text'
          placeholder='description'
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          required
        />
        <input 
          type='text'
          placeholder='price'
          onChange={(e) => setPrice(e.target.value)}
          value={price}
          required
        />
        <button type='submit'>Add/Update item!</button>
      </form>
    </>
  )
}