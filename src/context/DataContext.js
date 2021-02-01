import { useState, createContext } from 'react';

export const DataContext = createContext();

const initialState = () => JSON.parse(localStorage.getItem('myMovies')) || null;

export const DataProvider = ({ children }) => {
  const [movies, setMovies] = useState(initialState);

  return (
    <DataContext.Provider
      value={{
        movies,
        setMovies,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
