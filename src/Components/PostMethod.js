import React, {Component} from 'react'
import axios from 'axios'


class List extends Component{

//Step 1
    constructor(props){
        super(props)
        this.state = {
            userId: '',
            title: '',
            body: ''
        }
    }

//Step 2
    changeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

//Step 3
    submitHandler = (event) => {
        event.preventDefault()
        console.log(this.state)
        axios.post("https://jsonplaceholder.typicode.com/posts", this.state) 
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }

    render(){
        const {userId, title, body} = this.state
        return(
            <div style={{textAlign: "center"}}>
                 <h1>POST REQUEST:</h1><br/>
                <form onSubmit = {this.submitHandler}>
                    <div>
                    <input type='text' name='userId' placeholder="Enter username" value={userId } 
                    onChange = {this.changeHandler} />
                    </div><br/>
                    <div>
                    <input type='text' name='title' placeholder="Enter useremail" value={title} 
                    onChange = {this.changeHandler} />
                    </div><br/>
                    <div>
                    <input type='text' name='body' placeholder="Enter usercellnumber" value={body} 
                    onChange = {this.changeHandler} />
                    </div><br/>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default List;