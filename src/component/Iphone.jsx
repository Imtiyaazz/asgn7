import React,{useState} from "react";

export const Iphone = ()=>{
    const [iphone,setIphone]=useState()
    const [name,setName]=useState()
    const [color,setColor]=useState()  
    const [price,setPrice]=useState()
    return(
        <div className="main" style={{color:'white'}}> 
            <tr>
                <td><input onChange={(e)=>setIphone(e.target.value)} type="text" placeholder="Enter Brand Name"/></td>
                <td>{iphone}</td>
            </tr>
            <tr>
                <td>{name}</td>
                <td><input onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter Mobile Name"/></td>
            </tr>
            <tr>
                <td><input onChange={(e)=>setColor(e.target.value)} type="text" placeholder="Color Name"/></td>
                <td>{color}</td>
            </tr>
            <tr>
                <td>        Rs.{price}</td>
                <td><input onChange={(e)=>setPrice(e.target.value)} type="text" placeholder="Enter Price"/></td>
            </tr>
        </div>
    )
}