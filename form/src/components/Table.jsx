import React from 'react'
import styles from './Table.module.css';
export const Table = ({formdata}) => {
  return (
    <div className={styles.table}>
        <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Address</th>
                <th>Department</th>
                <th>Salary</th>
                <th>Marital State</th>
                <th>Remove</th>
            </tr>
        </thead>
        
        <tbody>
        {formdata.map((e)=>{
            return (
            <tr key={e.id}>
                <td>{e.name}</td>
                <td>{e.age}</td>
                <td>{e.address}</td>
                <td>{e.department==""?"English":e.department}</td>
                <td>{e.salary}</td>
                <td>{e.marital_state?"married":"single"}</td>
                <td><button>Remove</button></td>
            </tr>
            )
        })}
        </tbody>
        </table>
        
    </div>
  )
}
