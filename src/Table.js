import {useEffect, useState} from 'react';


export default function Table({ handleClick }) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/')
        .then((res) => res.json())
        .then((data) => {
            setUsers(data)
        });
    }, [setUsers])

    return (
      <div>
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
                 <tr key={user.id} onClick={() => handleClick(user)}>
                 <th scope="row">{user.name}</th>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
               </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  