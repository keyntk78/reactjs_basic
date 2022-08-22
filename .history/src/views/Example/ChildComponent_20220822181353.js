import React from "react";

class ChildComponent extends React.Component { 

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
        console.log(">> Check render: ", this.props)
        return (
            <>
                <div>ChildComponent: {this.props.name} - {this.props.age}</div>
            </>
        )
    }
}

export default ChildComponent;