import  { useEffect, useState } from 'react';
import Estate from '../Estate/Estate';

const Estates = () => {
    const [estates,setEstates] = useState([]);
    useEffect(()=>{
        async function fetchEstatesData(){
            const res = await fetch('data.json');
            const data = await res.json();
            setEstates(data);
        }
        fetchEstatesData();
    },[])
    return (
        <div>
            <h1 className='text-center text-5xl font-bold my-10'>Estates</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    estates.map(estate=><Estate estate={estate} key={estate.id}></Estate>)
                }
            </div>
        </div>
    );
};

export default Estates;