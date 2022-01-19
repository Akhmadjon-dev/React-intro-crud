import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function User() {
  const [user, setUser] = useState({
    name: {
        firstname: "",
        lastname: "",
    },
    address: {
        city: "",
    },
    email: "",
    phone: "",
  });

  const { id } = useParams();

  useEffect(() => {

    fetch(`https://fakestoreapi.com/users/${id}`)
      .then(res => res.json())
      .then(json => {
          console.log(json)
          setUser(json)
      })
      .catch(err => console.log(err));

  }, []);

//   setUser({...user, name: {...user.name, firstname: "John", lastname: "Doe"}})
  
  return (
    <div>
      <h3>User</h3>
        <p>{user.name.firstname} {user.name.lastname}</p>
        <p>{user.address.city}</p>
        <p>{user.phone}</p>
        <p>{user.email}</p>

    </div>
  );
}

export default User;
