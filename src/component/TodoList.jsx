import React, { useCallback, useContext, useEffect, useState } from 'react';
import { TodoContext } from './TodoContext';
import TodoItem from './TodoItem';
import '../assets/list.css'

function TodoLists(props) {
    const {todoList} = useContext(TodoContext);
    const [searchText, setSearchText] = useState('');
    const [list , setList] = useState(todoList);

    const onchangeSearch =(e) =>{
        setSearchText(e.target.value);
    }


    const enterSearch = (e) =>{
        if(e.keyCode === 13) {
            searchTodo();
        }       
    }



    const searchTodo = useCallback(() =>{
        const filterList =  todoList.filter((todo) => 
                            todo.contents.includes(searchText))
        setList(filterList);
       
    },[searchText]);


    useEffect(()=>{
        setList(todoList)
    },[todoList]);

    return (
        <div className='list'>
            <h4>Todo List</h4>
            <div className='search'>
                <input
                type='text'
                onKeyDown={enterSearch}
                placeholder='검색어를 입럭하십시오.'
                onChange={(e) =>onchangeSearch(e)}
                ></input>
                <button onClick={searchTodo}>검색</button>
            </div>
            <div className='todo-wrapper'>
                {
                    list.map((todo)=>(
                        <TodoItem
                         key={todo.id}
                         {...todo}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default TodoLists;