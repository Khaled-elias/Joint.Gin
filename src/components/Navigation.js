import { Link } from "react-router-dom";

const Navigation = () => {
    return ( 
        <nav>
            <ul id="navigation">
            <li>
              <Link to="/home" style={{color:"white" ,textDecoration: "none",}}>HOME</Link>
            </li>
            <li>
              <Link to="/entertainment" style={{color:"white",textDecoration: "none"}}>ENTERTAINMENT</Link>
            </li>
            <li>
              <Link to="/shop" style={{color:"white",textDecoration: "none"}}>SHOP</Link>
            </li>
            <li>
              <Link to="/event" style={{color:"white",textDecoration: "none"}}>EVENT</Link>
            </li>
            <li>
              <Link to="/contact" style={{color:"white",textDecoration: "none"}}>CONTACT</Link>
            </li>
                
            </ul>
        </nav>
     );
}
 
export default Navigation;
