import onDeletePatient from '../../events/patient/onDeletePatient'
import Patient from '../Patient/Patient'

function PatientList({patients, setPatient, setPatients}) {
  const deletePatient = (id) => {
    onDeletePatient(id, patients, setPatients)
  }

  return (
  <div className='md:w-1/2 lg:w-3/5 mx-5'>
    <h2 className="font-black text-3xl text-center">
      Listado pacientes
    </h2>
    {patients && patients.length > 0 
    ? (
      <>
        <p className='text-xl mt-5 mb-5 text-center'>
          Administra tus {''}
          <span className="text-indigo-600 font-bold">
            Pacientes y Citas
          </span>
        </p>
        <div className='md:h-screen overflow-y-scroll'>
          {patients.map(item => (
            <Patient 
              patient={item} 
              key={item.id} 
              setPatient={setPatient}
              deletePatient={deletePatient} />
          ))}
        </div>
      </>
    )
    : (
        <p className='text-xl mt-5 mb-5 text-center'>
          No hay pacientes actualmente
        </p>
    )}
  </div>
  )
}

export default PatientList