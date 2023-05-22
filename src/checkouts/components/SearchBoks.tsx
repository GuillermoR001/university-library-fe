import { useState } from 'react';
import { Book } from '../../interfaces/Models';
import { GenreSelect } from '../../books/componets';
import { FilterBooks } from '../../books/services/BookServices';
import { BookCard } from '../../books/componets/BookCard';


export const SearchBoks = () => {

    const [search, setSearch] = useState<string>('');
    const [genreId, setGenreId] = useState<string>('');
    const [books, setBooks] = useState<Book[]>([]);


    const handleChange = (event) => {
      setGenreId(event.target.value);
    }

    const searchBooks = async () => {

      try {
        const { data } = await FilterBooks(search, genreId);
        setBooks( data );
      } catch (error) {
        console.error(error);
      }
    }

    return (
        <div className="container">
            <div className="search-bar">
              <input type="text" placeholder="Search book" onChange={(e) => setSearch(e.target.value)} />
              <GenreSelect hangleChange={handleChange}/>
              <button type="button" className="white-btn" onClick={searchBooks}>
                Search
              </button>
            </div>
            <div className="book-results">
              {
                books.length > 0 
                ? books.map((book, i) => <BookCard key={i} book={ book }/>)
                : <h2>No results for the search with {search}</h2>
              }
            </div>
        </div>
    );
}