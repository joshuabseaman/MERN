import React, {useState} from "react";

const Todo = (props) => {
    const [newTodo, setNewTodo] = useState("");
    const [todos, setTodos] = useState([]);

    const handleNewTodoSubmit = (event) => {
        event.preventDefault();
        if (newTodo.length < 1) {
            return;
        };
        const todoItem = {
            text: newTodo,
            complete: false
        };
        setTodos([...todos, todoItem]);
        setNewTodo("");
    };

    const handleTodoDelete = (delIdx) => {
        const filteredTodos = todos.filter((_todo, i) => {
            return i !== delIdx;
        });
        setTodos(filteredTodos);
    };

    const handleToggleComplete = (idx) => {
        const updatedTodos = todos.map((todo, i) => {
            if (idx === i) {
                todo.complete = !todo.complete;
            }
            return todo;
        });
        setTodos(updatedTodos);
    };
    return (
        <div>
            <form onSubmit={(event) => handleNewTodoSubmit(event)}>
                <input type="text" value={newTodo} onChange={(event) => {setNewTodo(event.target.value);}} />
                <button>Add</button>
            </form>

            <hr />

            {todos.map((todo, i) => {
                const todoClasses = ["bold", "italic"];
                if (todo.complete) {
                    todoClasses.push("line-through");
                }
                return (
                    <div key={i}>
                        <input onChange={(event) => {
                            handleToggleComplete(i);
                        }} checked={todo.complete} type="checkbox" />
                        <span className={todoClasses.join(" ")}>{todo.text}</span>
                        <button style={{marginLeft: "10px"}} onClick={(event) => {handleTodoDelete(i);}}>Delete</button>
                    </div>
                );
            })}
        </div>
    );

}

export default Todo;