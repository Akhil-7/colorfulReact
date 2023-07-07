import React from 'react'

function SingleItem(props) {
    console.log(props);
  return (
    <div className='item' id={props.data.bg}>
        <div className="">
        <h1 className='SinIcon'>{props.data.icon}</h1>
        <h1 className='SinItem'>{props.data.name}</h1>
        <p className='SinDesc'>{props.data.desc}</p>
        </div>
    </div>
  )
}

export default SingleItem