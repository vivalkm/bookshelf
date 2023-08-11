import CreateBook from "./components/CreateBook";
import ReadingList from "./components/ReadingList";
import { useState } from "react";

function App() {
    const [books, setBooks] = useState([]);
    const handleCreateBook = (bookName) => {
        const newBook = { title: bookName, id: Math.round(Math.random() * 100000) };
        setBooks([...books, newBook]);
    };

    const deleteBook = (id) => {
        const newBooks = books.filter((book) => {
            return book.id !== id;
        });
        setBooks(newBooks);
    };

    const editBook = (newTitle, id) => {
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
        <div>
            <div>
                <ReadingList books={books} onDelete={deleteBook} onEdit={editBook} />
            </div>
            <hr />
            <div>
                <CreateBook onSubmit={handleCreateBook} />
            </div>
        </div>
    );
}

export default App;
