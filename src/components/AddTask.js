import { useState } from "react";


export function AddTask({addTask}){
    
    const [newTask , setNewTask] = useState("") ;

    function handleSubmit(e){
        e.preventDefault() ;

        if (newTask ==="" ) return 

        addTask(newTask)
           
        setNewTask("");
      }
    
    return (
      <div style={{minHeight:"30vh"}}>
        <div style={{display:"flex",flexDirection:"column",width:"50%",margin:"auto",marginTop:"3%"}}>
          
          <form onSubmit={handleSubmit} className="New-Task" >
            <div className="form-row">
              <label htmlFor="task">New Task ‎‎</label>
              <input 
                value={newTask}
                onChange={e=>setNewTask(e.target.value)}
                type="text" 
                id="task" />
            </div>

              <button style={{
                  width:"6%",
                  marginTop:"3%", 
                  backgroundColor: "blue", 
                  color: "white", borderRadius: "15%",
                  borderColor:"blue"}}
                  > 
                Add 
              </button>

          </form>
        </div>
      </div>
    )
}