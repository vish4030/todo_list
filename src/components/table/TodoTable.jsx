import { useState } from "react";
import { useDispatch } from "react-redux";

import { todoUpdate, todoDelete } from "../../service/actions/action";

import "./main.css";

const TodoTable = ({ item, index }) => {

    const [checked, setChecked] = useState(false);
    const [show, setShow] = useState(false);

    const [editValue, setEditValue] = useState(item);


    const dispatch = useDispatch();



    const onChangeValue = (e) =>{
        setEditValue(e.target.value);
    }

    const submitEditForm = (e) => {
        e.preventDefault();
        dispatch(todoUpdate({data:editValue, index}));
        setShow(!show)
    }

    return (

        <div className="todo-talbe-container" >


            <div style={{ display: show ? "block" : "none" }}>
                <form onSubmit={(e) => submitEditForm(e)} >
                    <input type="text" onChange={ (e) => onChangeValue(e)} value={editValue} required />
                    <button>Save Change</button>
                </form>
            </div>

            <div className="content">
                <input type="checkbox" id="todo-checkbox" checked={checked} onChange={
                    () => setChecked(!checked)} />
                <span style={{ opacity: checked ? 0.2 : 1 }} >{item}</span>
            </div>
            <button onClick={() => setShow(!show)}
                className="btn">Edit</button>
            <button onClick={() => dispatch(todoDelete(index))} className="btn">Delete</button>


        </div>

    )
}

export default TodoTable;