import React, { useState } from "react";
import BookEdit from "./BookEdit";
import useBooksContext from "../hooks/useBooksContext";
import BookDetail from "./BookDetail";

/**
 * A component to a given book
 */
function BookShow({ book }) {
    const [isOnEdit, setIsOnEdit] = useState(false);
    const [isOnDetail, setIsOnDetail] = useState(false);
    const { deleteBookById } = useBooksContext();
    const handleDelete = () => {
        deleteBookById(book.id);
    };

    const toggleEdit = () => {
        setIsOnEdit(!isOnEdit);
    };

    const toggleDetail = () => {
        setIsOnDetail(!isOnDetail);
    };

    return (
        <div className="book-show" onClick={toggleDetail}>
            <img
                src={
                    book.imgUrl.length > 0
                        ? book.imgUrl
                        : `https://picsum.photos/seed/${book.id}/200/300`
                }
                alt="book logo"
            />
            <div>
                {isOnEdit ? (
                    <BookEdit book={book} key={book.id} toggleEdit={toggleEdit} />
                ) : isOnDetail ? (
                    <div>
                        <h3>{book.title}</h3>
                        <BookDetail book={book} key={book.id} />
                    </div>
                ) : (
                    <h3>{book.title}</h3>
                )}
            </div>
            <div className="actions">
                <button className="edit" onClick={toggleEdit}>
                    Edit
                </button>
                <button className="delete" onClick={handleDelete}>
                    Delete
                </button>
            </div>
        </div>
    );
}

export default BookShow;
