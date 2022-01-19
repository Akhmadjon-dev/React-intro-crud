import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
        };
    }
    

    componentDidMount() {
        fetch('https://fakestoreapi.com/users')
        .then(res => res.json())
        .then(json => {
            console.log(json)
            this.setState({
                users: json,
            });
        })
        .catch(err => console.log(err));

    }

    render() {
        const { data, deleteHandler, editHandler } = this.props;
        return (
            <div>
                <h4>Table</h4>
                <table>
                    <thead>
                       <tr>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Options</th>
                       </tr>
                    </thead>
                    <tbody>
                       {
                           this.state.users.map((user) => (
                               <tr key={user.id}>
                                   <td>
                                        <Link to={`/users/${user.id}`}>
                                            {user.name.firstname} {user.name.lastname}
                                        </Link>
                                   </td>
                                   <td>
                                       {user.address.city}
                                   </td>
                                   <td>
                                       {user.phone}
                                   </td>
                                   <td>
                                       {user.email}
                                   </td>
                                   <td>
                                       <button onClick={() => deleteHandler(user.id)} >Del</button>
                                       <button onClick={() => editHandler(user.id)} >Update</button>
                                   </td>
                               </tr>
                           ))
                       }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table;