import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { User } from '../../interfaces/Models';

import { IsLoading } from '../../shared';
import { GetUser } from '../services/UserServices';

export const UserShow = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [userDetail, setUserDetail] = useState<User|null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getUser();
  }, [id]);

  const getUser = async () : Promise<void> => {
    setLoading(true);
    try {
      const { data } = await GetUser(id);
      setUserDetail(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false)
    }
  }

  const navigateBack = () => {
    navigate(-1);
  }

  return (
    <div className="book-detail">
      {
        loading && <IsLoading />
      }
      <h1>{userDetail?.email}</h1>
      <div className="book-info">
          <span>Name: {userDetail?.name}</span>
          <span>Last Name: {userDetail?.last_name}</span>
          <span>Rol: {userDetail?.user_rol}</span>
      </div>
      <div className="actions">
        <button className="cancel-btn" onClick={ navigateBack }>
          Back
        </button>
      </div>
  </div>
  )
}
