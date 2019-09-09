import React, { useState, useEffect } from 'react'

const Todo = () =>{
    const [text, setText] = useState('');
    const [list, setList] = useState([]);
    useEffect(()=>{
        console.log(list);
    })
    return (
        <main>
            <h1>Todo List</h1>
            <input type="text" placeholder="Enter Task"
                onBlur={e => {
                    setText(e.target.value) //updates the text store
                }}
             />
             <button onClick={ () => {
                    let a = [...list]
                    a.push(text); // adds to the List
                    setList(a); //updates the list store
                    }

             }>Add</button>
            <ul>
                {list.map((item, index)=>(
                    <ListItem key={index} taskname={item} />
                ) )}
            </ul>
        </main>
    )
}

const ListItem = ({taskname}) => {
    const [checked, setChecked] = useState(false);
    const [visible, setVisible] = useState(true);

         const AllList = () => (<li>
            <input type = "checkbox" onClick={()=>setChecked(!checked)} /> 
            {!checked ?<span>{taskname}</span>
            :<strike>{taskname}</strike>}
            <button onClick={()=> setVisible(false)}>Delete</button>
         </li>)
         const DeleteList = () => <></>
    return  visible ? <AllList /> : <DeleteList />
}

export default Todo;