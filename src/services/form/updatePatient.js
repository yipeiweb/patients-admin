import setFormValue from '../../services/form/setFormValue'

export default (newPatient, hooks) => {
  const { patient, patients,
    setName, setEmail, setDischargeDate, setSymptoms
      , setPatient, setPatients} = hooks

  newPatient.id = patient.id
  const patientsUptaded = patients.map( item => item.id === patient.id 
    ? newPatient : item)

  setPatients(patientsUptaded)
  setPatient({})
  setFormValue({
    name: '', email: '', dischargeDate: '', symptoms: '',
    setName, setEmail, setDischargeDate, setSymptoms
  })
}