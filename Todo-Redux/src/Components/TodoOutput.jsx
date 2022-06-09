import React from 'react'
import {useSelector} from 'react-redux'


export default function TodoOutput() {
    const todosl = useSelector(store => store.todos);


  return (
    <div>
        <ul
        style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            // height: '100vh',
            backgroundColor: '#f5f5f5',
            color: '#333',
            fontSize: '1rem',
            fontWeight: 'bold',
            fontFamily: 'sans-serif',
            // textAlign: 'center',
            padding: '2rem',
        }}
        >
            {todosl.map(todo => (
                <div
                style={{ 
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    // height: '100vh',
                    backgroundColor: '#f5f5f5',
                }}
                >
                <li key={todo.id}>
                    <h3>{todo.title}</h3>
                </li>
                </div>
            ))}
        </ul>
    </div>
  )
}
