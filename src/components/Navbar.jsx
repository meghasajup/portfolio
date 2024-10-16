import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className='mb-20 flex items-center justify-between py-6'>
            <div className='flex flex-shrink-0 items-center'>
                <a href='#' className='mx-3 text-2xl font-bold text-white'>Megha</a>
            </div>

            <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
                <a href="https://www.linkedin.com/in/megha-abhin-73b25132b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedinIn /></a>
                <a href="https://github.com/meghasajup"><FaGithub /></a>
                <a href="https://www.instagram.com/_megh4?igsh=MXRmY2FpaWdvM2t2Nw=="><FaInstagram /></a>
                <a href="https://x.com/_megha4"><FaSquareXTwitter /></a>
            </div>
        </nav>
    )
}

export default Navbar