import { useState } from 'react';
import axios from 'axios';

const LibrarianPanel = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [newBookTitle, setNewBookTitle] = useState('');
  const [newBookAuthor, setNewBookAuthor] = useState('');
  const [newBookGenre, setNewBookGenre] = useState('');
  const [newBookPublishedYear, setNewBookPublishedYear] = useState('');

  const handleAddUser = async () => {
    try {
      await axios.post('/api/users', {
        first_name: firstName,
        last_name: lastName,
        email,
        role,
      });
      // Clear form inputs after successful submission
      setFirstName('');
      setLastName('');
      setEmail('');
      setRole('');
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddBook = async () => {
    try {
      await axios.post('/api/books', {
        title: newBookTitle,
        author: newBookAuthor,
        genre: newBookGenre,
        published_year: newBookPublishedYear,
      });
      // Clear form inputs after successful submission
      setNewBookTitle('');
      setNewBookAuthor('');
      setNewBookGenre('');
      setNewBookPublishedYear('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Add User</h2>
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="First Name"
      />
      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Last Name"
      />
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="text"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        placeholder="Role"
      />
      <button onClick={handleAddUser}>Add User</button>

      <h2>Add Book</h2>
      <input
        type="text"
        value={newBookTitle}
        onChange={(e) => setNewBookTitle(e.target.value)}
        placeholder="Title"
      />
      <input
        type="text"
        value={newBookAuthor}
        onChange={(e) => setNewBookAuthor(e.target.value)}
        placeholder="Author"
      />
      <input
        type="text"
        value={newBookGenre}
        onChange={(e) => setNewBookGenre(e.target.value)}
        placeholder="Genre"
      />
      <input
        type="text"
        value={newBookPublishedYear}
        onChange={(e) => setNewBookPublishedYear(e.target.value)}
        placeholder="Published Year"
      />
      <button onClick={handleAddBook}>Add Book</button>
    </div>
  );
};

export default LibrarianPanel;
