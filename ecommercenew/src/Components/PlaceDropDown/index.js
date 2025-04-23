import { FaAngleDown } from "react-icons/fa6";
import Button from '@mui/material/Button';

const PlaceDropDown=()=>{
    return(
        <>
        <Button className='placeDrop'>
            <div className='info d-flex flex-column'>
                <span className='label'>Your Location</span>
                 <span className='name'>Cavite</span>
            </div>
            <span className="ml-auto" ><FaAngleDown /></span>
        </Button>
        </>
    )
}

export default PlaceDropDown;