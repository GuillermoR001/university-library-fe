import { useState, useEffect } from 'react';
import { CheckoutsStudentList } from '../services/ChecoutsServices';
import { Checkout } from '../../interfaces/Models';
import { CheckoutReturnDate } from '../components/CheckoutReturnDate';
import { NavLink } from 'react-router-dom';


export const StudentCheckoutsPage = () => {

    const [checkouts, setCheckouts] = useState<Checkout[]>([]);
    useEffect(() => {
      fetchCheckouts();
    }, []);
  
    const fetchCheckouts = async () => {
      try {
        const response = await CheckoutsStudentList();
        setCheckouts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    return (
        <div className="container">
            <h1>My Checouts</h1>
            <table className="my-table-u">
                <thead>
                    <tr>
                        <th>Action</th>
                        <th>Checkouts Date</th>
                        <th>Book</th>
                        <th>Author</th>
                        <th>Year</th>
                        <th>Genre</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        checkouts.map((checkout, i) => {
                            return (
                                <tr key={i}>
                                    <td>
                                        <NavLink to={`/checkouts/show/${checkout.id}`}>Show</NavLink>
                                    </td>
                                    <td>{checkout.checkout_date}</td>
                                    <td>{checkout.book.title}</td>
                                    <td>{checkout.book.author}</td>
                                    <td>{checkout.book.published_year}</td>
                                    <td>{checkout.book.genre.name}</td>
                                    <td><CheckoutReturnDate checkoutDate={checkout.return_date}/></td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}