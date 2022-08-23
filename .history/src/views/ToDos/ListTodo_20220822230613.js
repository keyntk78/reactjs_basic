import React from "react";

class ListTodo extends React.Component{

    state = {
        listTodos:[
            {id:'1', title:'Doing Homework'},
            {id:'2', title:'Study Reacte'},
            {id:'3', title:'Play Game'},
        ]
    }

    render() {

        let {listTodos} = this.state;

        return (
            <>
                <div className="list-todo-container">
                    <div className="add-todo">
                        <input type="type" />
                        <button type="button" >Add</button>
                    </div>
                    <div className="list-todo-content">
                        <div className="todo-child">
                            <span>Todo 1</span>
                            <button>Edit</button>
                            <button>Delete</button>
                        </div>
                        <div className="todo-child">
                            <span>Todo 1</span>
                            <button>Edit</button>
                            <button>Delete</button>
                        </div>
                        <div className="todo-child">
                            <span>Todo 1</span>
                            <button>Edit</button>
                            <button>Delete</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default ListTodo;