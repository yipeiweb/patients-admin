import setFormValue from "../services/form/setFormValue"

export default (patient, hooks) => {
  const {name, email, dischargeDate, symptoms} = patient
  const {setName, setEmail, setDischargeDate, setSymptoms} = hooks

  if(Object.keys(patient).length > 0) {
    setFormValue({
      name, email, dischargeDate, symptoms,
      setName, setEmail, setDischargeDate, setSymptoms
    })      
  }
}