import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';
import { AiOutlineFullscreen } from "react-icons/ai";
import { IoIosHeartEmpty } from "react-icons/io";

const ProductItem = ()=>{
    return(
        <div className="item productItem">
            <div className="imgFill">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm7tIsNAI-avzmGlypHBr7MSIw-ltXDD94QA&s" className="w-100" alt=''/>

                <span className="badge badge-primary">20%</span>
                <div className="actions">
                    <Button><AiOutlineFullscreen /></Button>
                    <Button><IoIosHeartEmpty style={{fontSize:'20px'}} /></Button>
                </div>
            </div>
            

                <div className="info">
                <h4>Special Dog Food Adult Lamb & Rice</h4>
                <span className="text-success d-block">In Stock</span>
                <Rating className='mt-2 mb-2' name="read-only" value={5} readOnly size="small" precision={0.5} />

                <div className="d-flex">
                    <span className="oldPrice">P 1299.00</span>
                    <span className="netPrice text-danger ml-2">P 1040.00</span>
                </div>
                </div>
        </div>
    )
}


export default ProductItem;