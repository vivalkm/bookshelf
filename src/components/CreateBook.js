import React from "react";
import { useState } from "react";

export default function CreateBook({ onSubmit }) {
    const [bookName, setBookName] = useState("");
    const handleChange = (event) => {
        setBookName(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(bookName);
        setBookName("");
    };
    return (
        <div className="book-create">
            <form onSubmit={handleSubmit}>
                <h3>Create Book</h3>
                <input className="input" onChange={handleChange} value={bookName}></input>
                <button className="button">Submit</button>
            </form>
        </div>
    );
}
