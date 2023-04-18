import setFormValue from "../../services/form/setFormValue"

export default (setPatient, hooks) => {
    const {setName, setEmail, setDischargeDate, setSymptoms} = hooks
    setFormValue({
        name: '', email: '',dischargeDate: '', symptoms: '',
        setName, setEmail, setDischargeDate, setSymptoms
    })
    setPatient({})
}