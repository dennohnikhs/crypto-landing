import Link from 'next/link';
import React from 'react';
import Button from './Button';

const Navbar = () => {
    return (
        <div className='w-full shadow-xl sticky z-50 top-0 lg:mb-[10rem] px-[1rem] bg-[#1b1c21]'>
            <div className='flex justify-between items-center  py-4 lg:max-w-7xl lg:mx-auto'>
                <div className='flex gap-2 py-2'>
                    <img src="https://oc.app/assets/spinner.svg" className=' w-[25px] h-[25px]' alt="" />
                    <h1 className='text-white text-2xl font-bold'>OpenChat</h1>
                </div>
                <div className='lg:block hidden'>
                    <ul className='flex justify-between items-center gap-3'>
                        <Link href="#" className='text-white font-bold text-lg'>
                            <li>Shop</li>
                        </Link>
                        <Link href="#" className='text-white font-bold text-lg'>
                            <li>Features</li>
                        </Link>
                        <Link href="#" className='text-white font-bold text-lg'>
                            <li>Roadmap</li>
                        </Link>
                        <Link href="#" className='text-white font-bold text-lg'>
                            <li>Whitepaper</li>
                        </Link>
                        <Link href="#" className='text-white font-bold text-lg'>
                            <li>Architecture</li>
                        </Link>
                        <Link href="#" className='text-white font-bold text-lg'>
                            <li>Blog</li>
                        </Link>
                        <Link href="#" className='text-white font-bold text-lg'>
                            <li>Blog</li>
                        </Link>
                        <Link href="#" className='text-white font-bold text-lg'>
                            <li>FAQs</li>
                        </Link>

                        <Button>Launch app</Button>


                    </ul>
                </div>
                <div className='lg:hidden '>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="main-grid-item-icon" fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                        <line x1="3" x2="21" y1="12" y2="12" />
                        <line x1="3" x2="21" y1="6" y2="6" />
                        <line x1="3" x2="21" y1="18" y2="18" />
                    </svg>

                </div>
            </div>
        </div>
    );
}

export default Navbar;
