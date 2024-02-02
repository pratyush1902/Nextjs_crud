import { users } from "@/app/util/db.js";
import { NextResponse } from "next/server";
import fs from 'fs'

//2.get specfic users
export async function  GET(_,res){
    const{id}=await res.params
    const user=users.filter((u)=>u.id===id);
    return NextResponse.json({user,ok:true})
}

// 3.login
export async function POST(req,res){
    let{name,email,password}=await req.json();
    const {id}=await res.params;

    const {
        name:uName,
        email:uEmail,
        password:uPassword, 
    }=users.find((u)=>u.id===id);

    if(uName===name && uEmail===email && uPassword===password){
        return NextResponse.json({result:"logged in ho gyaaa bhai"})
    }
  else  if(!name||!email||!password){
        return NextResponse.json({result:"fill kar do bhai sab kuch"})
    }else{
       return NextResponse.json({result:'invalid'})
    }


}
//6.Delete User

export async function DELETE(req,res){
    const{id}=await res.params;

    const userIndex= users.findIndex((u)=>u.id===id);

    if(userIndex===-1){
        return  NextResponse.json({result:"user not found"},{status:404});
    }
// Remove the user from the users array

users.splice(userIndex,1);
// Update the user data in the db.js file
const updatedUsersArray = users;
const updatedData = JSON.stringify(updatedUsersArray, null, 2);

fs.writeFileSync(
  "./app/util/db.js",
  `export const users = ${updatedData};`,
  "utf-8"
);

return NextResponse.json({ success: "User Successfully Deleted"})

}