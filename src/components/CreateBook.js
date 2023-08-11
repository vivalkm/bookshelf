import React from "react";
import { useState } from "react";

export default function CreateBook({ onSubmit }) {
    const [bookName, setBookName] = useState("");
    const [bookImgUrl, setBookImgUrl] = useState("");

    const handleTitleChange = (event) => {
        setBookName(event.target.value);
    };
    const handleImgUrlChange = (event) => {
        setBookImgUrl(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(bookName, bookImgUrl);
        setBookName("");
        setBookImgUrl("");
    };
    return (
        <div className="book-create">
            <form onSubmit={handleSubmit}>
                <h3>Create Book</h3>
                <input
                    className="input"
                    onChange={handleTitleChange}
                    value={bookName}
                    placeholder="Book Name"
                ></input>
                <input
                    className="input"
                    onChange={handleImgUrlChange}
                    value={bookImgUrl}
                    placeholder="Book Image Url"
                ></input>
                <button className="button">Submit</button>
            </form>
        </div>
    );
}
