import React, { useState } from "react";
import useBooksContext from "../hooks/useBooksContext";

/**
 * A component to edit a given book object
 */
function BookEdit({ book, toggleEdit }) {
    const [formData, setFormData] = useState({
        bookName : book.title,
        bookImgUrl : book.imgUrl,
        startDate : book.startDate,
        endDate : book.endDate,
        notes : book.notes,
    });

    const { bookName, bookImgUrl, startDate, endDate, notes } = formData;
    
    const { editBookById } = useBooksContext();
    const handleFormChange = (event) => {
        setFormData({
            ...formData,
            [event.target.id]: event.target.value,
        });
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
                <input id="bookName" value={bookName} onChange={handleFormChange} />
                <label>Book cover image url</label>
                <input id="bookImgUrl" value={bookImgUrl} onChange={handleFormChange} />
                <label>Start Date</label>
                <input id="startDate" type="date" value={startDate} onChange={handleFormChange} />
                <label>End Date</label>
                <input id="endDate" type="date" value={endDate} onChange={handleFormChange} />
                <label>Notes</label>
                <textarea
                    id="notes"
                    type="textarea"
                    rows={4}
                    value={notes}
                    onChange={handleFormChange}
                ></textarea>
                <div>
                    <button className="button">Submit</button>
                    <button className="button" type="button" onClick={toggleEdit}>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}

export default  BookEdit;