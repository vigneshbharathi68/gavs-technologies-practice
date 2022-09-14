// import logo from './logo.svg';
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import './App.css';
import { useState } from 'react'

function App() {
  let [tasks, setTask] = useState([
    {
      "text": "Complete the task tracker app with React JS",
      "day": "September 10, 2022",
      "reminder": true,
      "id": 5
    },
    {
      "text": "Doctor's Appoinment",
      "day": "September 12, 2022",
      "reminder": false,
      "id": 6
    },
    {
      "text": "Parents meeting at school",
      "day": "September 20, 2022",
      "reminder": false,
      "id": 7
    }
  ])

  // Add a New Task
  const onAddTask = (task) => {
    console.log([...tasks, task])
    setTask([...tasks, task])
  }

  // Delete a Task
  const deleteTask = (id) => {
    console.log('Clicked delete task', id)
    setTask(tasks.filter(el => el.id !== id)) 
  }

  return (
    <div className="container inverse full-bleed">
      {/* adsfasdfasdf */}
      <Header title="Task Trackers" />
      <AddTask onAdd={ onAddTask }/>
      {tasks.length > 0 ? <Tasks tasks={ tasks } onDelete={ deleteTask }/> : <p>No tasks to show</p> }
      
    </div>
  );
}

export default App;
