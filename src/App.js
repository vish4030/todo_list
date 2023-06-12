
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';


import './App.css';
import TodoHeader from './components/header/TodoHeader';
import TodoForm from './components/form/TodoFrom';
import TodoTable from './components/table/TodoTable';
import { todoEdit } from './service/actions/action';




function App() {

  const { todoData } = useSelector((state) => state.todoStore);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('http://localhost:5000/get').then((res) => {
      console.log(res);
      for (let todoItem of res.data) {
        dispatch(todoEdit(todoItem));
        console.log("get", todoItem);
      }


    }).catch((err) => alert(err));

  }, [])



  return (
    <div className="App">
      <TodoHeader />
      <TodoForm />
      {
        todoData.map((item, index) => {
          return <TodoTable key={index}
            item={item}
            index={index}

          />
        })

      }
    </div>
  );
}
export default App;
