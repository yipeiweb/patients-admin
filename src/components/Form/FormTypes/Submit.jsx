const Submit = ({value}) => {
  return (
    <input type="submit" 
        className='bg-indigo-600 w-full p-3 rounded-md text-white 
            uppercase font-bold hover:bg-indigo-700 
            cursor-pointer transtion-colors'
        value={ value }/>
  )
}

export default Submit