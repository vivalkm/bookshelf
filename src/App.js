import CreateBook from "./components/CreateBook";
import ReadingList from "./components/ReadingList";
import { useEffect, useState } from "react";
import axios from "axios";
import { dbUrl } from "./env.js";

function App() {
    const [books, setBooks] = useState([]);
    const fetchBooks = async () => {
        const response = await axios.get(`${dbUrl}/books`);
        setBooks(response.data);
    };

    // fetch books from db on the first render only
    useEffect(() => {
        fetchBooks();
    }, []);

    const handleCreateBook = async (bookName, bookImgUrl) => {
        const newBook = await axios.post(`${dbUrl}/books`, {
            title: bookName,
            imgUrl: bookImgUrl,
        });
        setBooks([...books, newBook.data]);
    };

    const deleteBookByID = async (id) => {
        const deletedBook = await axios.delete(`${dbUrl}/books/${id}`);
        const newBooks = books.filter((book) => {
            return id !== book.id;
        });
        setBooks(newBooks);
    };

    const editBookByID = async (newTitle, newImgUrl, id) => {
        const editedBook = await axios.put(`${dbUrl}/books/${id}`, {
            title: newTitle,
            imgUrl: newImgUrl,
        });
        const newBooks = books.map((book) => {
            if (book.id !== id) {
                return book;
            } else {
                // to avoid overwriting other properties of the book that could be updated by other users concurrently
                return { ...book, ...editedBook.data };
            }
        });
        setBooks(newBooks);
    };
    return (
        <div className="app">
            <ReadingList books={books} onDelete={deleteBookByID} onEdit={editBookByID} />
            <CreateBook onSubmit={handleCreateBook} />
        </div>
    );
}

export default App;
