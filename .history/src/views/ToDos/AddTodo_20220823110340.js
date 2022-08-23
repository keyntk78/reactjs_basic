import React from "react";
import {toast } from 'react-toastify';

class AddTodo extends React.Component {

    state = {
        title: ''
    }

    handleOnchangeTitle = (event) =>{
        this.setState({
            title:event.target.value
        })
    }

    handleAddTodo = () => {

        if(!this.state.title){
            //undifine - Null
            toast.error("Missing Title!");
            return;
        }

        let todo = {
            id:Math.floor(Math.random()*1001),
            title:this.state.title
        }

        this.props.addNewTodo(todo)
        this.setState({
            title:''
        })
    }

    handleDeleteTodo = (todo) => {

    }

    render() {
        let {title} = this.state;
        return(
            <div className="add-todo">
                <input 
                type="type" 
                value={title} 
                onChange={(event) => this.handleOnchangeTitle(event)} 
            />
                <button className="add" type="button" onClick={()=>this.handleAddTodo()}>Add</button>
            </div>
        )
    }
}

export default AddTodo