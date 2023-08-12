import React from "react";
import { useState, useContext } from "react";
import BooksContext from "../context/books";

export default function BookEdit({ book, toggleEdit }) {
    const [bookName, setBookName] = useState(book.title);
    const [bookImgUrl, setBookImgUrl] = useState(book.imgUrl);
    const { editBookById } = useContext(BooksContext);
    const handleTitleChange = (event) => {
        setBookName(event.target.value);
    };

    const handleImgUrlChange = (event) => {
        setBookImgUrl(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        editBookById(bookName, bookImgUrl, book.id);
        toggleEdit();
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={bookName} onChange={handleTitleChange} />
                <input value={bookImgUrl} onChange={handleImgUrlChange} />
                <div>
                    <button className="button">Submit</button>
                </div>
            </form>
        </div>
    );
}
