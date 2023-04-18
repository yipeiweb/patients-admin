import React from 'react'

const Textarea = ({value, labelText, callback, id}) => {
  return (
    <div className='mb-5'>
        <label className='block font-bold uppercase text-gray-700'
            htmlFor={id}>
            {labelText}
        </label>
        <textarea
            value={value}
            onChange= { e => {callback(e.target.value)}}
            className="border-2 w-full mt-2 p-2 placeholder-gray-400
             rounded-md"
            placeholder="Sintomas del paciente" id={id}/>
  </div>
  )
}

export default Textarea