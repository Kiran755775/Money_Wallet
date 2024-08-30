import { useState } from "react";
import { Link } from "react-router-dom";
const incomesList=[{
    id:1,
    name:"Interests"
},
{
    id:2,
    name:"Prize"
},{
    id:3,
    name:"Salary"
},
{
    id:4,
    name:"Sale"
},{
    id:5,
    name:"Tip"
}
]
export default function Incomes(){
    const [item1,setItem1]=useState("");
    localStorage.setItem("item1",item1)
    return(
        <>
        <div>
        {incomesList.map((eachItem) => (
            <Link key={eachItem.id} to="/newtransaction">
          <li key={eachItem.id} className="flex items-center  ml-5 my-8 " onClick={()=>setItem1(eachItem.name)}>
            <h1 className="bg-red-600 rounded-full h-12 w-12 text-center flex justify-center items-center text-white text-xl ">
              |
            </h1>
            <p className="text-black font-semibold ml-5">{eachItem.name}</p>
          </li>
          </Link>
        ))}
        </div>
        </>
    )
}