import React from "react";

const TodoLists = ({Todolists}) =>{
   return(
    <div>
        {Todolists.map((todo,index) =>
        <div key={index}>
            <h4>{todo} <button className="todobtn btn btn-danger"  >delete</button></h4>
        </div>)}
    </div>
   )
}
export default TodoLists;