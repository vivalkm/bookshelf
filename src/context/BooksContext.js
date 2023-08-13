import React, { createContext, useCallback, useState } from "react";
import { dbUrl } from "../env.js";
import axios from "axios";

const BooksContext = createContext();

function Provider({ children }) {
    const [books, setBooks] = useState([]);

    // useCallback gives back the same first parameter object created in first render, given the second parameter is empty array
    const fetchBooks = useCallback(async () => {
        const response = await axios.get(`${dbUrl}/books`);
        setBooks(response.data);
    }, []);

    const addBook = async (title, imgUrl, startDate, endDate, notes) => {
        const newBook = await axios.post(`${dbUrl}/books`, {
            title,
            imgUrl,
            startDate,
            endDate,
            notes,
        });
        setBooks([...books, newBook.data]);
    };

    const deleteBookById = async (id) => {
        await axios.delete(`${dbUrl}/books/${id}`);
        const newBooks = books.filter((book) => {
            return id !== book.id;
        });
        setBooks(newBooks);
    };

    const editBookById = async (title, imgUrl, startDate, endDate, notes, id) => {
        const editedBook = await axios.put(`${dbUrl}/books/${id}`, {
            title,
            imgUrl,
            startDate,
            endDate,
            notes,
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
        <BooksContext.Provider value={{ books, fetchBooks, addBook, deleteBookById, editBookById }}>
            {children}
        </BooksContext.Provider>
    );
}

export default BooksContext;
export { Provider };
