import { useState, useEffect, useRef } from 'react';
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import AnchorLink from 'react-anchor-link-smooth-scroll';
import useMediaQuery from '../hooks/useMediaQuery';
import withClickOutside from '../hooks/withClickOutside.js'

import { MdSegment, MdClear } from "react-icons/md";
import i18next from 'i18next';

import { FaHome, FaInfoCircle, FaCartPlus, FaHandsHelping, FaPhoneSquareAlt } from "react-icons/fa"

import { SlGlobe } from "react-icons/sl";
import {GoPackage } from "react-icons/go"


const Link0 = ({ page, selectedPage, setSelectedPage }) => {
    const lowerCasePage = page.toLowerCase();
    return (
        <AnchorLink className={`${selectedPage === lowerCasePage ? "text-mettalic-gold font-bold" : ""}
            hover:text-mettalic-gold transition-all`}
            href={`#${lowerCasePage}`}
            onClick={() => setSelectedPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
    )
}

const Navbarcopy = ({ selectedPage, setSelectedPage, home, about, packages, services, contact}) => {

    const { t, i18n } = useTranslation();

    const [activeSection, setActiveSection] = useState(null);
    const sections = useRef([]);

    const handleScroll = () => {
        const pageYOffset = window.pageYOffset;
        let newActiveSection = null;

        sections.current.forEach((section) => {
            const sectionOffsetTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (pageYOffset >= sectionOffsetTop - 20 && pageYOffset < sectionOffsetTop + sectionHeight) {
                console.log(section.id)
                newActiveSection = section.id;
            }
        });
        console.log(newActiveSection)
        setSelectedPage(newActiveSection)
        setActiveSection(newActiveSection);
    };

    useEffect(() => {
        sections.current = document.querySelectorAll('[data-section]');
        console.log(sections.current)
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const ref = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
          if (!ref.current.contains(event.target)) {
            setIsMenuToggled(false);
          }
        };
        document.addEventListener("mousedown", handleClickOutside);
      }, [ref]);

    const activeStyle = "text-mettalic-gold"

    // Language Dropdown
    const options = ['English', 'عربي'];
    const onOptionChangeHandler = (event) => {
        // console.log("User Selected Value - ", event.target.value)
        i18n.changeLanguage(event.target.value)
    }


    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");

    return (
        <nav className={`z-40 w-full  fixed top-0 bg-gradient-to-tl from-coyote to-sheen-gold ${i18n.language === 'Arabic' || 'عربي' ? 'font-reem' : 'font-noto'}`}>

            {/* Desktop Nav */}
            {isAboveSmallScreens ? (

                <div>

                    {i18n.language === 'عربي' ? (
                        <div className='py-5 flex items-center justify-between mx-auto w-5/6'>
                            <select value={options[1]} onChange={onOptionChangeHandler} className="bg-mettalic-gold p-2 rounded-md text-sm hover:bg-russian-violet" >
                                {options.map((option, index) => {
                                    return <option className='p-2' key={index} >
                                        {option}
                                    </option>
                                })}
                            </select>
                            <div className={`flex justify-between gap-16 text-md text-russian-violet font-semibold flex-row-reverse`}>
                                <AnchorLink className={`${selectedPage === Object.keys({ home })[0] ? "text-mettalic-gold" : ""}
                                                        hover:text-mettalic-gold transition-all`}
                                    href={`#${Object.keys({ home })[0]}`}
                                    onClick={() => setSelectedPage('home')}
                                >
                                    {home}
                                </AnchorLink>
                                <AnchorLink className={`${selectedPage === Object.keys({ about })[0] ? "text-mettalic-gold" : ""}
                                                        hover:text-mettalic-gold transition-all`}
                                    href={`#${Object.keys({ about })[0]}`}
                                    onClick={() => setSelectedPage('about')}
                                >
                                    {about}
                                </AnchorLink>
                                <AnchorLink className={`${selectedPage === Object.keys({ services })[0] ? "text-mettalic-gold" : ""}
                                                        hover:text-mettalic-gold transition-all`}
                                    href={`#${Object.keys({ services })[0]}`}
                                    onClick={() => setSelectedPage('services')}
                                >
                                    {services}
                                </AnchorLink>
                                <AnchorLink className={`${selectedPage === Object.keys({ packages })[0] ? "text-mettalic-gold" : ""}
                                                        hover:text-mettalic-gold transition-all`}
                                    href={`#${Object.keys({ packages })[0]}`}
                                    onClick={() => setSelectedPage('packages')}
                                >
                                    {packages}
                                </AnchorLink>
                                <AnchorLink className={`${selectedPage === Object.keys({ contact })[0] ? "text-mettalic-gold" : ""}
                                                        hover:text-mettalic-gold transition-all`}
                                    href={`#${Object.keys({ contact })[0]}`}
                                    onClick={() => setSelectedPage('contact')}
                                >
                                    {contact}
                                </AnchorLink>
                            </div>
                            <Link to={"/"}><img className='w-20 lg:w-20' src="logo.png" alt="Logo" /></Link>
                        </div>
                    ) :
                        (
                            <div className='py-5 flex items-center justify-between mx-auto w-5/6'>
                                <Link to={"/"}><img className='w-20 lg:w-20' src="logo.png" alt="Logo" /></Link>
                                <div className={`flex justify-between gap-16 text-md text-russian-violet font-semibold`}>
                                    <AnchorLink className={`${selectedPage === Object.keys({ home })[0] ? "text-mettalic-gold" : ""}
                                                        `}

                                        href={`#${Object.keys({ home })[0]}`}
                                        onClick={() => setSelectedPage('home')}
                                    >
                                        {home}
                                    </AnchorLink>
                                    <AnchorLink className={`${selectedPage === Object.keys({ about })[0] ? "text-mettalic-gold" : ""}
                                                        hover:text-mettalic-gold transition-all`}
                                        href={`#${Object.keys({ about })[0]}`}
                                        onClick={() => setSelectedPage('about')}
                                    >
                                        {about}
                                    </AnchorLink>
                                    <AnchorLink className={`${selectedPage === Object.keys({ services })[0] ? "text-mettalic-gold" : ""}
                                                        hover:text-mettalic-gold transition-all`}
                                        href={`#${Object.keys({ services })[0]}`}
                                        onClick={() => setSelectedPage('services')}
                                    >
                                        {services}
                                    </AnchorLink>
                                    <AnchorLink className={`${selectedPage === Object.keys({ packages })[0] ? "text-mettalic-gold" : ""}
                                                        hover:text-mettalic-gold transition-all`}
                                        href={`#${Object.keys({ packages })[0]}`}
                                        onClick={() => setSelectedPage('packages')}
                                    >
                                        {packages}
                                    </AnchorLink>
                                    <AnchorLink className={`${selectedPage === Object.keys({ contact })[0] ? "text-mettalic-gold" : ""}
                                                        hover:text-mettalic-gold transition-all`}
                                        href={`#${Object.keys({ contact })[0]}`}
                                        onClick={() => setSelectedPage('contact')}
                                    >
                                        {contact}
                                    </AnchorLink>
                                </div>

                                <select onChange={onOptionChangeHandler} className="bg-mettalic-gold p-2 rounded-md text-sm hover:bg-russian-violet" >
                                    {options.map((option, index) => {
                                        return <option className='p-2' key={index} >
                                            {option}
                                        </option>
                                    })}
                                </select>
                            </div>
                        )
                    }
                </div>

            ) : (
                <div className={`py-5 flex items-center justify-between mx-auto w-5/6 ${i18n.language === 'عربي' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <Link to={"/"}><img className='w-20 lg:w-20' src="logo.png" alt="Logo" /></Link>

                    {i18n.language === 'عربي' ? (

                        <select value={options[1]} onChange={onOptionChangeHandler} className="bg-mettalic-gold p-2 rounded-md text-sm hover:bg-russian-violet" >
                            {options.map((option, index) => {
                                return <option className='p-2' key={index} >
                                    {option}
                                </option>
                            })}
                        </select>
                    ) : (
                        <select value={options[0]} onChange={onOptionChangeHandler} className="bg-mettalic-gold p-2 rounded-md text-sm hover:bg-russian-violet" >
                            {options.map((option, index) => {
                                return <option className='p-2' key={index} >
                                    {option}
                                </option>
                            })}
                        </select>
                    )}

                    {!isMenuToggled ? (
                        <button className='rounded-full bg-mettalic-gold/75 p-2'
                            onClick={() => setIsMenuToggled(!isMenuToggled)}
                        >
                            <MdSegment size={30} />
                        </button>
                    ) : (
                        <button className='rounded-full bg-mettalic-gold/75 p-2'
                            onClick={() => setIsMenuToggled(!isMenuToggled)}>
                            <MdClear size={30} />
                        </button>
                    )}

                </div>
            )}

            {/* Mobile Menu Popup */}
            {!isAboveSmallScreens && isMenuToggled && (
                <motion.div 
                onClick={() => {setIsMenuToggled(!isMenuToggled)}}
                className={`right-0 bottom-0 flex flex-col items-center justify-center w-full`}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.4 }}
                    variants={{
                        hidden: {opacity:0, y:-50},
                        visible: {opacity:1, y:0}
                    }}
                >
                    {/* Close Icon */}

                    {/* Menu Items */}
                    <div ref={ref} className='flex flex-col gap-10 py-8 text-2xl font-medium text-russian-violet transition duration-200 items-center'>
                        <AnchorLink className={`${selectedPage === Object.keys({ home })[0] ? "text-mettalic-gold border-b-2 border-mettalic-gold" : ""}
                            hover:text-mettalic-gold transition-colors border-0 hover:border-b-2 hover:border-mettalic-gold flex flex-wrap flex-col items-center`}
                            href={`#${Object.keys({ home })[0]}`}
                            onClick={() => { setSelectedPage('home'); setIsMenuToggled(!isMenuToggled) }}
                        >
                            <FaHome />
                            {home}
                        </AnchorLink>
                        <AnchorLink className={`${selectedPage === Object.keys({ about })[0] ? "text-mettalic-gold border-b-2 border-mettalic-gold" : ""}
                            hover:text-mettalic-gold transition-colors border-0 hover:border-b-2 hover:border-mettalic-gold flex flex-wrap flex-col items-center`}
                            href={`#${Object.keys({ about })[0]}`}
                            onClick={() => { setSelectedPage('about'); setIsMenuToggled(!isMenuToggled) }}
                        >
                            <FaInfoCircle />
                            {about}
                        </AnchorLink>
                        <AnchorLink className={`${selectedPage === Object.keys({ services })[0] ? "text-mettalic-gold border-b-2 border-mettalic-gold" : ""}
                            hover:text-mettalic-gold transition-colors border-0 hover:border-b-2 hover:border-mettalic-gold flex flex-wrap flex-col items-center`}
                            href={`#${Object.keys({ services })[0]}`}
                            onClick={() => { setSelectedPage('services'); setIsMenuToggled(!isMenuToggled) }}
                        >
                            <FaHandsHelping />
                            {services}
                        </AnchorLink>
                        <AnchorLink className={`${selectedPage === Object.keys({ packages })[0] ? "text-mettalic-gold border-b-2 border-mettalic-gold" : ""}
                            hover:text-mettalic-gold transition-colors border-0 hover:border-b-2 hover:border-mettalic-gold flex flex-wrap flex-col items-center`}
                            href={`#${Object.keys({ packages })[0]}`}
                            onClick={() => { setSelectedPage('packages'); setIsMenuToggled(!isMenuToggled) }}
                        >
                            <GoPackage />
                            {packages}
                        </AnchorLink>
                        <AnchorLink className={`${selectedPage === Object.keys({ contact })[0] ? "text-mettalic-gold border-b-2 border-mettalic-gold" : ""}
                            hover:text-mettalic-gold transition-colors border-0 hover:border-b-2 hover:border-mettalic-gold flex flex-wrap flex-col items-center`}
                            href={`#${Object.keys({ contact })[0]}`}
                            onClick={() => { setSelectedPage('contact'); setIsMenuToggled(!isMenuToggled) }}
                        >
                            <FaPhoneSquareAlt />
                            {contact}
                        </AnchorLink>
                    </div>
                    {/* <div className='w-full h-60 bg-opacity-0 bg-black'
                        onClick={() => {setIsMenuToggled(!isMenuToggled)}}
                    > 
                    
                    </div>*/}
                </motion.div>
            )}

        </nav >
    )
}

export default Navbarcopy;