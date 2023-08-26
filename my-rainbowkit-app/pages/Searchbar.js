import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Sidebar } from 'lucide-react';
import Sidebar1 from "./Sidebar1"
import { useState } from 'react';


export default function Searchbar(props) {
    const [searchText, setSearchText] = useState('');

    const handleSearchChange = (event) => {
        setSearchText(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault(); // Prevent form submission
        // const searchType = isPairAddressSearch ? 'pairAddress' : 'tokenAddress';
        props.onSearchSubmit(searchText);
    };
    
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearchSubmit(event);
        }
    };

    return(
        <>
            <div className="search-container">
                <div className="row justify-content-between">
                <div className="col-md-2 col-12 order-md-1 order-2" style={{marginLeft:"-2rem"}}>
                       {/* <Sidebar1/> */}
                    </div>
                    {/* <form  */}
                    <form className="col-md-2 col-12 order-md-1 order-2 ms-5" onSubmit={handleSearchSubmit}>
                        <input type="text" className="form-control search-bar"  value={searchText}
                        onChange={handleSearchChange}  onKeyPress={handleKeyPress} placeholder="Search..." />
                    </form>
                    {/* </form> */}
                    <div className="col-md-2 col-12 order-md-2 order-1">
                        <ConnectButton />
                    </div>
                </div>
        
            </div>
        </>
    )
}