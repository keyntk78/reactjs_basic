import React from "react";
import ChildComponent from "./ChildComponent";

class MyComponent extends React.Component { 

    state = {
        firstName:'',
        lastName: ''
    }

    handleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    handleSubmit =(event) =>{
        event.preventDefault(event)
        console.log(">> Check Data: ", this.state)
    }

    render() {
        return (
            <>
                <form>
                    <label htmlFor="fname">First name:</label><br/>
                    <input 
                        type="text"
                        value={this.state.firstName}
                        onChange = {(event) => this.handleChangeFirstName(event)}
                    /><br/>
                    <label htmlFor="lname">Last name:</label><br></br>
                    <input 
                        type="text" 
                        value={this.state.lastName}
                        onChange={(event) => this.handleChangeLastName(event)}
                    /><br/><br/>
                    <input type="submit" value="Submit"
                        onClick={(event)=> this.handleSubmit(event)}
                    />
                </form>

                <ChildComponent name={'child One'}/>    
                <ChildComponent name={'child Two'}/>
                <ChildComponent name={'child Three'}/>

            </>
        )
    }
}

export default MyComponent;