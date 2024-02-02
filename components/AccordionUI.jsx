'use client'

import {React,useState} from 'react'
import{Accordion,AccordionBody,AccordionHeader} from '@material-tailwind/react'
import AllUsers from './AllUsers';
import SpecficUser from './SpecficUser';
import CreatenewUser from './CreatenewUser';
import UpdateUser from './UpdateUser';
import DeleteUser from './DeleteUser';

export default function AccordionUI() {
    const[open,setOpen]=useState(1);

    const handelOpem=(value)=>setOpen(open===value?0:value);
  return (
    <section className='w-[40rem]'>

       <Accordion open={open===1}>
        <AccordionHeader onClick={()=>handelOpem(1)}>
            All users
        </AccordionHeader>
        <AccordionBody>
            <AllUsers/>
        </AccordionBody>
        
       </Accordion>
       <Accordion open={open===2}>
       <AccordionHeader onClick={()=>handelOpem(2)}>
            search for user
        </AccordionHeader>
        <AccordionBody>
             
             <SpecficUser/>

        </AccordionBody>
       </Accordion>

       <Accordion open={open===3}>
       <AccordionHeader onClick={()=>handelOpem(3)}>
             Create new user
        </AccordionHeader>
        <AccordionBody>
             
              <CreatenewUser/>

        </AccordionBody>
       </Accordion>
       
       
       <Accordion open={open===4}>
       <AccordionHeader onClick={()=>handelOpem(4)}>
             Update a specfic user
        </AccordionHeader>
        <AccordionBody>
             
             <UpdateUser/>

        </AccordionBody>
       </Accordion>


       <Accordion open={open===5}>
       <AccordionHeader onClick={()=>handelOpem(5)}>
              Delete a specfic user
        </AccordionHeader>
        <AccordionBody>
             
              <DeleteUser/>

        </AccordionBody>
       </Accordion>

       
       
    </section>
  )
}
