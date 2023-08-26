import { useState } from "react"
import Link from 'next/link';

export default function Sidebar1(props) {

    const [clickedOn, setClickedOn] = useState(true)

    function click1(){
        setClickedOn(true)
        console.log("1 clicked")
    }
    function click2(){
        setClickedOn(false)
        console.log("wklfedi")
        
    }
    return(
        <>
        <section style={{width:"15rem", height:"160vh", backgroundColor:"#404040", margin:"0px"}}>
            <ul style={{listStyle:"none", color:"white"}} className="sidebar">
                <li style={{fontSize:"2rem"}}>NFTify</li>
                <Link legacyBehavior href="/index">Token Address</Link>
                <Link legacyBehavior href="/index2">
  <a>Pair Address</a>
</Link>
            </ul>
        </section>
        </>
    ) 
}