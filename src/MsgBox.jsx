import React from 'react'

const MsgBox = ({username,textcolor}) => {
  return (
    <>
      <h1 style={{color:textcolor}} className='m-8'>Hello {username}</h1>
    </>
  )
}

export default MsgBox