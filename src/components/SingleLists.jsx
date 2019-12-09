import React from 'react'

function SingleLists({item,handleSingleListClicked}) {
    return (
        <div className="singlelist-dialog" onClick={()=>handleSingleListClicked(item)}>
                {item.title}
        </div>
    )
}

export default SingleLists
