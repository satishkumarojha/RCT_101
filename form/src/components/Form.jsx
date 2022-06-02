import React, { useEffect, useState } from 'react'
import axios from 'axios';
export const Form = ({setFormdata,formdata}) => {
    const [form,setForm] = useState({
        name:"",
        age:0,
        address:"",
        department:"",
        salary:0,
        marital_state:false
    
    });
    const handleChange= (e)=>{
        let {name,value,type,checked}=e.target;
        if(type=="checkbox"){
            setForm({...form,[name]:checked})
        }
        else{
            setForm({...form,[name]:value});
        }
    }
    const handleSubmit= async(e)=>{
        e.preventDefault();
        let resp = await axios.post("http://localhost:8080/table",{
         name:form.name,
        age:form.age,
        address:form.address,
        department:form.department,
        salary:form.salary,
        marital_state:form.marital_state
        });
        console.log(resp.data);
        setFormdata([...formdata,{...resp.data}]);
    }
    useEffect(()=>{
        console.log(form);
    },[form]);
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Name</label>
            <input type="text" name='name'placeholder='Enter name' value={form.name}  onChange={handleChange}/>
            <label htmlFor="">Age</label>
            <input type="number" name='age'placeholder='Enter age'value={form.age}  onChange={handleChange}/>
            <label htmlFor="">Address</label>
            <input type="text" name='address'placeholder='Enter address' value={form.address} onChange={handleChange} />
            <label htmlFor="">Department</label>
           <select name="department" id="" onChange={handleChange}>
           <option value="Select">Select</option>
               <option value="Physics">Physics</option>
               <option value="Chemistry">Chemistry</option>
               <option value="Maths">Maths</option>
           </select>
           <label htmlFor="">Salary</label>
           <input type="number" name='salary' placeholder='Enter salary' value={form.salary} onChange={handleChange}/>
           <input type="checkbox" name='marital_state' onChange={handleChange} checked={form.marital_state} />
           <label htmlFor="">marital state</label>
           <input type="submit" />
        </form>
    </div>
  )
}
