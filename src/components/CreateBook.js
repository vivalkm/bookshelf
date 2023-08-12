import React, { useState } from "react";
import useBooksContext from "../hooks/useBooksContext";

export default function CreateBook() {
    const [bookName, setBookName] = useState("");
    const [bookImgUrl, setBookImgUrl] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [notes, setNotes] = useState("");
    const { createBook } = useBooksContext();

    const [isOnCreate, setIsOnCreate] = useState(false);

    const handleTitleChange = (event) => {
        setBookName(event.target.value);
    };
    const handleImgUrlChange = (event) => {
        setBookImgUrl(event.target.value);
    };
    const handleStartDateChange = (event) => {
        setStartDate(event.target.value);
    };
    const handleEndDateChange = (event) => {
        setEndDate(event.target.value);
    };
    const handleNotesChange = (event) => {
        setNotes(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        createBook(bookName, bookImgUrl, startDate, endDate, notes);
        setBookName("");
        setBookImgUrl("");
        setStartDate("");
        setEndDate("");
        setNotes("");
        toggleCreateBook();
    };

    const toggleCreateBook = () => {
        setIsOnCreate(!isOnCreate);
    };

    if (isOnCreate) {
        return (
            <div className="book-create">
                <form onSubmit={handleSubmit}>
                    <h3>Create Book</h3>
                    <input
                        className="input"
                        onChange={handleTitleChange}
                        value={bookName}
                        placeholder="Book Name"
                    />
                    <input
                        className="input"
                        onChange={handleImgUrlChange}
                        value={bookImgUrl}
                        placeholder="Book Image Url"
                    />
                    <label htmlFor="startDate">Start reading date:</label>
                    <input
                        className="input"
                        type="date"
                        id="startDate"
                        onChange={handleStartDateChange}
                        value={startDate}
                    />

                    <label htmlFor="endDate">Completion date:</label>
                    <input
                        className="input"
                        type="date"
                        id="endDate"
                        onChange={handleEndDateChange}
                        value={endDate}
                    />

                    <textarea
                        className="textarea"
                        rows={4}
                        onChange={handleNotesChange}
                        value={notes}
                        placeholder="Notes"
                    ></textarea>
                    <div className="buttonGroup">
                        <button className="button">Submit</button>
                        <button className="button" type="button" onClick={toggleCreateBook}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        );
    } else {
        return (
            <div className="book-create">
                <button className="button" onClick={toggleCreateBook}>
                    Create Book
                </button>
            </div>
        );
    }
}
