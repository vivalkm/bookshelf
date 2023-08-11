import React from "react";
import { useState } from "react";

export default function BookEdit({ book, onEdit, toggleEdit }) {
    const [bookName, setBookName] = useState(book.title);
    const [bookImgUrl, setBookImgUrl] = useState(book.imgUrl);

    const handleTitleChange = (event) => {
        setBookName(event.target.value);
    };

    const handleImgUrlChange = (event) => {
        setBookImgUrl(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onEdit(bookName, bookImgUrl, book.id);
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
