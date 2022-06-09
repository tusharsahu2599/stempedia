import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import {AddTodo}  from "../Redux/actions";



export default function TodoInput() {

    const [todo,setTodo] = useState({
        title: '',
    });


    const dispatch = useDispatch();

    const handleChange = (e) => {
        setTodo({
            ...todo,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(AddTodo(todo));
        setTodo({
            title: '',
        });
    }

  return (
    <>
        <header
        style={{ 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            // height: '100vh',
            backgroundColor: '#f5f5f5',
            color: '#333',
            fontSize: '2rem',
            fontWeight: 'bold',
            fontFamily: 'sans-serif',
            textAlign: 'center',
            padding: '2rem',
            // boxSizing: 'border-box',
            // border: '1px solid #333'
        }}
        >Todo list</header>
        <form
        onSubmit={handleSubmit}>
            <input

            type="text" name="title" placeholder="Title" value={todo.title} onChange={handleChange}/>
            
            <button
            
            >Add</button>
        </form>
    </>
  )
}
