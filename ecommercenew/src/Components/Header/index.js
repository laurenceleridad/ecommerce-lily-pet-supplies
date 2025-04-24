
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/lilylogo.png';
import PlaceDropDown from '../PlaceDropDown';

import { Button } from '@mui/material';
import { AiOutlineUser } from "react-icons/ai";
import { IoBagHandleOutline } from "react-icons/io5";
import SearchBox from './SearchBox';
import Navigation from './Navigation';

const Header =()=>{
    return(
        <>
            <div className="headerFill">
                <div className="top-strip bg-green">
                    <div className="container">
                        <p className="mb-0 mt-0 text-center">Ang pogi ng gumagawa nito or kahit anong gusto mong lagay pwede dito</p>
                    </div>
                </div>

                <header className="header">
                    <div className="container">
                        <div className="row">
                            <div className="logoFill d-flex align-items-center col-sm-2">
                                <Link to={'/'}><img src={Logo} alt='Logo' /></Link>
                            </div>

                            <div className='col-sm-10 d-flex align-items-center part2'>
                                <PlaceDropDown />
                                <SearchBox />
                                
            
                            <div className='d-flex align-items-center part3 ml-auto'>    
                                <Button className='circle mr-3'><AiOutlineUser /></Button>
                                <div className='ml-auto cartTotal d-flex align-items-center'>
                                    <span className='price'>P60.99</span>
                                    <div className='position-relative ml-2'>
                                    <Button className='circle'><IoBagHandleOutline /></Button>
                                    <span className='count d-flex align-items-center justify-content-center'>1</span>
                                    </div>
                                </div>
                            </div>

                            </div>
                        </div>
                    </div>
                </header>

                <Navigation />
                
            </div>
        </>
    )
}

export default Header;