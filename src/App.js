import { useEffect ,useState } from "react";
import { AddTask } from "./components/AddTask";
import { List } from "./components/List";
import background from "./images/background.webp";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {

  const [listOfTasks, setList] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(listOfTasks))
  }, [listOfTasks]); 

  function addListOfTasks(title){
    setList(currntList =>{
      return [...currntList,{
        id: crypto.randomUUID(),
        title ,
        done: false, 
        date: new Date()
      }] ;
    })
  }

  function toggleTask(id,done){
    setList(currntList =>{
      return currntList.map(listOfTasks => {
        if (listOfTasks.id === id){
          return {...listOfTasks,done}
        }
        return listOfTasks
      })  
    })
  }

  function deleteTask(id){
    setList(currntList =>{
      return currntList.filter(listOfTasks => listOfTasks.id !== id)
    })
  }

   return (
    <>
      <div style={{ 
        backgroundImage: `url(${background})` ,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        border:"1px solid ",
        minHeight:"100vh"}}>

      <AddTask addTask={addListOfTasks}/>

       

       <List listOfTasks={listOfTasks} toggleTask={toggleTask} deleteTask={deleteTask}/>
       </div>
     </>
   );
 }

