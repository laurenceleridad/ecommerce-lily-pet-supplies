import { IoMenuOutline } from "react-icons/io5";
import { Button } from '@mui/material';
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";



const Navigation = ()=>{
    return(
        <nav>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-3 nav1'>
                        <Button className='allCat align-items-center'>
                            <span className="icon1 mr-2"><IoMenuOutline /></span>
                            <span class='text'>ALL CATEGORIES</span>
                            <span className="icon2 ml-2"><FaAngleDown /></span>
                            </Button>
                    </div>
                    <div className='col-sm-9 nav2 d-flex align-items-center'>
                        <ul className='list list-inline ml-auto'>
                            <li className='list-inline-item'><Link to="/">Home</Link></li>
                            <li className='list-inline-item'><Link to="/">Food</Link></li>
                            <li className='list-inline-item'><Link to="/">Hygiene</Link></li>
                            <li className='list-inline-item'><Link to="/">Toys</Link></li>
                            <li className='list-inline-item'><Link to="/">Treats</Link></li>
                            <li className='list-inline-item'><Link to="/">Essentials</Link></li>
                            <li className='list-inline-item'><Link to="/">Blog</Link></li>
                            <li className='list-inline-item'><Link to="/">Contact Us</Link></li>
                        </ul>
                        
                    </div>
                </div>
            </div>
        </nav>
    )
}


export default Navigation;