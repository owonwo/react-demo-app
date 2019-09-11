import React, { useState, useEffect } from 'react'
import Button from './components/Button.js'
import Input from './components/Input';
import List from './components/List';


const createList = (taskname) => ({
    name: taskname,
    checked: false, 
    deleted: false
})

const defaultList = [
    { name: 'Wash Clothes', deleted: false, checked: false },
    { name: 'Work out', deleted: false, checked: false },
    { name: 'Code Web App', deleted: false, checked: false },
]

const Todo = () =>{
    const [text, setText] = useState('');
    const [list, setList] = useState(defaultList);

    useEffect(()=>{
        console.log(list);
    })

    const handleDelete = (item) => () => {
        const newList = list.map(e => {
            if (e.name === item.name) {
                e.deleted = true;
            }
            return e;
        })
        setList(newList)
    }

    const handleCheck = (item) => () => {
        const newList = list.map(e => {
            if (e.name === item.name) {
                e.checked = !e.checked;
            }
            return e;
        })
        setList(newList)
    } 

    // ISSUE WAS WITH ID 

    return (
        <main style={{ padding: '10vh'}}>
            <h1 style={{fontWeight: '100'}}>Todo List</h1>
            <Input 
                type="text" 
                placeholder="Enter Task"
                onBlur={e => {
                    setText(e.target.value) //updates the text store
                }}
             />
             <Button 
                small outline
                style={{marginLeft: '1rem'}} 
                onClick={() => {
                    setList([...list, createList(text)])
                }}>
                    Add
            </Button>

            <List>
                {list.filter((e) => !e.deleted)
                    .map((item, index)=>(
                        <List.Item key={index} task={item} 
                            onChecked={handleCheck(item)}
                            onDelete={handleDelete(item)}/>
                ))}
            </List>
        </main>
    )
}

export default Todo;