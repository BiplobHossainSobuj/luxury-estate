import { useNavigate } from "react-router-dom";
import { FaLocationArrow } from "react-icons/fa";
import { MdOutlineBedroomParent } from "react-icons/md";
import { FaPersonSwimming } from "react-icons/fa6";
const Estate = ({ estate }) => {
    const { id, area, description,price, image,facilities, estate_title, location, segment_name, status } = estate;
    const navigate = useNavigate();
    const handleDetails = (estate) => {
        navigate(`/estate/${id}`, { state: estate });
    }
    return (
        <div className="card card-compact  bg-base-100 shadow-md ">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className=" space-y-2">
                <h2 className="card-title">{estate_title}</h2>
                <h2 className="text-left font-normal">{segment_name}</h2>
                <h2 className="text-left font-normal">{area}</h2>
                <div className="flex underline">
                    <FaLocationArrow />
                    <h3>{location}</h3>
                </div>
                <div className="flex">
                    <div className="flex items-center"><MdOutlineBedroomParent />{facilities[0]}</div>
                    <div className="flex items-center"><FaPersonSwimming />{facilities[1]}</div>
                </div>
                <div className="text-left">
                    <div className="badge badge-primary badge-outline">{status}</div>
                    <div className="badge badge-lg">{price}</div>
                </div>
                <div className="card-actions justify-end">
                    <button onClick={() => handleDetails(estate)} className="btn btn-outline btn-info">View Property</button>
                </div>
            </div>
        </div>
    );
};

export default Estate;