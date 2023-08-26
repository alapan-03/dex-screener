import Image from "next/image";

import { useState, useEffect } from "react";
export default function Details(props) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);


  const apiUrl = `https://api.dexscreener.io/latest/dex/tokens/${props.detail}`
  const apiUrl2 = `https://api.dexscreener.io/latest/dex/pairs/${props.detail}/0x7213a321F1855CF1779f42c0CD85d3D95291D34C`
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
        setError(false)
      }
    catch(error) {
        setError(error)
        console.error("Fetch error:", error);
    };
};

  const chunkArray = async (arr, size) => {
    const chunkedArr = [];
    for (let i = 0; i < arr.length; i += size) {
      chunkedArr.push(arr.slice(i, i + size));
    }
    return chunkedArr;
  };

return (
    <div style={{color:"white"}}>
    <h1 style={{transform:"translate(-13.5rem, -6rem)"}}>Search results...</h1>
    {error || !data?<p>No Data</p>:
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
                {/* <Image src="/infoicon.png" width={30} height={30}></Image> */}
                View more...
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
                Price Usd: {pair.priceUsd}
            </div>
          </div>
        ))}
      </div>
      }
  </div>
  );
}
