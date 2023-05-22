import { useState } from 'react'
import { Book } from "../../interfaces/Models";
import { GenreSelect } from "../componets";
import { BookCreate } from "../services/BookServices";
import { useNavigate } from "react-router-dom";


export const BookAdd = () => {
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();
  const [newBook, setNewBook] = useState<Book>({
    title: '',
    author: '',
    published_year: '',
    stock: 0,
    genre_id : '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await BookCreate(newBook);
      const isSuccess : boolean = response.response_code == 1;
      if (isSuccess) {
        navigate(-1);
      }
    } catch (error) {
      console.error(error);
    }

  }

  const handleChange = ({ target }) => {
    setNewBook({
      ...newBook,
      [target.name] : target.value
    })
  }
  
  const navigateBack = () => {
    navigate(-1);
  }

  return (
    <div className="book-form-screen">
      <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
        <input
          id="title"
          name="title"
          type="text"
          className="base-input"
          value={newBook.title}
          onChange={(e) => handleChange(e)}
          required
        />
        <label htmlFor="author">Author:</label>
        <input
          id="author"
          name="author"
          type="text"
          className="base-input"
          value={newBook.author}
          onChange={(e) => handleChange(e)}
          required
        />
        <label htmlFor="year">Year:</label>
        <input
          id="year"
          name="published_year"
          type="number"
          className="base-input"
          value={newBook.published_year}
          onChange={(e) => handleChange(e)}
          required
        />
        <label htmlFor="">Genre</label>
        <GenreSelect name="genre_id" hangleChange={handleChange}/>
        <label htmlFor="year">Stock:</label>
        <input
          id="stock"
          name="stock"
          type="number"
          className="base-input"
          value={newBook.stock}
          onChange={(e) => handleChange(e)}
          required
        />
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
