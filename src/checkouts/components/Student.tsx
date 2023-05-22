import { User } from "../../interfaces/Models"

type Props = {
    user: User|undefined;
  };


export const Student = ({ user } : Props ) => {
  return (
    <div className="student-info">
        <div className="base-info">
            <h2>Name: {user?.name}</h2>
            <h2>Last Name: {user?.last_name}</h2>
        </div>
        <div className="contact-info">
            <span>Email: {user?.email}</span>
        </div>
    </div>
  )
}
