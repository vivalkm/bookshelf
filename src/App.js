import CreateBook from "./components/CreateBook";
import ReadingList from "./components/ReadingList";
import { useState } from "react";

function App() {
    const [books, setBooks] = useState([]);
    const handleCreateBook = (bookName) => {
        const newBook = { title: bookName, id: Math.round(Math.random() * 100000) };
        setBooks([...books, newBook]);
    };

    const deleteBookByID = (id) => {
        const newBooks = books.filter((book) => {
            return book.id !== id;
        });
        setBooks(newBooks);
    };

    const editBookByID = (newTitle, id) => {
        const newBooks = books.map((book) => {
            if (book.id !== id) {
                return book;
            } else {
                return { title: newTitle, id: id };
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
