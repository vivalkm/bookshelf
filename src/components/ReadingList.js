import React from "react";
import useBooksContext from "../hooks/useBooksContext";
import BookShow from "./BookShow";

export default function ReadingList() {
    const { books } = useBooksContext();
    const renderedBooks = books.map((book) => {
        return <BookShow book={book} key={book.id} />;
    });
    return <div className="book-list">{renderedBooks}</div>;
}
