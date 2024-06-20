import React from 'react';

const Footer = ({details}) => {
    return (
        <div>
            <div className='py-2'>
                <img src={details.image} alt="" />
            </div>
            <h1 className='text-white font-bold text-2xl py-2'>{details.name}</h1>
            <p className='text-white font-normal text-sm py-2'>{details.description}</p> 
        </div>
    );
}

export default Footer;
