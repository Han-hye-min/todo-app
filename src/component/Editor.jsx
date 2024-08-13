import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import '../assets/editor.css'
import { TodoContext } from './TodoContext';

function Editor(props) {

    const {onCreate} = useContext(TodoContext);

    const [contents, setContents] = useState('');


    //엔터쳤을 때 입력 실행 하기 위함 
    const enterInput = useCallback((e) =>{
        console.log(e.keyCode)
        if(e.keyCode === 13) {
            createTodo();
        }
    },[contents]);

    const createTodo = () =>{
        //리스트에 추가 이벤트 필요 
        onCreate(contents);
    }

    return (
        <div className='editor'>
            <input
               placeholder='새로운 할일...'
               value={contents}
               onKeyDown={enterInput}
               onChange={(e) => setContents(e.target.value)}
            ></input>
            <button onClick={createTodo}>추가</button>
        </div>
    );
}

export default Editor;