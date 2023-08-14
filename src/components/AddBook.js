import React, { useState } from "react";
import useBooksContext from "../hooks/useBooksContext";
import ReadingSummary from "./ReadingSummary";

/**
 * A component to add a book with details
 */
function AddBook() {
    const [formData, setFormData] = useState({
        bookName: "",
        bookImgUrl: "",
        startDate: "",
        endDate: "",
        notes: "",
    });

    const { bookName, bookImgUrl, startDate, endDate, notes } = formData;

    const { addBook } = useBooksContext();

    const [isOnCreate, setIsOnCreate] = useState(false);

    const handleFormChange = (event) => {
        setFormData({
            ...formData,
            [event.target.id]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addBook(bookName, bookImgUrl, startDate, endDate, notes);
        setFormData({
            bookName: "",
            bookImgUrl: "",
            startDate: "",
            endDate: "",
            notes: "",
        });

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
                        onChange={handleFormChange}
                        value={bookName}
                        id="bookName"
                        placeholder="Book Name"
                    />
                    <input
                        className="input"
                        onChange={handleFormChange}
                        value={bookImgUrl}
                        id="bookImgUrl"
                        placeholder="Book Image Url"
                    />
                    <label htmlFor="startDate">Start reading date:</label>
                    <input
                        className="input"
                        type="date"
                        id="startDate"
                        onChange={handleFormChange}
                        value={startDate}
                    />

                    <label htmlFor="endDate">Completion date:</label>
                    <input
                        className="input"
                        type="date"
                        id="endDate"
                        onChange={handleFormChange}
                        value={endDate}
                    />

                    <textarea
                        className="textarea"
                        rows={4}
                        onChange={handleFormChange}
                        value={notes}
                        id="notes"
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
