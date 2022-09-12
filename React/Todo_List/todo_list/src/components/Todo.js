import React, {useState} from "react";

function Todo() {
    const [todo, setTodo] = useState("");
    const [allTodos, setAllTodos] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const todoItem = {
            text: todo,
            complete: false
        };
        console.log(todo);
        setAllTodos([...allTodos, todoItem]);
        console.log(allTodos);
    };

    const deleteTodo = (index) => {
        const filteredTodos = allTodos.filter((allTodos, i) => {
            return i !== index;
        });
        setAllTodos(filteredTodos);
    };

    const checkedComplete = (index) => {
        const updatedTodo = allTodos.map((allTodos, i) => {
            if (index === i) {
                allTodos.complete = !allTodos.complete;
            }

            return allTodos;

        });
        setAllTodos(updatedTodo);
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="" id="" onChange={(e) => { setTodo(e.target.value); } } />
                {todo.length < 2 && todo.length > 0 ?
                    <p>Must be more than 1 character</p> : null}
                <button>Add</button>
            </form>
            {allTodos.map((all, i) => {
                const todoClass = [];
                if (all.complete){
                    todoClass.push('line',"bold")
                }
                return (
                    <div key={i}>
                        <span className={todoClass.join(" ")} >{all.text}</span>
                        <input onChange={(e) => {
                            checkedComplete(i);
                        } } checked={all.complete} type="checkbox" />
                        <button onClick={() => { deleteTodo(i); } }>delete</button>
                    </div>
                );
            })}
        </div>
    );

}

export default Todo;