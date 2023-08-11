import React from "react";
import { useState } from "react";
import BookEdit from "./BookEdit";

export default function BookShow({ book, onDelete, onEdit }) {
    const [isEdit, setIsEdit] = useState(false);
    const handleDelete = () => {
        onDelete(book.id);
    };

    const toggleEdit = () => {
        setIsEdit(!isEdit);
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
                    {isEdit ? (
                        <BookEdit
                            book={book}
                            key={book.id}
                            onEdit={onEdit}
                            toggleEdit={toggleEdit}
                        />
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
