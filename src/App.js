import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import SearchBar from './SearchBar';

function App() {
  const [data, setData] = useState([]);
  const apiUrl = "https://api.dexscreener.com/latest/dex/search/?q=:q";
  const searchTerm = "your-search-term";
  const finalUrl = apiUrl.replace(":q", encodeURIComponent(searchTerm));

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(finalUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Network response was not ok (${response.status} ${response.statusText})`
          );
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  };

  
  return (
    <div>
      <SearchBar/>
      <h1>Data from API</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
  export default App;
  
