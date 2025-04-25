import React, { useContext, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa6";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { IoIosSearch } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import Slide from '@mui/material/Slide';
import { MyContext } from "../../App";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const PlaceDropDown = () => {

    const [isOpenModal, setIsOpenModal] = useState(false);
    const [selectedLocId, setSelectedLocId] = useState(null); // Store selected location by ID
    const [locationList, setLocationList] = useState([]);
    const context = useContext(MyContext);

    // Handle the region selection
    const selectedRegion = (id) => {
        setSelectedLocId(id); // Set selected region ID
        setIsOpenModal(false); // Close the modal
    };

    // Shorten the name by extracting the part inside parentheses or return full name
    const shortenRegionName = (name) => {
        const match = name.match(/\(([^)]+)\)/); // Match text inside parentheses
        return match ? match[1] : name; // Return the part inside parentheses or the full name if no parentheses
    };

    useEffect(() => {
        setLocationList(context.locationList); // Set the full location list initially
    }, [context.locationList]);

    // Filter the list based on search input
    const filterList = (e) => {
        const keyword = e.target.value.toLowerCase();
        if (keyword !== "") {
            const list = context.locationList.filter((item) => {
                return item.name.toLowerCase().includes(keyword);
            });
            setLocationList(list);
        } else {
            setLocationList(context.locationList); // Reset list if search is empty
        }
    };

    const handleOpenModal = () => {
        setLocationList(context.locationList); // Reset to full list when reopening modal
        setIsOpenModal(true); // Open the modal
    };

    const handleCloseModal = () => {
        setIsOpenModal(false); // Close the modal without resetting the list
    };

    return (
        <>
            <Button className='placeDrop' onClick={handleOpenModal}>
                <div className='info d-flex flex-column'>
                    <span className='label'>Your Location</span>
                    <span className='name'>
                        {/* Show selected location or default message */}
                        {selectedLocId !== null
                            ? shortenRegionName(context.locationList.find(item => item.id === selectedLocId)?.name)
                            : "Select a Region"}
                    </span>
                </div>
                <span className="ml-auto"><FaAngleDown /></span>
            </Button>

            <Dialog open={isOpenModal} onClose={handleCloseModal} className='locModal' TransitionComponent={Transition}>
                <h4 className='mb-0'>Choose your Delivery Location</h4>
                <p>Enter your region and we will specify the offer for your area</p>
                <Button className='closeB' onClick={handleCloseModal}><MdClose /></Button>

                <div className='headerSearch w-100'>
                    <Button><IoIosSearch /></Button>
                    <input type='text' placeholder='Search your area...' onChange={filterList} />
                </div>

                <ul className='locationList mt-3'>
                    {
                        locationList?.length > 0 && locationList.map((item) => (
                            <li key={item.id}>
                                <Button
                                    onClick={() => selectedRegion(item.id)} // Use id instead of index
                                    className={`${selectedLocId === item.id ? 'active' : ''}`}
                                >
                                    {shortenRegionName(item.name)} {/* Display shortened name */}
                                </Button>
                            </li>
                        ))
                    }
                </ul>
            </Dialog>
        </>
    );
}

export default PlaceDropDown;
