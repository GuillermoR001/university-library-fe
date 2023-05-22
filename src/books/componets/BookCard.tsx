import { NavLink } from 'react-router-dom'
import { Book } from "../../interfaces/Models"


type Props = {
    book : Book
}

export const BookCard = ({ book } : Props ) => {
  return (
    <div className="book-card">
        <img 
            src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books_23-2149342941.jpg?w=360" 
            alt="book"
        />
        <div className="book-card-info">
            <span>Title: {book.title}</span>
            <span>Author: {book.author}</span>
            <span>Year: {book.published_year}</span>
            <span>Genere: {book.genre.name}</span>
        </div>
        <NavLink to={`/book/show/${book.id}`}>Show</NavLink>
    </div>
  )
}
