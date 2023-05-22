import { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Checkout } from "../../interfaces/Models";
import { CheckoutGet, CheckoutAsReturned } from '../services/ChecoutsServices'
import { AuthContext } from "../../auth";
import { UserRoles } from "../../types/UserRoles";
import { Student } from "../components/Student";
import { IsLoading } from "../../shared";

export const CheckoutShow = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const [checkout, setCheckout] = useState<Checkout|null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      getCheckout();
    }, [id]);
  
    const getCheckout = async () : Promise<void> => {
      setLoading(true);
      try {
        const { data } = await CheckoutGet(id);
        setCheckout(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false)
      }
    }

    const markAsReturned = async () : Promise<void> => {
      setLoading(true);
      try {
        const response = await CheckoutAsReturned(id);
        const isSuccess: boolean = response.response_code ==1 ;
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
    <div>
      {
        loading && <IsLoading />
      }
      <div>
        <h1>Request Date: {checkout?.checkout_date}</h1>
        {
          checkout?.return_date != null && 
          <h2>Return Date : {checkout?.return_date}</h2>
        }
      </div>
      {
        user.user_rol == UserRoles.LIBRARIAN &&
        <div>
            <h2>Student: {`${checkout?.user.name} ${checkout?.user.last_name}`}</h2>
        </div>
      }
      <div className="book-info">
          <span>Title: {checkout?.book.title}</span>
          <span>Author: {checkout?.book.author}</span>
          <span>Year: {checkout?.book.published_year}</span>
          <span>Genere: {checkout?.book_genre.name}</span>
      </div>
      {
          user.user_rol == UserRoles.LIBRARIAN && <Student user={ checkout?.user }/>
      }
      <div className="actions">
        <button className="cancel-btn" onClick={ navigateBack }>
          Back
        </button>
        {
          checkout?.return_date == null &&
            <button className="primary-btn" onClick={ markAsReturned }>
              Mark as returned
            </button>
        }

      </div>
    </div>
  )
}
