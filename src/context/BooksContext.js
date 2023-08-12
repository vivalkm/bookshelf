import React, { createContext, useCallback, useState } from "react";
import { dbUrl } from "../env.js";
import axios from "axios";

const BooksContext = createContext();

export function Provider({ children }) {
    const [books, setBooks] = useState([]);

    // useCallback gives back the same first parameter defined in first render, given the second parameter is empty array
    const fetchBooks = useCallback(async () => {
        const response = await axios.get(`${dbUrl}/books`);
        setBooks(response.data);
    }, []);

    const createBook = async (bookName, bookImgUrl) => {
        const newBook = await axios.post(`${dbUrl}/books`, {
            title: bookName,
            imgUrl: bookImgUrl,
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

    const editBookById = async (newTitle, newImgUrl, id) => {
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
        <BooksContext.Provider
            value={{ books, fetchBooks, createBook, deleteBookById, editBookById }}
        >
            {children}
        </BooksContext.Provider>
    );
}

export default BooksContext;
