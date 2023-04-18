import {makeAutoObservable} from "mobx";
class Todo {
    todos = [
        {id: 0, title: 'Learn', completed: false},
        {id: 1, title: 'Work', completed: false},
        {id: 2, title: 'Enjoy', completed: false},
    ]
    constructor() {
        makeAutoObservable(this)
    }


    removeTodo(id: number) {
        this.todos = this.todos.filter(todo => todo.id !== id)
    }

    completeTodo(id: number) {
        this.todos = this.todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo)
    }

    fetchTodos() {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => {
                this.todos = [...this.todos, ...json]
                console.log(this.todos)
            })
    }
}

export const todos =  new Todo();