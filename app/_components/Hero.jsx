import React from 'react';
import Button from './Button';

const Hero = () => {
    return (
        <div className='lg:flex lg:justify-between  w-full px-[1rem] '>
            <div className='w-full mb-[5rem]'>
           <div className='flex gap-2 items-center py-4'>
           <img src="https://oc.app/assets/spinner.svg" className=' w-[40px] h-[40px]' alt="" />
           <h1 className='text-white text-[36px] font-bold'>OpenChat</h1>
           </div>
                <h1 className='text-white text-[25px] py-4'>Where web3 communities</h1>
                <h1 className='text-[#656669] py-4 text-xl font-normal'>OpenChat is a fully featured chat application runnng end-to-end on the <span className='text-[#085d8c]'>Internet Computer</span> blockchain</h1>
                <Button>Launch app</Button>
            </div>
            <div className=' lg:mr-[2rem] ' >
                <img src="/intro_dark.png" className='h-[600px] border-4 border-white rounded-xl' alt="" />
            </div>
        </div>
    );
}

export default Hero;
