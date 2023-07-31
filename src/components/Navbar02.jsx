import { useState, useEffect, useRef } from 'react';
import { useTranslation } from "react-i18next";

import AnchorLink from 'react-anchor-link-smooth-scroll';
import useMediaQuery from '../hooks/useMediaQuery';
import { MdSegment, MdClear } from "react-icons/md";
import i18next from 'i18next';

import { SlGlobe } from "react-icons/sl";
import { Link, useNavigate } from 'react-router-dom';

import { MdArrowBackIos } from 'react-icons/md'


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

const Navbar02 = ({ selectedPage, setSelectedPage, home, about, packages, services, contact }) => {

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

    let navigate = useNavigate();

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
                            <button
                                className="absolute left-10 text-magic-potion hover:text-toddy-gold transition-all flex flex-wrap flex-col items-center font-montserrat text-md font-semibold gap-2"
                                onClick={() => navigate(-1)}
                            >
                                <MdArrowBackIos size={30} className='fill-russian-violet hover:fill-mettalic-gold active:fill-mettalic-gold' />

                            </button>
                            <select value={options[1]} onChange={onOptionChangeHandler} className="bg-mettalic-gold p-2 rounded-md text-sm hover:bg-russian-violet" >
                                {options.map((option, index) => {
                                    return <option className='p-2' key={index} >
                                        {option}
                                    </option>
                                })}
                            </select>

                            <Link to={"/"}><img className='w-20 lg:w-20' src="logo.png" alt="Logo" /></Link>
                        </div>
                    ) :
                        (
                            <div className='py-5 flex items-center justify-between mx-auto w-5/6'>
                                <button
                                    className="absolute left-10 text-magic-potion hover:text-toddy-gold transition-all flex flex-wrap flex-col items-center font-montserrat text-md font-semibold gap-2"
                                    onClick={() => navigate(-1)}
                                >
                                    <MdArrowBackIos size={30} className='fill-russian-violet hover:fill-mettalic-gold active:fill-mettalic-gold' />

                                </button>
                                <Link to={"/"}><img className='w-20 lg:w-20' src="logo.png" alt="Logo" /></Link>


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
                <div className='py-5 flex items-center justify-between mx-auto w-5/6'>
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


                    
                    {/* {!isMenuToggled ? (
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
                    )} */}
                </div>
            )}

            {/* Mobile Menu Popup */}
            {!isAboveSmallScreens && isMenuToggled && (
                <div className={`relative flex items-center justify-center w-full`}>
                    {/* Close Icon */}
                    {/* <div className='flex flex-col pt-5 pb-14 text-2xl font-medium text-russian-violet transition duration-200'> */}
                        {/* <button
                            className="absolute left-11 text-magic-potion hover:text-toddy-gold transition-all flex flex-wrap flex-col font-montserrat text-md font-semibold gap-2"
                            onClick={() => navigate(-1)}
                        >
                            <MdArrowBackIos size={30} className='fill-russian-violet hover:fill-mettalic-gold hover:bg-russian-violet active:fill-mettalic-gold pl-2 border-mettalic-gold border-2 rounded-lg' />

                        </button> */}

                    {/* </div> */}

                    {/* <div className='flex justify-end py-6 pr-10'>
                        <button className='rounded-full bg-mettalic-gold/75 p-2'
                            onClick={() => setIsMenuToggled(!isMenuToggled)}>
                            <MdClear size={30} />
                        </button>
                    </div> */}

                    {/* Menu Items */}
                    {/* <div className='flex flex-col gap-10 ml-[33%] pt-10 text-2xl text-russian-violet'>
                        <AnchorLink className={`${selectedPage === Object.keys({ home })[0] ? "text-mettalic-gold" : ""}
                            hover:text-mettalic-gold transition-all`}
                            href={`#${Object.keys({ home })[0]}`}
                            onClick={() => { setSelectedPage('home'); setIsMenuToggled(!isMenuToggled) }}
                        >
                            {home}
                        </AnchorLink>
                        <AnchorLink className={`${selectedPage === Object.keys({ about })[0] ? "text-mettalic-gold" : ""}
                            hover:text-mettalic-gold transition-all`}
                            href={`#${Object.keys({ about })[0]}`}
                            onClick={() => { setSelectedPage('about'); setIsMenuToggled(!isMenuToggled) }}
                        >
                            {about}
                        </AnchorLink>
                        <AnchorLink className={`${selectedPage === Object.keys({ services })[0] ? "text-mettalic-gold" : ""}
                            hover:text-mettalic-gold transition-all`}
                            href={`#${Object.keys({ services })[0]}`}
                            onClick={() => { setSelectedPage('services'); setIsMenuToggled(!isMenuToggled) }}
                        >
                            {services}
                        </AnchorLink>
                        <AnchorLink className={`${selectedPage === Object.keys({ packages })[0] ? "text-mettalic-gold" : ""}
                            hover:text-mettalic-gold transition-all`}
                            href={`#${Object.keys({ packages })[0]}`}
                            onClick={() => { setSelectedPage('packages'); setIsMenuToggled(!isMenuToggled) }}
                        >
                            {packages}
                        </AnchorLink>
                        <AnchorLink className={`${selectedPage === Object.keys({ contact })[0] ? "text-mettalic-gold" : ""}
                            hover:text-mettalic-gold transition-all`}
                            href={`#${Object.keys({ contact })[0]}`}
                            onClick={() => { setSelectedPage('contact'); setIsMenuToggled(!isMenuToggled) }}
                        >
                            {contact}
                        </AnchorLink>
                    </div> */}
                </div>
            )}

        </nav >
    )
}

export default Navbar02;