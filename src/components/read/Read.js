import React from 'react'
import { Table,Button } from "semantic-ui-react";
import {useEffect,useState} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'

export const Read =() =>{
    const [apidata,setApiData] = useState([])
    useEffect(()=>{
        axios.get('https://63601bd3ca0fe3c21aacbbe0.mockapi.io/fakeKey')
        .then((response)=>{
            setApiData(response.data)
        })
    },[])

    const setData  = (data) =>{
      let {id,firstName,lastName,blood,checkbox,dob} = data
      localStorage.setItem("ID",id)
      localStorage.setItem("First Name",firstName)
      localStorage.setItem("Last Name",lastName)
      localStorage.setItem("Blood Group",blood)
      localStorage.setItem("Check box",checkbox)
      localStorage.setItem("Dob",dob)

    }

    const getData =() =>{
      axios.get('https://63601bd3ca0fe3c21aacbbe0.mockapi.io/fakeKey')
      .then((getRead)=>{
          setApiData(getRead.data)
    })}

    const onDelete = (id) =>{
       axios.delete(`https://63601bd3ca0fe3c21aacbbe0.mockapi.io/fakeKey/${id}`)
       .then(()=>{
           getData()
       })
      }

    return(
      <div>
         <Link to ='/create'>
          <Button >Create</Button>
          </Link>
        <div>
  <Table singleLine>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>ID</Table.HeaderCell>
        <Table.HeaderCell>First Name</Table.HeaderCell>
        <Table.HeaderCell>Last Name</Table.HeaderCell>
        <Table.HeaderCell>Blood Group</Table.HeaderCell>
        <Table.HeaderCell>DOB</Table.HeaderCell>
        <Table.HeaderCell>Checked</Table.HeaderCell>
        <Table.HeaderCell>Update</Table.HeaderCell>
        <Table.HeaderCell>Delete</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
        {apidata.map((data)=>{return(
      <Table.Row>
        <Table.Cell>{data.id}</Table.Cell>
        <Table.Cell>{data.firstName}</Table.Cell>
        <Table.Cell>{data.lastName}</Table.Cell>
        <Table.Cell>{data.blood}</Table.Cell>
        <Table.Cell>{data.dob}</Table.Cell>
        <Table.Cell>{data.checkbox? 'checked':'Unchecked'}</Table.Cell>
        <Link to= '/update'>
        <Table.HeaderCell><Button id='update' onClick={()=> setData(data)} color='green'>Update</Button></Table.HeaderCell>
        </Link>
        <Table.HeaderCell><Button  onClick={() => onDelete(data.id)} color='red'>Delete</Button></Table.HeaderCell>
        </Table.Row>
      )})}
    </Table.Body>
    </Table>
    </div>

        </div>
    )
}
export default Read