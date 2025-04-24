import React from "react";
import { FaAngleDown } from "react-icons/fa6";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { IoIosSearch } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });


const PlaceDropDown=()=>{

    const [isOpenModal, setisOpenModal] = useState(false);

    return(
        <>
        <Button className='placeDrop' onClick={()=>setisOpenModal(true)}>
            <div className='info d-flex flex-column'>
                <span className='label'>Your Location</span>
                 <span className='name'>Cavite</span>
            </div>
            <span className="ml-auto" ><FaAngleDown /></span>
        </Button>

        <Dialog open={isOpenModal} onClose={()=>setisOpenModal(false)} className='locModal'  TransitionComponent={Transition}>
            <h4 className='mb-0'>Choose your Delivery Location</h4>
            <p>Enter your address and we will specify the offer for you area</p>
            <Button className='closeB' onClick={()=>setisOpenModal(false)}><MdClose/></Button>

            <div className='headerSearch w-100'>
                <Button><IoIosSearch /></Button>
                <input type='text' placeholder='Search your area...'/>
            </div>

            <ul className='locationList mt-3'>
                <li><Button onClick={()=>setisOpenModal(false)}>Cavite</Button></li>
                <li><Button onClick={()=>setisOpenModal(false)}>Pasig</Button></li>
                <li><Button onClick={()=>setisOpenModal(false)}>Cainta</Button></li>
                <li><Button onClick={()=>setisOpenModal(false)}>Cavite</Button></li>
                <li><Button onClick={()=>setisOpenModal(false)}>Pasig</Button></li>
                <li><Button onClick={()=>setisOpenModal(false)}>Cainta</Button></li>
                <li><Button onClick={()=>setisOpenModal(false)}>Cavite</Button></li>
                <li><Button onClick={()=>setisOpenModal(false)}>Pasig</Button></li>
                <li><Button onClick={()=>setisOpenModal(false)}>Cainta</Button></li>
                <li><Button onClick={()=>setisOpenModal(false)}>Cavite</Button></li>
                <li><Button onClick={()=>setisOpenModal(false)}>Pasig</Button></li>
                <li><Button onClick={()=>setisOpenModal(false)}>Cainta</Button></li>
                <li><Button onClick={()=>setisOpenModal(false)}>Cavite</Button></li>
                <li><Button onClick={()=>setisOpenModal(false)}>Pasig</Button></li>
                <li><Button onClick={()=>setisOpenModal(false)}>Cainta</Button></li>
                <li><Button onClick={()=>setisOpenModal(false)}>Cavite</Button></li>
                <li><Button onClick={()=>setisOpenModal(false)}>Pasig</Button></li>
                <li><Button onClick={()=>setisOpenModal(false)}>Cainta</Button></li>
                <li><Button onClick={()=>setisOpenModal(false)}>Cavite</Button></li>
                <li><Button onClick={()=>setisOpenModal(false)}>Pasig</Button></li>
                <li><Button onClick={()=>setisOpenModal(false)}>Cainta</Button></li>
                <li><Button onClick={()=>setisOpenModal(false)}>Cavite</Button></li>
                <li><Button onClick={()=>setisOpenModal(false)}>Pasig</Button></li>
                <li><Button onClick={()=>setisOpenModal(false)}>Cainta</Button></li>
            </ul>
        </Dialog>

        </>

    )
}

export default PlaceDropDown;