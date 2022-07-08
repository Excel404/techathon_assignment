import React from 'react'

export const Button = (text) => {
  
  return (
    <> 
    <button style={{backgroundColor:'azure'}}>{text}</button>
    </>
  )
}
export const Input = (placeHolder) => {
  
  return (
    <>
    <input type= 'text' placeholder = {placeHolder}></input>
    </>
  )
}

