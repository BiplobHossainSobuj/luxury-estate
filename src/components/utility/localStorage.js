import { toast } from "react-toastify";


const getFavouriteEstates =()=>{
    const storedEstate = localStorage.getItem('estates');
    if (storedEstate) {
        return JSON.parse(storedEstate);
    }else{
        return [];
    }
}

const savedFavouriteEstates = estateId=>{
   
    const storedEstates = getFavouriteEstates();
    const exist = storedEstates.find(id=>id===estateId);
    
    if (!exist) {
        storedEstates.push(estateId);
        localStorage.setItem('estates',JSON.stringify(storedEstates))
        toast.success('Your estate is added');
    }else{
        toast.warning('You already add this estate');
    }
}





export {getFavouriteEstates ,savedFavouriteEstates}