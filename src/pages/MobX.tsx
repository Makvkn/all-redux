import React from 'react';
import {counter} from "../stateManagers/mobx/counter";
import {observer} from "mobx-react-lite";
import {todos} from "../stateManagers/mobx/todo";

const MobX =  observer (() => {
    return (
        <div>
            <button onClick={() => todos.fetchTodos()}>Fetch</button>
            <div>{counter.count}</div>
            <button onClick={() => counter.increment()}>Inc</button>
            <button onClick={() => counter.decrement()}>Dec</button>
            <button>Zero</button>

            <div>
                {todos.todos.map(t =>
                <div key={t.id}>
                    <input type="checkbox" checked={t.completed} onChange={() => {todos.completeTodo(t.id)}}/>
                    {t.title}
                    <button onClick={() => {todos.removeTodo(t.id)}}>X</button>
                </div>)}
            </div>
        </div>


    );
});

export default MobX;