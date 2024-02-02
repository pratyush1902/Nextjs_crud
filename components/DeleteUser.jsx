'use client'
import {Input,Button} from '@material-tailwind/react'
import {useState} from 'react'

export default function DeleteUser() {

    const[id,setId]=useState('')

     const handleSubmit=async(e)=>{
         
        // e.preventDefault();

        if(!id){
            alert('id de be gandu')
            return;

        }

        try{
            const response=await fetch(`api/users/${id}`,{
                method:'DELETE'
            });

            if(response.ok){
                alert('ho gya bhai delete');
                
            }else{
                const data=await response.json();
                alert(data.result || 'nai hua bhai kuch kam')
            }

        }catch(error){
            alert(error);
        }


     }
  return (
    <div>

        <form action={handleSubmit}>
            <Input type='text' placeholder='Enter the ID' value={id} onChange={(e)=>setId(e.target.value)} />

            <Button className='mt-2' type='submit'>Delete User</Button>

        </form>
      
    </div>
  )
}
