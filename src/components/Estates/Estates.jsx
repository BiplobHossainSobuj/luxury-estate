import  { useEffect, useState } from 'react';
import Estate from '../Estate/Estate';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Estates = () => {
    AOS.init();
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
            <h1 className='text-center text-5xl font-bold my-10 animate__animated animate__bounce animate__delay-2s'>Estates</h1>
            <div data-aos="fade-up "data-aos-delay="200"className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    estates.map(estate=><Estate estate={estate} key={estate.id}></Estate>)
                }
            </div>
        </div>
    );
};

export default Estates;