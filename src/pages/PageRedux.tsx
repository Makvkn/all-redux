import React, {KeyboardEvent, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    actionDecrease,
    actionIncrease,
    actionZero, AsyncActionDecreaseCreator,
    AsyncActionIncreaseCreator
} from "../stateManagers/redux/counterReducer";
import "./style.css"
import {todo} from "../stateManagers/redux/types";
import {actionAdd, actionRemove, asyncFetchTodos} from "../stateManagers/redux/todoReducer";


const PageRedux = () => {
    const dispatch = useDispatch()
    const [note, setNote] = useState('')
    const todos: todo[] = useSelector((state: any) => state.todoReducer.todos)
    const count = useSelector((state: any) => state.counterReducer.count)

//оставим пока
//     const handlerInput = (e: ChangeEvent<HTMLInputElement>) : void => {
//         setNote(e.target.value)
//     }

    const submitForm = (e: KeyboardEvent<HTMLInputElement>) : void => {
        if (e.key === 'Enter') {
            const newTodo:todo = {
                id: todos.length,
                title: note
            }
            setNote('')
            dispatch(actionAdd(newTodo))
        }
    }

    const removeTodo = (id: number) => {
        dispatch(actionRemove(id))
    }
    const addManyTodos = () => {
        dispatch(asyncFetchTodos())
    }

    return (
        <div>
            <div className="todos">
                <div className="form__group field">
                    <input type="input"
                           className="form__field"
                           placeholder="Todo"
                           value={note}
                           name="name"
                           id='name'
                           required
                           onChange={(e) => setNote(e.target.value)}
                           onKeyUp={submitForm}
                    />
                    <button className="liButton" onClick={() => addManyTodos()}>Add Todos</button>
                    <label htmlFor="name" className="form__label">Let's write</label>
                </div>
                <ul>
                {todos.map((item) =>
                    <li key={item.id}>{item.title}
                    <button className="liButton" onClick={() => removeTodo(item.id)}>Delete</button>
                    </li>
                )}
                </ul>
            </div>

            <div className="counter">
                <h3>Count</h3>
                <h3>
                    {count}
                </h3>
                <div className="buttons">
                    <button className="countButton" onClick={() => {dispatch(actionIncrease())}}>Increase</button>
                    <button className="countButton" onClick={() => {dispatch(AsyncActionIncreaseCreator())}}>Increase Async</button>
                    <button className="countButton" onClick={() => {dispatch(AsyncActionDecreaseCreator())}}>Increase Async</button>
                    <button className="countButton" onClick={() => {dispatch(actionDecrease())}}>Decrease</button>
                    <button className="countButton" onClick={() => {dispatch(actionZero())}}>Zero</button>
                </div>
            </div>
        </div>
    );
};

export default PageRedux;