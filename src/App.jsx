import React, { Component, Fragment } from 'react'
import Counter from './components/Counter';
import Header from './components/Header';
import Form from './components/Form'
import Table from './components/Table';
import users from './db/users';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      isLoading: false,
      users: []
    };
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

  render() {
     
    const {  isLoading, value, users } = this.state;

  
    if(isLoading) return <h1>Loading...</h1>
    
    console.log(this.state)
    
    return (
     <Fragment>
       <div className='app'>

         <Header data={value} />
          
         {/* <Counter increment={this.incrementHandler} decrement={this.decrementHandler} sanjar={value} />           */}

          <Form submitHandler={this.userAddHandler}/>
          <Table deleteHandler={this.userDeleteHandler} data={users} />

        </div>
     </Fragment>
    )
  }
}


export default App