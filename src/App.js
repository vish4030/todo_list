
import { useSelector } from 'react-redux';

import './App.css';
import TodoHeader from './components/header/TodoHeader';
import TodoForm from './components/form/TodoFrom';
import TodoTable from './components/table/TodoTable';



function App() {

  const {todoData} = useSelector((state) => state.todoStore);
  // const [todoData, setTodoData] = useState(["Do Yoga", "Do Bath", "Do BreakFast"]);

  // const modifyTodo = (id) => {
  //   const arr = todoData.filter((_item, index) => id !== index)
  //   setTodoData(arr);
  // }

  // const edititem = (data, index) => {
  //   console.log(`in edit`, data, index);
  //   todoData[index] = data;
  //   setTodoData( (arr) => [...arr]);
  //   console.log(todoData);

  // }


  // const todoUpdate = (data) => {

  //   setTodoData((prevTodoData) => [...prevTodoData, data]);
  // };

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
