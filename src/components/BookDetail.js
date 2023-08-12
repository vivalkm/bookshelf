import React from 'react'

export default function BookDetail({book}) {
  return (
      <div className='book-detail'>
          <div className="date">
              <div>Start reading date: {book.startDate}</div>
              <div>Completion date: {book.endDate}</div>
              <div>Notes: {book.notes}</div>
          </div>
      </div>
  );
}
