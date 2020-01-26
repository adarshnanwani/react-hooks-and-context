import React from "react";
import BookContextProvider from "./context/BookContext";
import NavBar from "./components/Navbar";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";

export default () => (
  <div className="App">
    <BookContextProvider>
      <NavBar/>
      <BookList />
      <BookForm/>
    </BookContextProvider>
  </div>
);
