import { useEffect, useState } from "react";

export default function BookShelf() {
  const [books, setBooks] = useState([
    { title: "Fourth Wing", author: "Rebecca Yarros" },
    { title: "The Lion, the Witch and the Wardrobe", author: "C.S. Lewis" },
  ]);
  const [newBook, setNewBook] = useState({});

  function handleInputChange(e) {
    setNewBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    const formElement = e.target;

    e.preventDefault();
    setBooks((prev) => [...prev, newBook]);
    setNewBook({});

    formElement.reset(); // this neat method clears a form
  }
  useEffect(() => {
    console.log(books);
  }, [newBook]);

  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        {/* Form will go here */}
        <h2>Add a new book:</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="author">Author:</label>
          <input
            onChange={handleInputChange}
            type="text"
            required
            name="author"
            placeholder="Enter author"
          ></input>
          <label htmlFor="title">Title:</label>
          <input
            onChange={handleInputChange}
            type="text"
            required
            name="title"
            placeholder="Enter title"
          ></input>
          <button type="submit" style={{marginTop: "20px"}}>Submit</button>
        </form>
      </div>
      <div className="bookCardsDiv ">
        {/* Book cards will display here */}
        <h2>Books library:</h2>
        <div className="book_list" style={{ display: "flex" }}> { /* should probably move this style to a css file when I revisit */}
          {books.map((bookItem, index) => (
            <div key={index} className="bookCard">
              <p>Title: {bookItem.title}</p>
              <p>Author: {bookItem.author}</p>
              {/* {index > 0 ? <hr></hr> : <></>} */}

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
