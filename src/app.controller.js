const onLoad = (setPatients) => {
    const patients = localStorage.getItem('patients') ?? []
    setPatients(JSON.parse(patients))
}

const onChangePatients = (patients) => {
    localStorage.setItem('patients', JSON.stringify(patients))
}

export {onLoad, onChangePatients}