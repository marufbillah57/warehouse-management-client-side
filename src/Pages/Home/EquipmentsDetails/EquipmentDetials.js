import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './EquipmentDetials.css';

const EquipmentDetials = () => {
    const {serviceId} = useParams();
    const [service, setService] = useState({});

    useEffect( () => {
        const url = `http://localhost:5000/equipment/${serviceId}`
        console.log(url);

        fetch(url)
        .then(res=> res.json())
        .then(data=>setService(data))
    }, [])
    
    return (
        <div>
            <h2>You are about to book: {service.title}</h2>
            <h3>Price: {service.price}</h3>
            <img src={service.img} alt="" />
            <p>Detials: {service.details}</p>
            <div className='text-center'>
                <Link to={"/inventory"}>
                    <button className='equipment btn btn-primary'>Proceed checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default EquipmentDetials;