import React, { useState } from "react";
import useBooksContext from "../hooks/useBooksContext";

export default function BookEdit({ book, toggleEdit }) {
    const [bookName, setBookName] = useState(book.title);
    const [bookImgUrl, setBookImgUrl] = useState(book.imgUrl);
    const [startDate, setStartDate] = useState(book.startDate);
    const [endDate, setEndDate] = useState(book.endDate);
    const [notes, setNotes] = useState(book.notes);
    const { editBookById } = useBooksContext();
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
        editBookById(bookName, bookImgUrl, startDate, endDate, notes, book.id);
        toggleEdit();
    };

    return (
        <div className="book-edit">
            <form onSubmit={handleSubmit}>
                <label>Book title</label>
                <input value={bookName} onChange={handleTitleChange} />
                <label>Book cover image url</label>
                <input value={bookImgUrl} onChange={handleImgUrlChange} />
                <label>Start Date</label>
                <input type="date" value={startDate} onChange={handleStartDateChange} />
                <label>End Date</label>
                <input type="date" value={endDate} onChange={handleEndDateChange} />
                <label>Notes</label>
                <textarea
                    type="textarea"
                    rows={4}
                    value={notes}
                    onChange={handleNotesChange}
                ></textarea>
                <div>
                    <button className="button">Submit</button>
                    <button className="button" type="button" onClick={toggleEdit}>Cancel</button>
                </div>
            </form>
        </div>
    );
}
