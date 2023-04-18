import React from 'react'

const Button = ({callback, buttonText}) => {
  return (
    <button type="button" 
        className='bg-green-600 w-full mt-3 p-3 rounded-md 
        text-white uppercase font-bold hover:bg-green-700 
            cursor-pointer transtion-colors'
        onClick={callback}
    >{buttonText}</button>
  )
}

export default Button