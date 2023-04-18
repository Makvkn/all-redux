import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, addTodo} from "../stateManagers/redux-toolkit/toolkitSlice";
import {todo} from "../stateManagers/redux-toolkit/types";



const Toolkit = () => {
    const [note, setNote] = useState('')


    const dispatch = useDispatch()
    const count = useSelector((state: any) => state.toolkit.count)
    const todos:todo[] = useSelector((state: any) => state.toolkit.todos)

    const addTodos = () => {
        const newTodo = {
            title: note,
            id: todos.length
        }
        dispatch(addTodo(newTodo))
    }


    return (
        <div>
            <div>{count}</div>
            <button onClick={() => dispatch(increment())}>Inc</button>
            <button onClick={() => dispatch(decrement())}>Dec</button>
            <button>Zero</button>
            <div>
                <div>
                    {todos.map((item) =>
                    <div key={item.id}>
                        {item.title}
                    </div>
                    )}
                </div>
                <input type="text" value={note} onChange={(e) => setNote(e.target.value)}/>
                <button onClick={addTodos}>Add Todo</button>
            </div>
        </div>
    );
};

export default Toolkit;