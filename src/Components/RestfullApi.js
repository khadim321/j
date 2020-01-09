import React, { Component } from "react";


class Resfullapi extends Component{

    state = {
        contacts:[]
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(response => {
            console.log(response);
            this.setState({contacts: response})
        })
    }


    render(){
       
        return(
            <div style={{textAlign:"center"}}>
                <h1>Test Resfull Api</h1>
            {this.state.contacts.map(contact => (
                <div class="card">
                <div class="card-body">
                    <h5 class="card-title">{contact.name}</h5>
                    <h5>{contact.email}</h5>
                    <p>{contact.phone}</p>
                    <p>{contact.website}</p>
                </div>
            </div>
            ))}
            </div>
        )
    }
}

export default Resfullapi;