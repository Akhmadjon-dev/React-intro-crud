import React, { Component } from 'react';

class Form extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            age: "",
            phone: "",
            email: "",
            id: ''
        }
    }

    refreshState = () => {
        this.setState({
            name: "",
            age: "",
            phone: "",
            email: "",
            id: ''
        })
    }

    changeHandler = (e) => {
        const {value, name} = e.target;
        this.setState({ [name]: value })
    }

    editHandler = (e) => {
        e.preventDefault();
        this.props.update(this.state)
        this.refreshState()
    }
    
    submit = (e) => {
        e.preventDefault();
        this.props.submitHandler({...this.state, id: Date.now()})
        this.refreshState()
    }

    fillState = () => {
        this.setState({...this.props.user})
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.isEdit !== this.props.isEdit){
            this.fillState()
        }
    }

    render() {
        const { name, age, phone, email } = this.state;
        const { isEdit } = this.props;

        console.log(this.state, 'state')

        return (
            <div>
                <form onSubmit={isEdit ? this.editHandler : this.submit}>
                    <input onChange={this.changeHandler} name="name" type="text" value={name} placeholder='Enter your name...' />
                    <input onChange={this.changeHandler} name="age" type="text" value={age} placeholder='Enter your age...' />
                    <input onChange={this.changeHandler} type="tel" name='phone' value={phone} placeholder='Enter your phone...' />
                    <input onChange={this.changeHandler} type="email" name='email' value={email} placeholder='Enter your email...' />

                    <button type="submit">
                        {isEdit ? 'Update' : 'Add'}
                    </button>
                </form>

            </div>
        );
    }
}

export default Form;