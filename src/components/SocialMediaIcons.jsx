import React from 'react';
import { SiInstagram, SiTwitter, SiLinkedin } from "react-icons/si";

const SocialMediaIcons = ({align}) => {
  return (
    <div className={`flex place-content-center md:justify-center gap-7`} >
        <a
        className='hover:bg-mettalic-gold rounded transition duration-500 p-1'
        href='www.instagram.com'
        target="_blank"
        rel='noreferrer'
        >
            <SiInstagram size={20} fill='#D1AB29' className='hover:fill-russian-violet' />
        </a>
        <a 
        className='hover:bg-mettalic-gold rounded transition duration-500 p-1'
        href='https://twitter.com/AHATTAHLAW'
        target="_blank"
        rel='noreferrer'
        >
            <SiTwitter size={20} fill='#D1AB29' className='hover:fill-russian-violet' />
        </a>
        <a 
        className='hover:bg-mettalic-gold rounded transition duration-500 p-1'
        href='www.linkedin.com'
        target="_blank"
        rel='noreferrer'
        >
            <SiLinkedin size={20} fill='#D1AB29' className='hover:fill-russian-violet' />
        </a>
    </div>
  )
}

export default SocialMediaIcons