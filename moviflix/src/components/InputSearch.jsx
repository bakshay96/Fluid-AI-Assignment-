import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../context/Context";


const InputSearch = () => {
  // useGlobalContext provide props variable 
  const { query, setQuery, isError } = useGlobalContext();
  const inputRef = useRef(null);


  useEffect(() => {
    // to focus over input box bydefault
      inputRef.current.focus();
  }, []);
 
  return (
    <>
      <section className="search-section">
        <h2>Search Your Favourite Movie</h2>
        <form action="#" onSubmit={(e) => e.preventDefault()}>
          <div>
            <input
              type="text"
              placeholder="search movie"
              value={query}
              ref={inputRef}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </form>
        <div className="card-error">
          <p>{isError.show && isError.msg}</p>
        </div>
      </section>
    </>
  );
};

export default InputSearch;