import React, {useState} from "react";

function Todo() {
    // for creating 
    const [todo, setTodo] = useState("");

    // for updating or removing 
    const [allTodos, setAllTodos] = useState([]);

    const submission = (e) => {
        e.preventDefault();
        if (todo.length === 0) {
            return;
        }
        const todoItem = {
            text: todo,
            complete: false
        };
        console.log(todo);
        // grabbing all todos with ...  then adding a new todo 
        setAllTodos([...allTodos, todoItem]);
        console.log(allTodos);
    };

    // for deleting 
    const deleteTodo = (index) => {
        const fillteredtodos = allTodos.filter((allTodos, i) => {
            return i !== index;
        });
        setAllTodos(fillteredtodos);
    };

    // for updating
    const checkedComplete = (index) => {
        const updatedTodo = allTodos.map((allTodos, i) => {
            if (index === i) {
                allTodos.complete = !allTodos.complete;
                // const updated = {...todo, complete: !todo.complete}
                // return updated
            }

            return allTodos;

        });
        setAllTodos(updatedTodo);
    };
    return (
        <div>
            <form on onSubmit={submission}>
                <input type="text" name="" id="" onChange={(e) => { setTodo(e.target.value); } } />
                {todo.length < 2 && todo.length > 0 ?
                    <p>must be longer than 1 characters</p> : null}
                <button style={{ marginLeft: "10px" }}>Add</button>
            </form>
            {allTodos.map((t, i) => {
                const todoClass = [];
                if (t.complete){
                    todoClass.push('line',"bold")
                }
                return (
                    <div key={i}>
                        <span className={todoClass.join(" ")} >{t.text}</span>
                        <input onChange={(e) => {
                            checkedComplete(i);
                        } } checked={t.complete} type="checkbox" />
                        <button onClick={() => { deleteTodo(i); } } style={{ marginLeft: "10px" }}>delete</button>
                    </div>
                );
            })}
        </div>
    );

}

export default Todo;