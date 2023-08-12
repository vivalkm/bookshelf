import React, { useState } from "react";
import BookEdit from "./BookEdit";
import useBooksContext from "../hooks/useBooksContext";

export default function BookShow({ book }) {
    const [isOnEdit, setIsOnEdit] = useState(false);
    const { deleteBookById } = useBooksContext();
    const handleDelete = () => {
        deleteBookById(book.id);
    };

    const toggleEdit = () => {
        setIsOnEdit(!isOnEdit);
    };

    return (
        <div className="book-show">
            <img
                src={
                    book.imgUrl.length > 0
                        ? book.imgUrl
                        : `https://picsum.photos/seed/${book.id}/200/300`
                }
                alt="book logo"
            />
            <div>
                <h3>
                    {isOnEdit ? (
                        <BookEdit book={book} key={book.id} toggleEdit={toggleEdit} />
                    ) : (
                        book.title
                    )}
                </h3>
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
