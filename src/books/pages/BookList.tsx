import { useState, useEffect } from 'react';
import { Book } from '../../interfaces/Models';
import { NavLink } from 'react-router-dom';
import { GetBooks } from '../services/BookServices';
import { IsLoading } from "../../shared";


export const BookList = () => {

    const [books, setBooks] = useState<Book[]>([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
      fetchBooks();
    }, []);
  
    const fetchBooks = async () => {
        setLoading(true);
        try {
            const { data } = await GetBooks();
            setBooks( data );
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
            <h1>Books</h1>
            <NavLink to={'/book/add'}>Add Book</NavLink>
            <hr />
            <table className="my-table-u">
                <thead>
                    <tr>
                        <th>Action</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Year</th>
                        <th>Genre</th>
                        <th>Stock</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books.map((book, i) => {
                            return (
                                <tr key={i}>
                                    <td>
                                      <NavLink to={`/book/show/${book.id}`}>Show</NavLink>
                                    </td>
                                    <td>{book.title}</td>
                                    <td>{book.author}</td>
                                    <td>{book.published_year}</td>
                                    <td>{book.genre.name}</td>
                                    <td>{book.stock}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}