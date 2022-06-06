import React, { useState, useNavigate } from 'react';
import apiURL from '../api';


export const Item = ({item, setSelectedItem, fetchItems, phones, editButton}) => {

  const handleDelete = async () => {
    try {
      await fetch(`${apiURL}/items/${item.id}`, {
        method: 'DELETE',
      });
      setSelectedItem(null);
      fetchItems();
    } catch (err) {
      console.log("Error: ", err);
    }
  };
 
 
  return <div className='option'>
    
    <div className="check">
   
    <img className='zero' src={item.image} alt={item.title} style={{ width: 180, height: 280, padding: 4, margin: -15}} />
   
      <div className='mars'>
        {item.name} 
        {item.description}
        {item.category}
        ${item.price}
      </div>
      
      <button onClick={() => setSelectedItem(phones ? null : item)}>{phones ? 'Back To main Page' : 'More Info'}</button>
        {editButton}
     
        <button className="btn-danger" onClick={handleDelete}>DELETE</button>
       
        {phones}
       
    </div>
    
    
  </div>
}
