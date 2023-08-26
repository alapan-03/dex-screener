import Image from "next/image";

import { useState, useEffect } from "react";
import ExpandableMenu from "./ExpandableMenu";
export default function Details2(props) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const apiUrl2 = `https://api.dexscreener.io/latest/dex/tokens/${props.detail}`
  const apiUrl = `https://api.dexscreener.io/latest/dex/pairs/${props.detail}/0x16b9a82891338f9ba80e2d6970fdda79d1eb0dae`
  console.log(props.detail)
  console.log(apiUrl)
//   const searchTerm = "your-search-term";
//   const finalUrl = apiUrl.replace(":q", encodeURIComponent(searchTerm));

  useEffect(() => {
    fetchData();
  }, [props.detail]);

  const fetchData = async () => {
    try{
    const response = await fetch(apiUrl)
    if (!response.ok) {
          throw new Error(
            `Network response was not ok (${response.status} ${response.statusText})`
          );
        }
        const responseData = await response.json()
        console.log(responseData)
        setData(responseData.pairs)
        console.log(responseData.pairs)
      }
    catch(error) {
        console.error("Fetch error:", error);
        setError(error)
    };
};

// if (error) {
//     return <div style={{ color: "white" }}>No data found</div>;
//   }

//  else if (data.length === 0) {
//     return <div style={{ color: "white" }}>No data found</div>;
//   }

// else{
    console.log("no err")
return (
    <div style={{color:"white"}}>
    <h1 style={{transform:"translate(-13.5rem, -6rem)"}}>Search results...</h1>
    {/* {error || !data ?<p>No Data Found</p>:( */}
    <div className="card-container">
        {data.slice(0,3).map((pair, index) => (
          <div className="card-group" key={index}>
            {/* Basic Info Card */}
            <div className="card">
                <h2>Basic info</h2>
              <p>Dex Id: {pair.dexId}</p>
              <p>Pair Address: {pair.pairAddress.slice(-4)}</p>
              <p>Symbol: {pair.chainId}</p>
              <p>Chain Id: {pair.chainId}</p>
              <p>
                <a href={pair.url} target="_blank" rel="noopener noreferrer">
                  View Pair
                </a>
                  {/* <Image src="/infoicon.png" width={30} height={30}></Image> */}
              </p>
              {/* Add more basic info */}
            </div>
            
            {/* Base Token Info Card */}
            <div className="card">
              <h2>Base Token:</h2>
              <div>Name: {pair.baseToken.name}</div>
              <div>Symbol: {pair.baseToken.symbol}</div>
              <div>Address: {pair.baseToken.address.slice(-4)}</div>
              {/* Add more base token info */}
            </div>

            {/* Quote Token Info Card */}
            <div className="card">
              <h2>Quote Token:</h2>
              <div>Name: {pair.quoteToken.name}</div>
              <div>Symbol: {pair.quoteToken.symbol}</div>
              <div>Address: {pair.quoteToken.address.slice(-4)}</div>
              {/* Add more quote token info */}
            </div>
            <div className="card">
                <h2>Price</h2>
                Price Native: {pair.priceNative}
                <br></br>
                Price Usd: ${pair.priceUsd}
            </div>
          </div>
        ))}
      </div>
    
    
  </div>
  );
}
// }