import React from 'react'
function InnerPage(props) {
  return (
    <div className='icons ' id={props.bg}>
      <div className="ico" onClick={()=>{props.fun(props.id, 1)}}>
        <h1>{props.icon}</h1>
        <h5>{props.name}</h5>
        <p className='Desc'>{props.desc}</p>
      </div>
    </div>
  )
}

export default InnerPage