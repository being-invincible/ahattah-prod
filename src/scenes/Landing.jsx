import React from 'react';
import useMediaQuery from "../hooks/useMediaQuery";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';


const Landing = ({setselectedPage, companyName, slogan, button01, button02}) => {

    const { t, i18n } = useTranslation();

    const isAboveMediumScreens = useMediaQuery("(min-width: 1060p)");

    return (

        <section data-section id='home'
            class="min-h-screen px-10 bg-hero-image bg-cover bg-center bg-no-repeat backdrop-saturate-150 grid items-center"
            >
              
            {/* <div
                class="absolute bg-black/10 inset-0 filter"
            ></div> */}

                <div class={`relative text-center sm:text-left pt-[100px] lg:pt-[300px] justify-center items-center grid grid-flow-row`}>
                <div class="w-auto lg:w-auto bg-russian-violet/75 p-4 rounded-lg">
                <motion.div
                    class="text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.4 }}
                    variants={{
                        hidden: {opacity:0, x:-50},
                        visible: {opacity:1, x:0}
                    }}
                >
                    
                    <h1 class={`text-[1.7rem] ${i18n.language === 'Arabic' || 'عربي' ?  'font-reem font-semibold': 'font-noto font-black'} md:text-4xl text-mettalic-gold`}>
                        {companyName}
                        
                    </h1>
                    
                    
                    
                </motion.div>
                </div>
                <div class="mt-4 w-auto lg:w-auto bg-mettalic-gold/75 p-2 rounded-lg">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                    variants={{
                        hidden: {opacity:0, x:-50},
                        visible: {opacity:1, x:0}
                    }}
                >

                    <p class={`font-semibold  ${i18n.language === 'Arabic' || 'عربي' ?  'font-reem': 'font-noto'} text-center text-russian-violet text-xl sm:text-xl sm:leading-relaxed`}>
                    {slogan}
                    </p>
                </motion.div>
                </div>

                <motion.div class={`mt-8 flex flex-wrap gap-4 text-center place-content-center  ${i18n.language === 'Arabic' || 'عربي' ?  'font-reem': 'font-noto'}`}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.85 }}
                    variants={{
                        hidden: {opacity:0, x:-50},
                        visible: {opacity:1, x:0}
                    }}
                >
                    <a
                    href="https://wa.me/966508188743"
                    class="block w-full rounded-lg bg-russian-violet text-mettalic-gold border-2 border-mettalic-gold px-8 py-3 text-sm font-semibold  shadow hover:bg-mettalic-gold hover:text-russian-violet hover:border-russian-violet focus:outline-none focus:ring sm:w-auto transition duration-500 motion-safe:animate-bounce"
                    >
                    {button01}
                    </a>

                    <a
                    href="#services"
                    class="block w-full rounded-lg bg-mettalic-gold text-russian-violet border-2 border-russian-violet px-8 py-3 text-sm font-semibold shadow focus:outline-none focus:ring sm:w-auto hover:bg-russian-violet hover:text-mettalic-gold hover:border-mettalic-gold transition duration-500"
                    >
                    {button02}
                    </a>
                </motion.div>
                </div>
            {/* </div> */}
        </section>

    )
}

export default Landing