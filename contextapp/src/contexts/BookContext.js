import React, { createContext, useState } from "react";

export const BookContext = createContext();

const BookContextProvider = props => {
  const [books, setBooks] = useState([
    { title: "Sapiens", id: 1 },
    { title: "Blink", id: 2 },
    { title: "The Da Vinci Code", id: 3 },
    { title: "The Immortals of Meluha", id: 4 }
  ]);
  return (
    <BookContext.Provider value={{books}}>
      {props.children}
    </BookContext.Provider>
  )
};

export default BookContextProvider;
