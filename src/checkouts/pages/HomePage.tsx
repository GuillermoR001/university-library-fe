import { useContext } from 'react'
import { AuthContext } from '../../auth';
import { UserRoles } from '../../types/UserRoles';
import { Checkouts } from '../components';
import { SearchBoks } from '../components';


export const HomePage = () => {
    const  { user } = useContext( AuthContext );

    return (
        <div>
            {
                user.user_rol == UserRoles.LIBRARIAN 
                    ? <Checkouts/>
                    : <SearchBoks/>
            }
        </div>
    );
}

