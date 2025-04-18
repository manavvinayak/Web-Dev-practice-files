import React from 'react';
import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

export default function App() {
     const [todos, setTodos] = useState([
      {
        title: "Read 10 pages",
        description: "Read book everyday",
        done: false,
      },
     ]);

     function addTodo() {
      let newArray = [];
      for(let i=0; i < todos.length; i++) {
        newArray.push(todos[i]);
      }
      newArray.push({
        title: document.getElementById("title").value,
        description: document.getElementById("desc").value,
      });
      setTodos(newArray);
      
     }

     return (
      <div>
        <div className='header'>
          <h2>To-Do App</h2>
        </div>
        <input id="title" type="text" placeholder="Title"></input>
        <input id="desc" type="text" placeholder="Enter your description"></input>
        <br />
        <button id="btn" onClick={addTodo}>Add ToDo</button>
        <br />
        <div className="todo-list">
          {todos.map((todo, index) => (
            <div key={index} className="todo-item">
              <h3>{todo.title}</h3>
              <p>{todo.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
    }

    function Todo(props) {
      return (
        <div>
          <h1></h1>
        </div>
      )
    }