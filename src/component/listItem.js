import React from 'react';
import './listItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FlipMove from 'react-flip-move';

export default function listItem(prpos){

    const items = prpos.items ;
    const listItems = items.map(item =>
    {
return <div className="list" key={item.key}>
    <p>
    <input type="text" 
    id={item.key} 
    value={item.text}
    onChange={
        (e) =>{
            prpos.upDate(e.target.value, item.key)
            }
    }/>
    <span>
        <FontAwesomeIcon  icon='trash'
        onClick={() => prpos.deleteItem(item.key)} />
    </span>
    </p>
</div>
    })
    return(
        <div>
            <FlipMove duration={300} easing="ease-in-out">
            {listItems}
            </FlipMove>
            </div>
    )
}