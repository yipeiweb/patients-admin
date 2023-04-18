import {useState, useEffect} from 'react'
import Header from "./components/Header"
import PatientList from "./components/PatientList/PatientList"
import Form from "./components/Form/Form"
import {onLoad, onChangePatients} from './app.controller'

function App() {
  const [patients, setPatients] = useState([])
  const [patient, setPatient] = useState({})

  useEffect(() => { onLoad(setPatients) }, [])
  useEffect(() => { onChangePatients(patients) }, [patients])
  
  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Form
          patients={patients}
          patient={patient}
          setPatient={setPatient}
          setPatients={setPatients} />
        <PatientList
          patients={patients}
          setPatient={setPatient} 
          setPatients={setPatients}/>
      </div>
    </div>
  )
}

export default App
