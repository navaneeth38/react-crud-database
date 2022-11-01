import React from 'react'
import {Button,Checkbox,Form} from 'semantic-ui-react'
import {useState} from 'react'
import { useNavigate } from "react-router";
import axios from "axios"

export function Create (){
 
    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const [checkbox,setCheckBox] = useState(false)
    const [dob,setDOB] = useState()
    let navigate = useNavigate()
    const postData =() =>{
        axios.post('https://63601bd3ca0fe3c21aacbbe0.mockapi.io/fakeKey',{firstName,lastName,dob,checkbox})
        .then(()=>{
          navigate('/read')
        })
        
    }
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
      <label>Dob YY/MM/DD</label>
      <input type='date' value={dob} onChange={(e)=> setDOB(e.target.value) } />
    </Form.Field>  
    <Form.Field>
    <Checkbox label='I agree to the Terms and Conditions'  value={checkbox}  onChange={(e) =>setCheckBox(!checkbox)}  />
    </Form.Field>
    <Button type='submit' onClick={checkbox && postData}>Submit</Button>
  </Form>
  </div>
    )
}
export default Create