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
        <div>
            <form onSubmit={handleSubmit}>
                <label>Create Book</label>
                <input onChange={handleChange} value={bookName}></input>
                <button>Submit</button>
            </form>
        </div>
    );
}
