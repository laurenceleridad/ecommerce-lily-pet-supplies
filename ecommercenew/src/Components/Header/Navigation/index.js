import { IoMenuOutline } from "react-icons/io5";
import { Button } from '@mui/material';
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";



const Navigation = ()=>{

    const [isOpenSubsideVal, setIsOpenSubsideVal] = useState(false);

    return(
        <nav>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-2 nav1'>
                        <div className='catFill'>
                            <Button className='allCat align-items-center' onClick={() => setIsOpenSubsideVal(!isOpenSubsideVal)}>
                                <span className='icon1 mr-2'><IoMenuOutline /></span>
                                <span className='text'>ALL CATEGORIES</span>
                                <span className='icon2 ml-2'><FaAngleDown /></span>
                            </Button>
                            <div className={`subsideNav ${isOpenSubsideVal===true ? 'open' : ''}`}>
                                <ul>
                                    <li><Link to="/"><Button>Food<FaAngleRight className="ml-auto" /></Button></Link>
                                        <div className='submenu'>
                                            <Link to="/"><Button>Dry Dog Food</Button></Link>
                                            <Link to="/"><Button>Wet Dog Food</Button></Link>
                                            <Link to="/"><Button>Dry Cat Food</Button></Link>
                                            <Link to="/"><Button>Wet Cat Food</Button></Link>
                                            <Link to="/"><Button>Milk</Button></Link>
                                        </div>
                                    </li>
                                    <li><Link to="/"><Button>Hygiene<FaAngleRight className="ml-auto" /></Button></Link>
                                        <div className='submenu'>
                                            <Link to="/"><Button>Shampoo</Button></Link>
                                            <Link to="/"><Button>Dry Shampoo</Button></Link>
                                            <Link to="/"><Button>Toothbrush</Button></Link>
                                            <Link to="/"><Button>Toothpaste</Button></Link>
                                            <Link to="/"><Button>Wet Tissue</Button></Link>
                                        </div>
                                    </li>
                                    <li><Link to="/"><Button>Toys<FaAngleRight className="ml-auto" /></Button></Link>
                                        <div className='submenu'>
                                            <Link to="/"><Button>Dog Toys</Button></Link>
                                            <Link to="/"><Button>Cat Toys</Button></Link>
                                            <Link to="/"><Button>Puppy Toys</Button></Link>
                                            <Link to="/"><Button>Cat Tower</Button></Link>
                                            <Link to="/"><Button>Dog Slinky</Button></Link>
                                        </div>
                                    </li>
                                    <li><Link to="/"><Button>Treats</Button></Link></li>
                                    <li><Link to="/"><Button>Beds</Button></Link></li>
                                    <li><Link to="/"><Button>Essentials</Button></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-10 nav2 d-flex align-items-center'>
                        <ul className='list list-inline ml-auto'>
                            <li className='list-inline-item'><Link to="/"><Button>Home</Button></Link></li>
                            <li className='list-inline-item'>
                                <Link to="/"><Button>Food</Button></Link>
                                <div className='submenu shadow'>
                                    <Link to="/"><Button>Dry Dog Food</Button></Link>
                                    <Link to="/"><Button>Wet Dog Food</Button></Link>
                                    <Link to="/"><Button>Dry Cat Food</Button></Link>
                                    <Link to="/"><Button>Wet Cat Food</Button></Link>
                                    <Link to="/"><Button>Milk</Button></Link>
                                </div>
                            </li>
                            <li className='list-inline-item'>
                                <Link to="/"><Button>Hygiene</Button></Link>
                                <div className='submenu shadow'>
                                    <Link to="/"><Button>Dry Dog Food</Button></Link>
                                    <Link to="/"><Button>Wet Dog Food</Button></Link>
                                    <Link to="/"><Button>Dry Cat Food</Button></Link>
                                    <Link to="/"><Button>Wet Cat Food</Button></Link>
                                    <Link to="/"><Button>Milk</Button></Link>
                                </div>
                            </li>
                            <li className='list-inline-item'>
                                <Link to="/"><Button>Toys</Button></Link>
                                <div className='submenu shadow'>
                                    <Link to="/"><Button>Dry Dog Food</Button></Link>
                                    <Link to="/"><Button>Wet Dog Food</Button></Link>
                                    <Link to="/"><Button>Dry Cat Food</Button></Link>
                                    <Link to="/"><Button>Wet Cat Food</Button></Link>
                                    <Link to="/"><Button>Milk</Button></Link>
                                </div>
                            </li>
                            <li className='list-inline-item'>
                                <Link to="/"><Button>Treats</Button></Link>
                                <div className='submenu shadow'>
                                    <Link to="/"><Button>Dry Dog Food</Button></Link>
                                    <Link to="/"><Button>Wet Dog Food</Button></Link>
                                    <Link to="/"><Button>Dry Cat Food</Button></Link>
                                    <Link to="/"><Button>Wet Cat Food</Button></Link>
                                    <Link to="/"><Button>Milk</Button></Link>
                                </div>
                            </li>
                            <li className='list-inline-item'>
                                <Link to="/"><Button>Beds</Button></Link>
                                <div className='submenu shadow'>
                                    <Link to="/"><Button>Dry Dog Food</Button></Link>
                                    <Link to="/"><Button>Wet Dog Food</Button></Link>
                                    <Link to="/"><Button>Dry Cat Food</Button></Link>
                                    <Link to="/"><Button>Wet Cat Food</Button></Link>
                                    <Link to="/"><Button>Milk</Button></Link>
                                </div>
                            </li>
                            <li className='list-inline-item'>
                                <Link to="/"><Button>Essentials</Button></Link>
                                <div className='submenu shadow'>
                                    <Link to="/"><Button>Dry Dog Food</Button></Link>
                                    <Link to="/"><Button>Wet Dog Food</Button></Link>
                                    <Link to="/"><Button>Dry Cat Food</Button></Link>
                                    <Link to="/"><Button>Wet Cat Food</Button></Link>
                                    <Link to="/"><Button>Milk</Button></Link>
                                </div>
                            </li>
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