
import { SingleTask } from "./SingleTask"

export function List({listOfTasks, toggleTask, deleteTask}) {
 
return (
  <div style={{display:"flex",justifyContent:"space-around",}}>
        
          {listOfTasks.length === 0 && 'No tasks'}

          {listOfTasks.map(listOfTasks=>{

            return ( 
            <SingleTask 
            id={listOfTasks.id} 
            done={listOfTasks.done} 
            title={listOfTasks.title}
            date={listOfTasks.date} 
            key={listOfTasks.id}
            toggleTask={toggleTask} 
            deleteTask={deleteTask} 
            />

            )})}
        
    </div>
)

}

