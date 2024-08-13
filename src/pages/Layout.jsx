import React, { useState, useRef } from 'react';
import Editor from '../component/Editor';
import '../assets/layout.css';
import Header from '../component/Header';
import { TodoContext } from '../component/TodoContext';
import TodoList from '../component/TodoList';

function Layout(props) {
    // 초기 할 일 목록 설정
    const initialWorkList = [
        {
            id: 1,
            isDone: false,
            contents: '빨래하기',
            date: new Date().getTime()
        },
        {
            id: 2,
            isDone: false,
            contents: '노래 연습하기',
            date: new Date().getTime()
        }
    ];

    const [todoList, setTodoList] = useState(initialWorkList);
    const idRef = useRef(3);

    // 할 일 생성 함수
    const onCreate = (contents) => {
        const newTodo = {
            id: idRef.current++,
            isDone: false,
            contents: contents,
            date: new Date().getTime()
        };
        setTodoList([...todoList, newTodo]);
    };

    // 할 일 완료 상태 업데이트 함수
    const onUpdate = (id) => {
        const updatedList = todoList.map((todo) =>
            todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
        );
        setTodoList(updatedList);
    };

    // 할 일 삭제 함수
    const onDelete = (targetId) => {
        setTodoList(todoList.filter((todo) => todo.id !== targetId));
    };

    return (
        <div className='main'>
            <Header />
            <TodoContext.Provider value={{ todoList, onCreate, onUpdate, onDelete }}>
                <Editor />
                <TodoList />
            </TodoContext.Provider>
        </div>
    );
}

export default Layout;
