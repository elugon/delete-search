import React from 'react'

const CardDelete = (props)=> {

    const { info: { name, _id }, onDelete } = props;
  return (
    <div>
        <p>{name}</p>
        <button onClick={()=> onDelete(_id)}>Delete</button>
        </div>
        )
}

export default CardDelete;