import React, {Component} from 'react'
import axios from 'axios';


class Getmethod extends Component{

//First step:

    constructor(props){
        super(props)
        this.state = {
            posts: [],
            error: ''
        }
    }

//Second Step:

componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
        console.log(response)
        this.setState({posts: response.data})
    })
    .catch(error => {
        console.log(error)
        this.setState({errorMsg: 'Error retreving data'})
    })
}

    render(){
        const {posts, errorMsg} = this.state
        return(
        <div style={{textAlign: "center"}}>
            <h1>GET REQUEST:</h1><br/>
        <h4>List of posts</h4>
        {
            posts.length ?
            posts.map(post => <div key={post.id}>{post.title}</div>) :
            null
        }
        {
            errorMsg ?
            <div>{errorMsg}</div> :
            null
        }
        </div>
        )
    }
}

export default Getmethod;