import setFormValue from "./setFormValue"
import makeId from '../makeId'

export default (newPatient, hooks) => {
    const {patients, setPatients} = hooks
    const {setName, setEmail, setDischargeDate, setSymptoms} = hooks
    newPatient.id = makeId()

    setPatients([...patients, newPatient])
    setFormValue({
        name: '', email: '', dischargeDate: '', symptoms: '', 
        setName, setEmail, setDischargeDate, setSymptoms
    })
}
  