import React from 'react';

const Provider = ({children}) => {
    return (
        <div className=' lg:max-w-7xl  mx-auto'>
            {children}
        </div>
    );
}

export default Provider;
