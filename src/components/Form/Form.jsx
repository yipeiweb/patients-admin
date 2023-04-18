import data from '../../data/data'
import onChangePatient from '../../events/onChangePatient'
import onHandleSubmit from '../../events/form/onHandleSubmit'
import onCancelEdit from '../../events/form/onCancelEdit'
import FormHeading from './FormHeading'
import Text from './FormTypes/Text'
import Date from './FormTypes/Date'
import Textarea from './FormTypes/Textarea'
import Button from './FormTypes/Button'
import Submit from './FormTypes/Submit'
import Error from './Error/Error'
import { useState,useEffect } from "react"

function Form({patients, patient, setPatients, setPatient}) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [dischargeDate, setDischargeDate] = useState('')
  const [symptoms, setSymptoms] = useState('')
  const [error, setError] = useState(false)
  const {errorMessage} = data
  const hooks = {
    name, email, dischargeDate, symptoms, error, patient, patients,
    setName, setEmail, setDischargeDate, setSymptoms, setError
      , setPatient, setPatients
  }

  const handleSubmit = (e) => { onHandleSubmit(e,hooks)}
  useEffect(() => {onChangePatient(patient, hooks)}, [patient])

  return (
    <div className='md:w-1/2 lg:w-2/5 mx-5'>
      <FormHeading />
      <form
        onSubmit={handleSubmit} 
        className='bg-white shadow-md rounded-lg py-10 px-5 mb-10 mt-5'>
        {error && <Error message={errorMessage} />}
        
        <Text value={name} id="name"
          labelText='Nombre de paciente' callback={setName} />
        <Text value={email} id="email"
          labelText='Email' callback={setEmail} />
        <Date value={dischargeDate} id="dischargeDate"
          labelText='Fecha de alta' callback={setDischargeDate} />
        <Textarea value={symptoms} id="symptoms"
          labelText='Sintomas' callback={setSymptoms} />

        <Submit value={ patient.id ? "Editar paciente" : "Agregrar paciente"} />
        { patient.id && (
          <Button buttonText='Cancelar edición' 
            callback={() => {onCancelEdit(setPatient, hooks)}}  />
        )}
      </form>
    </div>
  )
}

export default Form