import React from "react";
import { useState } from "react";

export default function BookEdit({ book, onEdit, toggleEdit }) {
    const [bookName, setBookName] = useState(book.title);
    const handleChange = (event) => {
        setBookName(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        onEdit(bookName, book.id);
        toggleEdit();
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={bookName} onChange={handleChange} />
            </form>
        </div>
    );
}
