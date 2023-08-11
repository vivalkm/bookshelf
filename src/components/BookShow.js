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
            <div>
                <img
                    src={`https://picsum.photos/seed/${book.id}/200/300`}
                    alt="book logo"
                />
                <button onClick={toggleEdit}>E</button>
                <button onClick={handleDelete}>D</button>
            </div>

            <div>
                {isEdit ? (
                    <BookEdit book={book} key={book.id} onEdit={onEdit} toggleEdit={toggleEdit} />
                ) : (
                    book.title
                )}
            </div>
        </div>
    );
}
