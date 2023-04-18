export default (id, patients, setPatients) => {
    if(confirm('¿Deseas eliminar este paciente?')) {
      const patientsUpdated = patients.filter(item => item.id !== id)
      setPatients(patientsUpdated)
    }
}