
export default function SearchBar(props) {
    return(
        <>
            <div className="search-container">
      <input type="text" className="search-bar" placeholder="Search..." />
      <ConnectButton />
    </div>
        </>
    )
}