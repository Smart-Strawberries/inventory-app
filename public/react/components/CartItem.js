import React from 'react'
import { Input, Collection} from 'usetheform'
import App from './App'

const preventNegativeQty = val => (val < 1 ? 1 : val);
export function CartItem({qty, price, onRemoveItem, id, description}) {

    return (
        <Collection object>
            <Input type="hidden" name="id" value={id}/>
            <div className="field">
                <label>Item</label>
                <Input type="text" name="item" readOnly value={description}/>
            </div>
            <div className="field">
                <label>Quantity</label>
                <Input reducers={preventNegativeQty} type="number" name="qty" value={qty}/>
            </div>
            <div className="field">
                <label>Price $</label>
                <Input type="text" name="price" value={price} disabled readOnly/>
            </div>
            <div className="field">
                <button type="button" onClick={() => onRemoveItem(id)}>Remove</button>
            </div>
        </Collection>
    )
}