import { useNavigate } from "react-router-dom";

const Estate = ({estate}) => {
    const { id, area, description, image, estate_title, location, segment_name, status } = estate;
    const navigate = useNavigate();
    const handleDetails = (estate) => {
        navigate(`/estate/${id}`, { state: estate });
    }
    return (
        <div onClick={() => handleDetails(estate)} className="card bg-base-100 border">
            <figure className="px-10 pt-10">
                <img src={image} alt="x" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <div className="flex text-red-400">
                    <div className="badge badge-outline">{status}</div>
                </div>
                <h2 className="card-title">{estate_title}</h2>
                <p className="font-medium"> {location}</p>
                <hr />
                <div className="card-actions font-semibold">
                    <p>{segment_name}</p>
                    <div className="flex items-center gap-1">
                        <p>{id}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Estate;