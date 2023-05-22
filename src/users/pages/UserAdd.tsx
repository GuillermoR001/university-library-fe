import { useState } from 'react'
import { User } from '../../interfaces/Models';
import { useNavigate } from 'react-router-dom';
import { UserCreate } from '../services/UserServices';
import { UserRoles } from '../../types/UserRoles';


export const UserAdd = () => {
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState<User>({
    name: '',
    last_name: '',
    email: '',
    user_rol : UserRoles.STUDENT,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await UserCreate(newUser);
      const isSuccess : boolean = response.response_code == 1;
      if (isSuccess) {
        navigate(-1);
      }
    } catch (error) {
      console.error(error);
    }

  }

  const handleChange = ({ target }) => {
    setNewUser({
      ...newUser,
      [target.name] : target.value
    })
  }

  const navigateBack = () => {
    navigate(-1);
  }

  return (
    <div className="book-form-screen">
      <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
        <input
          id="name"
          name="name"
          type="text"
          className="base-input"
          value={newUser.name}
          onChange={(e) => handleChange(e)}
          required
        />
        <label htmlFor="last_name">Last Name:</label>
        <input
          id="last_name"
          name="last_name"
          type="text"
          className="base-input"
          value={newUser.last_name}
          onChange={(e) => handleChange(e)}
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
          type="email"
          className="base-input"
          value={newUser.email}
          onChange={(e) => handleChange(e)}
          required
        />
        <label htmlFor="user_rol">Genre</label>
        <select name="user_rol" id="user_rol" onChange={handleChange}>
          <option value={UserRoles.STUDENT}>Student</option>
          <option value={UserRoles.LIBRARIAN}>Librarian</option>
        </select>

        {
          error && <span className="login-error">{error}</span>
        }
        <div className="actions">
          <button className="cancel-btn" onClick={ navigateBack }>
            Back
          </button>
          <button 
            className="primary-btn"
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  )
}
