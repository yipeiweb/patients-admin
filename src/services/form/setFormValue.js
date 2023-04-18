export default (hooks) => {
    const {name, email, dischargeDate, symptoms, 
        setName, setEmail, setDischargeDate, setSymptoms} = hooks

    setName(name)
    setEmail(email)
    setDischargeDate(dischargeDate)
    setSymptoms(symptoms)
}