import React from 'react';

const Button = ({children, onClick}) => {

    return (
        <div onClick={onClick} className='text-white font-bold p-3 whitespace-nowrap bg-[#085d8c] text-center rounded-lg w-[150px]' >
            {children}
        </div>
    );
}

export default Button;
