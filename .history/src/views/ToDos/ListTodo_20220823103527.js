import React from "react";
import './ListTodo.scss'

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

                    <div className="list-todo-content">
                        {
                            listTodos && listTodos.length > 0 &&
                            listTodos.map((item, index) => {
                                return(
                                    <div className="todo-child" key={item.id}>
                                        <span>{index + 1} - {item.title}</span>
                                        <button className="edit">Edit</button>
                                        <button className="delete">Delete</button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </>
        )
    }
}

export default ListTodo;