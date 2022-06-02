import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Form } from './components/Form'
import { Table } from './components/Table'
import axios from 'axios'

function App() {
  const [formdata, setFormdata] = useState([]);
  useEffect(()=>{
    fetchdata();
  },[]);
  let fetchdata = async()=>{
    let fd = await axios.get("http://localhost:8080/table");
    console.log(fd.data);
    setFormdata([...fd.data]);
  }

  return (
    <div className="App">
     <Form setFormdata={setFormdata} formdata={formdata}/>
     <Table formdata={formdata}/>
    </div>
  )
}

export default App
