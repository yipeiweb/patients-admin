import updatePatient from '../../services/form/updatePatient'
import addPatient from '../../services/form/addPatient'

export default (e, hooks) => {
    e.preventDefault()
    
    const {name, email, dischargeDate, symptoms, setError, patient} = hooks;

    if ([name, email, dischargeDate, symptoms].includes("")) {
      setError(true)
      return
    }

    setError(false)
    const newPatient = {name, email, dischargeDate, symptoms}

    if (patient.id) {
      updatePatient(newPatient, hooks)
      return
    }
  
    addPatient(newPatient, hooks)
  }