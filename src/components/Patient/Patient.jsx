const Patient = ({patient, setPatient, deletePatient}) => {
  return (
    <div className='rounded-xl mx-5 my-5 bg-white shadow-md px-5 py-10'>
        <p className='font-bold mb-3 text-gray-700 uppercase'>
          Nombre: {''}
          <span className='font-normal normal-case'>{patient.name}</span>
        </p>

        <p className='font-bold mb-3 text-gray-700 uppercase'>
          Email: {''}
          <span className='font-normal normal-case'>{patient.email}</span>
        </p>

        <p className='font-bold mb-3 text-gray-700 uppercase'>
          Fecha alta: {''}
          <span className='font-normal normal-case'>{patient.dischargeDate}</span>
        </p>

        <p className='font-bold mb-3 text-gray-700 uppercase'>
          Sintomas: {''}
          <span className='font-normal normal-case'>{patient.symptoms}</span>
        </p>
        <div className="flex justify-between">
          <button
            type="button"
            className="py-2 px-10 bg-yellow-400 hover:bg-yellow-300 
            text-white font-bold uppercase rounded-lg"
            onClick={() => { setPatient(patient)}}>
              Editar
          </button>

          <button
            type="button"
            className="py-2 px-10 bg-red-600 hover:bg-red-700 
            text-white font-bold uppercase rounded-lg"
            onClick={() => deletePatient(patient.id)}>
              Eliminar
          </button>
        </div>
      </div>
  )
}

export default Patient