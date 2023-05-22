import { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Book } from '../../interfaces/Models';

import { AuthContext } from '../../auth';
import { UserRoles } from '../../types/UserRoles';
import { IsLoading } from '../../shared';
import { BookGet } from '../services/BookServices';
import { CheckouAdd } from '../../checkouts/services/ChecoutsServices';

export const BookShow = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext)
  const [book, setBook] = useState<Book|null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getCheckout();
  }, [id]);

  const getCheckout = async () : Promise<void> => {
    setLoading(true);
    try {
      const { data } = await BookGet(id);
      setBook(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false)
    }
  }

  const requestBook = async () : Promise<void> => {
    setLoading(true);
    try {
      const response = await CheckouAdd(id);
      const isSuccess: boolean = response.response_code == 1 ;
      if ( isSuccess ) {
        navigate(-1);
      }
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
      <h1>{book?.title}</h1>
      <div className="book-info">
          <span>Author: {book?.author}</span>
          <span>Year: {book?.published_year}</span>
          <span>Genere: {book?.genre?.name}</span>
          <span>Stock: {book?.stock}</span>
      </div>
      <div className="actions">
        <button className="cancel-btn" onClick={ navigateBack }>
          Back
        </button>
        {
          (user.user_rol == UserRoles.STUDENT && book?.stock != 0 ) &&
          <button className="primary-btn" onClick={ requestBook }>
            Request
          </button>
        }
      </div>
  </div>
  )
}
