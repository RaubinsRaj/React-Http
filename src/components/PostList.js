import React, { Component } from 'react'
import axios from 'axios'

export class PostList extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         posts: [],
         errormsg:''
      }
    }
    componentDidMount(){
        // axios.get('https://reqres.in/api/users?page=1')
        axios.get('https://reqres.in/api/users?page=1') //for error
        .then(response =>{
            // console.log(response)
            this.setState({
                posts:response.data.data
                
            })
            console.log(response.data.data)
        })
        .catch(error=>{
            console.log(error)
            this.setState({
                errormsg:"error retrieving data"
            })
        })
    }

  render() {
      const {posts,errormsg} = this.state
    return (<div>
      
      {
          posts.map(post => <div key={post.id}>{post.first_name}<img src={post.avatar}></img></div>)
      }
     {errormsg ? <div>{errormsg}</div> : null}
      </div>
    )
  }
}

export default PostList