import React, { useState, useContext } from "react";
import BookEdit from "./BookEdit";
import BooksContext from "../context/books";

export default function BookShow({ book }) {
    const [isEdit, setIsEdit] = useState(false);
    const { deleteBookByID } = useContext(BooksContext);
    const handleDelete = () => {
        deleteBookByID(book.id);
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
