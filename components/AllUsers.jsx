'use client'

import {React,useState,useEffect} from 'react'
import{List,ListItem,Card} from '@material-tailwind/react'


function AllUsers() {
const[users,setUsers]=useState('')

useEffect(()=>{
    const fetchAlluser=async()=>{
        const response=await fetch('/api/users')
        const userInfo=await response.json();
        setUsers(userInfo.data);
    }

    fetchAlluser();
},[])

  return (
    <div>
        {users && users.map((u)=>(
              <Card key={u.id} className='mb-4'>
                <List>
                    <ListItem>{u.id}</ListItem>
                    <ListItem>{u.name}</ListItem>
                    <ListItem>{u.email}</ListItem>
                    <ListItem>{u.password}</ListItem>
                </List>
            </Card>
        ))}
         
    </div>
  )
}

export default AllUsers
