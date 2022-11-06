import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Books from "./components/books/Books";
import Detail from "./components/books/Detail";
import Favorite from "./components/Favorite";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { ContextProvider } from "./contexts/BooksContext";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <NavBar />
       <Routes>
        <Route path="/" exact element={ <Books />} ></Route>
        <Route path="/favorite" exact element={ <Favorite />} ></Route>
        <Route path="/Detail/:id" exact element={ <Detail />} ></Route>
       </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;