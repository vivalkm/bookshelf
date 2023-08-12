import CreateBook from "./components/CreateBook";
import ReadingList from "./components/ReadingList";
import { useContext, useEffect, useState } from "react";
import BooksContext from "./context/books";

function App() {
    const {FetchBooks} = useContext(BooksContext);


    // fetch books from db on the first render only
    useEffect(() => {
        fetchBooks();
    }, []);

    
    return (
        <div className="app">
            <ReadingList/>
            <CreateBook/>
        </div>
    );
}

export default App;
