import CreateBook from "./components/CreateBook";
import ReadingList from "./components/ReadingList";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
    const [books, setBooks] = useState([]);
    const fetchBooks = async () => {
        const response = await axios.get("http://localhost:3001/books");
        setBooks(response.data);
    };

    useEffect(() => {
        fetchBooks();
    }, []);

    const handleCreateBook = async (bookName) => {
        const newBook = await axios.post("http://localhost:3001/books", { title: bookName });
        setBooks([...books, newBook.data]);
    };

    const deleteBookByID = async (id) => {
        const deletedBook = await axios.delete(`http://localhost:3001/books/${id}`);
        console.log(deletedBook);
        const newBooks = books.filter((book) => {
            return id !== book.id;
        });
        setBooks(newBooks);
    };

    const editBookByID = async (newTitle, id) => {
        const editedBook = await axios.put(`http://localhost:3001/books/${id}`, {
            title: newTitle,
        });
        const newBooks = books.map((book) => {
            if (book.id !== id) {
                return book;
            } else {
                // to avoid overwriting other properties of the book that could be updated by other users concurrently
                return {...book, ...editedBook.data};
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
