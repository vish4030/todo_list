import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { todoEdit } from "../../service/actions/action";

import "./main.css";



const TodoForm = () => {
    const dispatch = useDispatch();
    const [todoValue, setTodoValue] = useState("");
   

    const inputValue = (e) => {
        setTodoValue(e.target.value);
    }

    const submitValue = (e) => {
        e.preventDefault();
        dispatch(todoEdit(todoValue));

        axios.post('http://localhost:5000/save', {
            todoValue
        }).then((res) => {
            alert(res.data);
        }).catch((err) => { console.log(err) })
        
        setTodoValue("");
    }


    return (<div className="todo-form-container">
        <form onSubmit={submitValue} className="todo-form">
            <input onChange={inputValue} type="text" id="form-input" value={todoValue}  required/>
            <button type="submit" id="btn">Save</button>
        </form>
    </div>)
}

export default TodoForm;