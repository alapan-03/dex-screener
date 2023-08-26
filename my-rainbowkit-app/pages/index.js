import { ConnectButton } from '@rainbow-me/rainbowkit';
// import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Searchbar from "./Searchbar"
import Details from "./Details"
import Sidebar1 from './Sidebar1';
import { useState } from 'react';
import Link from 'next/link';
// import 'bootstrap/dist/css/bootstrap.min.css';



export default function index(props) {
  const [value, setValue] = useState("0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c")
  const [searchType, setSearchType] = useState('tokenAddress');

const [searchText, setSearchText] = useState('0x2170Ed0880ac9A755fd29B2688956BD959F933F8');

// const handleSearchChange = (event) => {
  
//   if (event.key === 'Enter') {
//       setSearchText(event.target.value);
//       // handleSearchSubmit(event);
//   }
// };

const handleSearchChange = (event) => {
  if (event.key === 'Enter') {
    event.preventDefault(); // Prevent default Enter behavior (e.g., form submission)
    setSearchText(event.target.value);
    handleSearchSubmit(event); // Trigger the search action
  }
};

const handleSearchSubmit = (event) => {
    event.preventDefault(); // Prevent form submission
    // const searchType = isPairAddressSearch ? 'pairAddress' : 'tokenAddress';
    // props.onSearchSubmit(searchText);
};

  return (
    
    <div className={styles.container} style={{display:"flex", flexDirection:"column"}}>
      <nav class="navbar navbar-expand-lg bg-body-tertiary mt-1 mb-5 pe-4 pt-3 ps-3 pb-3" style={{borderRadius:"200px"}}>
  <div class="container-fluid">
    <a class="navbar-brand" href="#">NFTify</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item me-3"  style={{transform:"translate(0, .5rem)"}}>
        <Link legacyBehavior href="/">Token Address</Link>
        </li>
        <li class="nav-item me-5" style={{transform:"translate(0, .5rem)"}}>
        
                <Link legacyBehavior href="/index2">
  <a>Pair Address</a>
</Link>
        </li>
        
        <li className='nav-item'>
          <ConnectButton/>
        </li>
      
      </ul>
      <form class="d-flex" role="search" onSubmit={handleSearchSubmit}>
        <input class="form-control me-2" value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
          onKeyDown={handleSearchChange} type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit" >Search</button>
      </form>
    </div>
  </div>
</nav>
      {/* <Searchbar onSearchSubmit={handleSearchSubmit} searchType={searchType}/> */}
      <div style={{position:"relative", left:"25rem", top:"10rem"}}>
      <Details detail={searchText}/>
      </div>
      <div style={{position:"absolute", left:"0rem", height:"100vh"}}>
      {/* <Sidebar1 clickedOn={clickedOn}/> */}
      </div>
        {/* <ConnectButton /> */}
    </div>
  );
};

// export default index;
