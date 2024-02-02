import { users } from "@/app/util/db";
import { NextResponse } from "next/server";
import fs from 'fs'

//1.All user data

export function GET(){
    const data=users;
    return NextResponse.json({data},{status:200})
}

//4.create user

export async function POST(req,res){
    //getting data from user
let{id,name,age,email,password}=await req.json();

// checking if data is provided

if(!name || !email || !password){
    return NextResponse.json({result:"fill all the details"},{status:400})
}else{
    //add the new user to in-memory array

    users.push({id,name,age,email,password});

    //Extract just the users array from the updated data
    const updatedUserArray=users;
    // Convert the updated users array to a JSON string
    const updatedData=JSON.stringify(updatedUserArray,null,2)
    fs.writeFileSync(
        "./app/util/db.js",
        `export const users = ${updatedData};`,
        "utf-8"
      );

    return NextResponse.json({ success: "User Successfully Created" });

}



}
//5.Update users
export async function PUT(req,res){
const{id,name,email,password}=await req.json();

 // Find the user in the users array by ID
const userIndex=users.findIndex((u)=>u.id===id);

if(userIndex===-1){
    return NextResponse.json({result:"User not found"},{status:404})


}
if(name){
    users[userIndex].name=name;

}
if(email){
    users[userIndex].email=email;

}
if(password){
    users[userIndex].password=password;

}


// Update the user data in the db.js file
const updatedUsersArray = users;
const updatedData = JSON.stringify(updatedUsersArray, null, 2);

fs.writeFileSync(
  "./app/util/db.js",
  `export const users = ${updatedData};`,
  "utf-8"
);

return NextResponse.json({ success: "User Successfully Updated" },{status:200});
}