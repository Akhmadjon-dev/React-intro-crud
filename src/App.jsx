import React, { Component, Fragment } from 'react'
import { Routes, Route } from "react-router-dom";
import Counter from './components/Counter';
import Header from './components/Header';
import Form from './components/Form'
import Table from './components/Table';
import users from './db/users';
import Home from './components/Home';
import About from './components/About';
import User from './components/User';


class App extends Component {

  constructor(props) {
    super(props); 
    this.state = {
      value: 0,
      isLoading: false,
      users: [],
      isFormEditable: false,
      selectedUser : {},
    };
  }
  

  componentDidMount() {
    fetch('https://fakestoreapi.com/users')
            .then(res=>res.json())
            .then(json=>console.log(json))

  }

  incrementHandler = () => {
    this.setState({value: this.state.value + 1})
  }

  decrementHandler = () => {
      this.setState({value: this.state.value - 1})
  }

  userAddHandler = (user) => {
    this.setState({ users: [...this.state.users, user] })
  }

  userDeleteHandler = id => {
    const users = this.state.users.filter(user => user.id !== id);
    this.setState({users})
  }

  editHandler = id => {
    const user = this.state.users.find(item => item.id === id);
    this.setState({isFormEditable: true, selectedUser: user});
  }

  updateUser = (user) => {
    const updated = this.state.users.map(item => item.id === user.id ? user : item);
    this.setState({users: updated, isEdit: false})
  }

  render() {
     
    const {  isLoading, value, users, isFormEditable, selectedUser } = this.state;

  
    if(isLoading) return <h1>Loading...</h1>
    
    // console.log(this.state)
    
    return (
     <Fragment>
       <div className='app'>

         <Header data={value} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/form" element={<Form update={this.updateUser} user={selectedUser} isEdit={isFormEditable} submitHandler={this.userAddHandler}/>} />
            <Route path="/users" element={<Table editHandler={this.editHandler} deleteHandler={this.userDeleteHandler} data={users} />} />
            <Route path="/users/:id" element={<User/>} />
            <Route path="/about/*" element={<About />}/>
          </Routes>

        </div>
     </Fragment>
    )
  }
}


export default App