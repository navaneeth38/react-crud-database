import React from 'react'
import {Button,Form} from 'semantic-ui-react'
import {useState,useEffect} from 'react'
import axios from "axios"
import {useNavigate} from "react-router"

export function Update (){
  const options = ["A+","A-","B+","B-","O+","O-","AB+","Rh"];
    const [id,setId] = useState(null)
    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const [blood,setBlood] = useState(options[0])
    const [dob,setDOB] = useState()
    let navigate = useNavigate()
    
    

    const updateAPIData =() =>{
        axios.put(`https://63601bd3ca0fe3c21aacbbe0.mockapi.io/fakeKey/${id}`,{firstName,lastName,blood,dob})
        .then(()=>{
            navigate('/read')
        })
    }

  

    useEffect(() =>{
        
        setFirstName(localStorage.getItem('First Name'))
        setLastName(localStorage.getItem('Last Name'))
        setBlood(localStorage.getItem('Blood Group'))
        setId(localStorage.getItem('ID'))
        setDOB(localStorage.getItem('Dob'))
    },[])
    return (
    <div>
    <Form className='create-form'>
    <Form.Field>
      <label>First Name</label>
      <input placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
    </Form.Field>
   <Form.Field>
          <select value={blood} onChange={(e) => setBlood(e.target.value)}>
            {options.map((value) => (
              <option value={value} key={value}>
                {value}
              </option>
            ))}
          </select>
        </Form.Field>
        <Form.Field>
          <label>Date of Birth</label>
          <input
            type="date"
            value={dob}
            onChange={(e) => setDOB(e.target.value)}
          />
        </Form.Field>
    <Button type='submit' onClick={updateAPIData}>Update</Button>
  </Form>
  </div>
    )
}
export default Update