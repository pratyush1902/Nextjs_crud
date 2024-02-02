 'use client'
 import {React,useState} from 'react'
import { Button,Input } from '@material-tailwind/react' 

 
 export default function UpdateUser() {

    const [id,setId]=useState('')
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    

    const handleSubmit=async(e)=>{
        e.preventDefault();

        if(!id){
            alert('please enter the ID number')
            return;
        }

        const requestedData={id}

        if(name){
            requestedData.name=name;
        }
        if(email){
            requestedData.email=email;
        }
        if(password){
            requestedData.password=password;
        }

        try{
            const response=await fetch(`api/users`, {
                method:'PUT',
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify(requestedData)

            })
            if(response.ok){
                alert('user update sucessfully')
                clearForm();

            }else{
                const data= await response.json();
                alert(data.result || "user not updated")
            }


        }catch(error){
            alert(error)
        }
    }
    const clearForm = () => {
        setId("");
        setName("");
        setEmail("");
        setPassword("");
      };


   return (
     <div>
         <form onSubmit={handleSubmit}>
        <Input
          type="text"
          label="ID"
          placeholder="ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <Input
          type="text"
          label="Name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="text"
          label="Email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          label="Password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button className="mt-2" type="submit">
          Update User
        </Button>
      </form>
       
     </div>
   )
 }
 