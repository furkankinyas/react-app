import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
function Header(){
return(
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about/">About</Link>
        </li>
     </ul>
   </nav>
  )
}

export default Header;