"use-client"
import { useState, useEffect } from "react"
import Link from 'next/link';
import ExpandableMenu from "./ExpandableMenu";

export default function Sidebar1(props) {

    const [clickedOn, setClickedOn] = useState(true)

    function click1(){
        setClickedOn(true)
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
                <Link legacyBehavior href="/">Token Address</Link>
                <li className="item2" onClick={click2}>Pair Address</li>
            </ul>

            <div>

    </div>
        </section>
        </>
    )
}

// import "bootstrap/dist/css/bootstrap.min.css";
// export default function Sidebar2(props) {

//     var getSidebar = document.querySelector('nav');
// var getToggle = document.getElementsByClassName('toggle');
// for (var i = 0; i <= getToggle.length; i++) {
//     getToggle[i].addEventListener('click', function () {
//         getSidebar.classList.toggle('active');
//     });
// }
//   return (
    // <>
      {/* <header>
        <div class="toggle">
          <i class="fas fa-bars"></i>
        </div>
        <h3>Dashboard</h3>
        <a href="#">
          <i class="fas fa-sign-out-alt"></i>
        </a>
      </header>
      <nav>
        <ul>
          <li>
            <a class="toggle">
              <span class="icon">
                <i class="fas fa-bars"></i>
              </span>
              <span class="title">Menu</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="icon">
                <i class="fas fa-home"></i>
              </span>
              <span class="title">Home</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="icon">
                <i class="fas fa-user"></i>
              </span>
              <span class="title">Profile</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="icon">
                <i class="fas fa-envelope"></i>
              </span>
              <span class="title">Messages</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="icon">
                <i class="fas fa-info"></i>
              </span>
              <span class="title">Help</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="icon">
                <i class="fas fa-cog"></i>
              </span>
              <span class="title">Setting</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="icon">
                <i class="fas fa-lock"></i>
              </span>
              <span class="title">Password</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="icon">
                <i class="fas fa-sign-out-alt"></i>
              </span>
              <span class="title">Sign Out</span>
            </a>
          </li>
        </ul>
      </nav> */}




//     </>
//   );
// }
