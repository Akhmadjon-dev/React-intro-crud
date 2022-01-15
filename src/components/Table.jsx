import React, { Component } from 'react';

class Table extends Component {
    render() {
        const { data, deleteHandler, editHandler } = this.props;
        return (
            <div>
                <h4>Table</h4>
                <table>
                    <thead>
                       <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Options</th>
                       </tr>
                    </thead>
                    <tbody>
                       {
                           data.map((user) => (
                               <tr key={user.id}>
                                   <td>
                                       {user.name}
                                   </td>
                                   <td>
                                       {user.age}
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