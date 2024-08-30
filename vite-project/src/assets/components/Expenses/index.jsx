import { useState } from "react"
import { Link } from "react-router-dom";
const expensesList=[{
    id:1,
    name:"Car expenses"
},
{
    id:2,
    name:"Food and drinks"
},{
    id:3,
    name:"Friends"
},
{
    id:4,
    name:"Hobby"
},{
    id:5,
    name:"Technology"
},
{
    id:6,
    name:"Travel"
}
]

export default function Expenses(){
    const [item1,setItem1]=useState("");
    localStorage.setItem("item1",item1)
    return(
        <>
        <div>
        {expensesList.map((eachItem) => (
           
          <li key={eachItem.id} className="flex items-center  ml-5 my-8 " onClick={()=>setItem1(eachItem.name)}>
            <h1 className="bg-red-600 rounded-full h-12 w-12 text-center flex justify-center items-center text-white text-xl ">
              |
            </h1>
            <p className="text-black font-semibold ml-5">{eachItem.name}</p>
          </li>
          
        ))}
        </div>
        </>
    )
}