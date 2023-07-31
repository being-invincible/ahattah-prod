import React from 'react'
import useMediaQuery from "../hooks/useMediaQuery";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';
import SocialMediaIcons from '../components/SocialMediaIcons'
import LineGradient from '../components/LineGradient';
import { useTranslation } from 'react-i18next';

const About = ({ setSelectedPage, aboutTitle, aboutContent, button02, button03, font }) => {

    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const { t, i18n } = useTranslation();

    return (
        <section 
            data-section
            id='about'
            className='md:grid md:grid-cols-2 md:min-h-screen gap-16 py-10 md:py-40'
        >
            {/* Image Section */}
            

                <div className="bg-about-image bg-no-repeat bg-center bg-cover order-2 z-10">
                <img
                    className='sm:hidden block group-hover:scale-110 transition duration-500 ease-in-out z-10 w-full max-w-[450px] md:max-w-[550px]'
                    alt='Library of Scholars' src='about01.jpeg' />
                </div>



            {/* About Section */}
            <div className={`z-30 ${i18n.language === 'Arabic' || 'عربي' ? 'font-reem' : 'font-noto'}`}>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <h2 className='mt-8 md:mt-0 text-2xl font-bold z-10 text-center uppercase text-mettalic-gold'>
                        {aboutTitle}
                    </h2>
                    <p className='mt-5 mb-8 text-md text-center font-semibold'>
                        {aboutContent}
                    </p>
                </motion.div>
                <motion.div class="mt-8 flex flex-wrap md:flex-nowrap gap-4 text-center place-content-center mb-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.75 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <a
                        href="#packages"
                        class="block w-full rounded-lg bg-russian-violet text-mettalic-gold border-2 border-mettalic-gold lg:px-12 md:px-8  py-3 text-sm font-semibold shadow hover:bg-mettalic-gold hover:text-russian-violet hover:border-russian-violet focus:outline-none focus:ring sm:w-auto transition duration-500"
                    >
                        {button03}
                    </a>

                    <a
                        href="#services"
                        class="block w-full rounded-lg bg-mettalic-gold text-russian-violet border-2 border-russian-violet lg:px-12 md:px-8 py-3 text-sm font-semibold shadow hover:bg-russian-violet hover:text-mettalic-gold hover:border-mettalic-gold focus:outline-none focus:ring sm:w-auto transition duration-500"
                    >
                        {button02}
                    </a>
                </motion.div>

                <motion.div className=""
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <SocialMediaIcons align="place-content-center" />
                </motion.div>
            </div>
        </section>
    )
}

export default About