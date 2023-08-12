import CreateBook from "./components/CreateBook";
import ReadingList from "./components/ReadingList";
import { useContext, useEffect } from "react";
import BooksContext from "./context/BooksContext";

function App() {
    const { fetchBooks } = useContext(BooksContext);

    // fetch books from db on the first render only
    useEffect(() => {
        fetchBooks();
    }, [fetchBooks]);

    return (
        <div className="app">
            <ReadingList />
            <CreateBook />
        </div>
    );
}

export default App;
