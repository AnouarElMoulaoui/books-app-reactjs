import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ContextProvider } from './contexts/BooksContext';
import { FavoriteProvider } from './contexts/FavoriteContext';
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <ContextProvider>
          <FavoriteProvider>
            <App />
          </FavoriteProvider>
          </ContextProvider>
  </React.StrictMode>
);
