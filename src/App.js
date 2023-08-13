import AddBook from "./components/AddBook";
import ReadingList from "./components/ReadingList";
import { useEffect } from "react";
import useBooksContext from "./hooks/useBooksContext";


function App() {
    const { fetchBooks } = useBooksContext();

    // fetch books from db on the first render only
    useEffect(() => {
        fetchBooks();
    }, [fetchBooks]);

    return (
        <div className="app">
            
            <ReadingList />
            <AddBook />
        </div>
    );
}

export default App;
