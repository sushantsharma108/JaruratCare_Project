import React from 'react'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
const Header = () => {
    useGSAP(
        () => {
            gsap.from('h1,p', {
                y: -35,
                duration: 1,
                stagger: 0.8,
            });
        },
    );
    return (
        <>
            <h1 className='text-center text-6xl font-bold text-slate-100'>Jarurat Care Foundation</h1>
            <p className='text-center text-2xl mt-10'>A digital healthcare platform</p>
            <p className='text-center mt-10 text-6xl lg:text-5xl md:text-3xl underline'>Counter App</p>
        </>
    )
}

export default Header