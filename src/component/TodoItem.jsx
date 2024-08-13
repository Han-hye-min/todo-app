import React, { useContext } from 'react';
import '../assets/list-item.css'
import { TodoContext } from './TodoContext';
function TodoItem({id, contents, isDone, date}) {

    const {onUpdate, onDelete} = useContext(TodoContext);

    const workStatusChange =() =>{
        //일감 상태 변경
        onUpdate(id);
    }

    const deleteWork =() => {
        //일감 삭제
        onDelete(id);
    }

    return (
        <div className='todo-item'>
            <input
              type='checkbox'
              checked ={isDone}
              onChange={workStatusChange}
            ></input>
            <div className='content'>
                <span
                    style={
                        { 
                            textDecoration: isDone ? 'line-through' : 'none',
                            color : isDone ? 'gray' : 'black'
                            
                        }
                }>
                        {contents}
                    </span>   
            </div>
            <div className='date'>
                {new Date(date).toLocaleDateString()}
            </div>
            <button onClick={deleteWork}>삭제</button>            
        </div>
    );
}

export default TodoItem;