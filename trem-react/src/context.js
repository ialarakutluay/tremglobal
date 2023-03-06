import React, { Component } from 'react'
import axios from "axios";
const UserContext = React.createContext();
// Provider , Consumer
const reducer = (state,action) => {
  switch(action.type) {
    case "ADD_USER":
       return {
         ...state,
         users : [...state.users,action.payload]
       }
    default:
      return state

  }
}

export class UserProvider extends Component {
    state = {
        users: [],
        dispatch : action => {
          this.setState(state => reducer(state,action))
        }
      }
  componentDidMount = async () => {
    const response = await axios.get("http://localhost/workspace/trem-back/?action=users")
    this.setState({
      users: response.data
    })
  }
      
  render() {
    return (
      <UserContext.Provider value = {this.state}>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}
const UserConsumer = UserContext.Consumer;

export default UserConsumer;
