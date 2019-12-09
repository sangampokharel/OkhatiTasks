import React from 'react'
import SingleLists from './SingleLists';

function Dialog({items,handleSingleListClicked}) {
  
    return (
        <div className="dialog">
            {
                items.map(item=>{
                return <SingleLists key={item.id} handleSingleListClicked={handleSingleListClicked} item={item}/>
                })
            }
        </div>
    )
}

export default Dialog;
