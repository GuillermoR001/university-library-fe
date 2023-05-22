import { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/context/AuthContext';
import { UserRoles } from "../types/UserRoles";

export const NavBar = () => {
    const  { user, logout }  = useContext( AuthContext );
    const navigate = useNavigate();

    const onLogout = () => {
        logout();
        navigate('/login', {
            replace: true
        });
    }

  return (
    <nav className="nav">
        <input type="checkbox" id="nav-check" />
        <div className="nav-header">
            <div className="nav-title">
                { user?.name }
            </div>
        </div>
        <div className="nav-btn">
            <label htmlFor="nav-check">
            <span></span>
            <span></span>
            <span></span>
            </label>
        </div>
  
        <div className="nav-links">
            {
                user.user_rol == UserRoles.LIBRARIAN &&
                <>
                    <NavLink to="home">Home</NavLink>
                    <NavLink to="book/list">Books</NavLink>
                    {/* <NavLink to="genre/list">Genres</NavLink> */}
                    <NavLink to="user/list">Users</NavLink>
                </>
            }
            {
                user.user_rol == UserRoles.STUDENT &&
                <>
                    <NavLink to="home">Home</NavLink>
                    <NavLink to="checkouts/my-checkouts">My Checkouts</NavLink>
                </>
            }
            <button
                className="log-out-btn"
                onClick={ onLogout }
            >
                Logout <span className="fa fa-window-close"></span>
            </button>
        </div>
    </nav>
  )
}
