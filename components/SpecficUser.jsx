'use client'

import{Button,Card,List,Input,ListItem} from '@material-tailwind/react'
import { useState } from 'react'
 

const SpecficUser = () => {
    const [userId,setUserId]=useState('');
    const [userData,setUserData]=useState('');

    const fetchData=async()=>{
        const response=await fetch(`/api/users/${userId}`)
        if(response.ok){
            const res= await response.json()
            setUserData(res.user)
        }else{
            alert('error in featching the data')
            setUserData('')
        }
    }
  return (
    <div>
        <div className="flex">
            <div className="w-72">

                <Input label='enter user id' type='text' value={userId} onChange={(e)=>setUserId(e.target.value)}/>
                
            </div>
                <Button onClick={fetchData}>Search User</Button>
        </div>
        {userData ?(userData.map((d)=>(
                    <>
                    <Card className='wd-96 mt-5' >
                        <List>
                            <ListItem> ID:{d.id}</ListItem>
                            <ListItem> Name:{d.name}</ListItem>
                            <ListItem> email:{d.email}</ListItem>
                            
                        </List>
                    </Card>
                    </>
                ))
                ):(
                    <p>please kuch achaaa dhnd lo</p>
                )}
      
    </div>
  )
}

export default SpecficUser

