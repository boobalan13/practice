import { Link } from "react-router-dom";
import "../../Css/Navbar.css"

const Navbar = () =>{
    var styling = {
        textDecoration:"none",
        color:"black",
        liststyleType:"none",
        textAlign:"centre",
    };
    return(
        <header>
            <nav>
                <ol>
                    <li><Link to='/ ' className='Link'>Home</Link></li>
                    <li><Link to='/About'  className='Link'>About</Link></li>
                    <li><Link to='/Gallery' className='Link'>Gallery</Link></li>
                    <li><Link to='/Contact' className='Link'>Contact</Link></li>
                    <li><Link to='/Signup' className='Link'>Signup</Link></li>
                </ol>
            </nav>
        </header>
    )

}
export default Navbar;
