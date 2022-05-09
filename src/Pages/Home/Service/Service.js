import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { _id, title, price, body, description, img } = service;
    const navigate = useNavigate();

    const navigateToServiceDetail = (id) => {
        navigate(`/service/${id}`);
    }
    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h2 className='py-2'>{title}</h2>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <div className='text-center'>
               
                    <button onClick={()=>navigateToServiceDetail(_id)} className='btn btn-primary'>Book: {title} </button>
            
            </div>
        </div>
    
    );
};

export default Service;