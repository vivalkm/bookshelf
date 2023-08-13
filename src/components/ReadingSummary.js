import React from "react";
import useBooksContext from "../hooks/useBooksContext";

/**
 * Return the number of days between two given dates
 * @param {Date} dayEarlier an ealier date
 * @param {Date} dayLater an later date
 * @returns days between the two given dates
 */
function diffDays(dayEarlier, dayLater) {
    return (dayLater - dayEarlier) / (1000 * 60 * 60 * 24);
}

/**
 * A component to show reading summary
 */
export default function ReadingSummary() {
    const { books } = useBooksContext();
    let totalCompleted = 0;
    let totalReadingDays = 0;
    for (let book of books) {
        if (book.startDate !== "" && book.endDate !== "" && book.endDate >= book.startDate) {
            totalCompleted++;
            totalReadingDays += diffDays(Date.parse(book.startDate), Date.parse(book.endDate)) + 1;
        }
    }
    return (
        <div className="book-summary">
            <ul>
                <li>Total books: {books.length}</li>
                <li>Completed books: {totalCompleted}</li>
                <li>
                    Average reading days per book:{" "}
                    {totalCompleted > 0 ? Math.round(totalReadingDays / totalCompleted, 1) : 'N/A'}
                </li>
            </ul>
        </div>
    );
}
