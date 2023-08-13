import React, { useState } from "react";
import useBooksContext from "../hooks/useBooksContext";
import ReadingSummary from "./ReadingSummary";

/**
 * A component to add a book with details
 */
function AddBook() {
    const [bookName, setBookName] = useState("");
    const [bookImgUrl, setBookImgUrl] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [notes, setNotes] = useState("");
    const { addBook } = useBooksContext();

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
        addBook(bookName, bookImgUrl, startDate, endDate, notes);
        setBookName("");
        setBookImgUrl("");
        setStartDate("");
        setEndDate("");
        setNotes("");
        toggleAddBook();
    };

    const toggleAddBook = () => {
        setIsOnCreate(!isOnCreate);
    };

    if (isOnCreate) {
        return (
            <div className="book-create">
                <form onSubmit={handleSubmit}>
                    <h3>Add a New Book</h3>
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
                        <button className="button" type="button" onClick={toggleAddBook}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        );
    } else {
        return (
            <div className="book-create">
                <div className="start">
                    <button className="button" onClick={toggleAddBook}>
                        Add Book
                    </button>
                    <ReadingSummary />
                </div>
            </div>
        );
    }
}
export default AddBook;
