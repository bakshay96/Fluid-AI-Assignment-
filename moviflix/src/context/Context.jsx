import React, { useContext, useState } from "react";
import useFetch from "../components/useFetch";


const AppContext = React.createContext();



// wrapper component to provide context value for wrapped component
const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("iron Man");
  const { isLoading, isError, movie ,isDataAvailable} = useFetch(`&s=${query}`);

  return (
    <AppContext.Provider value={{ query, movie, setQuery, isLoading, isError,isDataAvailable }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };