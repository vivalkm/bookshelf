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
        <div>
            <div>
                <img
                    width="100px"
                    src="https://images.unsplash.com/photo-1526379095098-d400fd0bf935?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjQzMDF8MHwxfHNlYXJjaHwxfHxweXRob258ZW58MHx8fHwxNjkxNTM0NzQ2fDA&ixlib=rb-4.0.3&q=80&w=400"
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
