import React, { useState } from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Listcomp from "./ListComp";

const ToDoList = () => {
  const [item,setItem] = useState("");
  const [newitem,setNewItem] = useState([]);
  const itemEvent = (event) =>{
  setItem(event.target.value);
  };

  const listofitems = () => {
      setNewItem((prevValue)=>{
       return[...prevValue,item]
      });
      setItem(" ");
  };
    return (
    <>
     <div className='main_div'>
         <div className='center_div'>
             <br/>
             <h1>ToDo List</h1>
             <br/>
             <input type='text' value={item}placeholder="Add an items" 
             onChange={itemEvent}/>
            <Button className="newBtn" onClick={listofitems}>
                  <AddIcon/>
            </Button>
            <br/>
            <ol>
                {newitem.map((val, index)=>{
                    return <Listcomp key= {index} text={val}/> ;
                })}
            </ol>
            <br/>
         </div>
     </div>
    </>
  );
};

export default ToDoList;