import React, { Component } from 'react'
import axios from 'axios'

export class PostForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         id: '',
         first_name :'',
         last_name: '',
         errormsg: ''
      }
    }
    changeHandler= (e) =>{
        this.setState({
            [e.target.first_name] : e.target.last_name
        })


    }
    submitHandler = (e) => {
        e.preventDefault();
        console.log(this.state)
        axios.post('https://reqres.in/api/users?page=1', this.state)
        .then((response) =>{
            console.log(response)
        })
        .catch((error) => {
            console.log(error)
            this.setState({
                errormsg: "Error "
            })
        })
    }


  render() {
      const {id, first_name,last_name , errormsg} = this.state
    return (
      <div>
          <form onSubmit={this.submitHandler}>
              <div>
                  <label> id</label>
          <input type='text' name='id' value={this.id}  onChange={this.changeHandler}/>
          </div>
          <div>
              <label>FirstName</label>
          <input type='text' name='first_name' value={this.first_name} onChange={this.changeHandler} />
          </div>
          <div>
              <label>LastName</label>
          <input type='text' name= 'last_name' value={this.last_name} onChange={this.changeHandler} />
          </div>
          <div>
          <button type='submit'>ClickMe</button>
          </div>
          </form>
          {errormsg}
      </div>
    )
  }
}

export default PostForm