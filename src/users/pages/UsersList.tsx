import { useState, useEffect } from 'react';
import { User } from '../../interfaces/Models';
import { NavLink } from 'react-router-dom';
import { GetUsers } from '../services/UserServices';
import { IsLoading } from '../../shared';


export const UsersList = () => {

    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      fetchBooks();
    }, []);
  
    const fetchBooks = async () => {
        setLoading(true);
        try {
            const { data } = await GetUsers();
            setUsers( data );
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container">
            {
                loading && <IsLoading />
            }
            <h1>Users</h1>
            <NavLink to={'/user/add'}>Add User</NavLink>
            <hr />
            <table className="my-table-u">
                <thead>
                    <tr>
                        <th>Action</th>
                        <th>Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Rol</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, i) => {
                            return (
                                <tr key={i}>
                                    <td>
                                      <NavLink to={`/user/show/${user.id}`}>Show</NavLink>
                                    </td>
                                    <td>{user.name}</td>
                                    <td>{user.last_name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.user_rol}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}