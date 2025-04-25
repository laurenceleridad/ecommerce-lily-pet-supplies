import { IoMenuOutline } from "react-icons/io5";
import { Button } from '@mui/material';
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";



const Navigation = ()=>{
    return(
        <nav>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-2 nav1'>
                        <Button className='allCat align-items-center'>
                            <span className='icon1 mr-2'><IoMenuOutline /></span>
                            <span className='text'>ALL CATEGORIES</span>
                            <span className='icon2 ml-2'><FaAngleDown /></span>
                            </Button>
                    </div>
                    <div className='col-sm-10 nav2 d-flex align-items-center'>
                        <ul className='list list-inline ml-auto'>
                            <li className='list-inline-item'><Link to="/"><Button>Home</Button></Link></li>
                            <li className='list-inline-item'><Link to="/"><Button>Food</Button></Link></li>
                            <li className='list-inline-item'><Link to="/"><Button>Hygiene</Button></Link></li>
                            <li className='list-inline-item'><Link to="/"><Button>Toys</Button></Link></li>
                            <li className='list-inline-item'><Link to="/"><Button>Treats</Button></Link></li>
                            <li className='list-inline-item'><Link to="/"><Button>Beds</Button></Link></li>
                            <li className='list-inline-item'><Link to="/"><Button>Essentials</Button></Link></li>
                            <li className='list-inline-item'><Link to="/"><Button>Blog</Button></Link></li>
                            <li className='list-inline-item'><Link to="/"><Button>Contact Us</Button></Link></li>
                        </ul>
                        
                    </div>
                </div>
            </div>
        </nav>
    )
}


export default Navigation;