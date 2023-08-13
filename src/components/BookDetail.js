import React from "react";

/**
 * A component to show details of a given book
 */
function BookDetail({ book }) {
    return (
        <div className="content">
            <div>
                <ul>
                    <li>Start reading date: {book.startDate}</li>
                    <li>Completion date: {book.endDate}</li>
                    <li>Notes: {book.notes}</li>
                </ul>
            </div>
        </div>
    );
}

export default BookDetail;
