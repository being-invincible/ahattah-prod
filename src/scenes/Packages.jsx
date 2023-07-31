import React from 'react'
import { Link,Route, BrowserRouter as Router } from 'react-router-dom';
import useMediaQuery from "../hooks/useMediaQuery";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';
import LineGradient from '../components/LineGradient';
import { useTranslation } from 'react-i18next';
import Package from '../pages/Package01';

// json data
import ar from "../lng/ar.json"
import en from "../lng/en.json"
import { MdCheckCircle } from 'react-icons/md';

const serviceVariant = {
    hidden: { opacity:0},
    visible: { opacity:1},
};

const Packag = ({ title, price, desp, currency, points, link }) => {
    const { t, i18n } = useTranslation();

    return (
        <div className={`w-full group h-88 p-8 mb-5 bg-gradient-to-tr from-coyote to-arylide-yellow rounded-lg hover:drop-shadow-lg hover:border-russian-violet hover:border-2 hover:bg-gradient-to-tr hover:to-sheen-gold hover:from-ecru hover:lg:scale-110 transition-all ${i18n.language === 'Arabic' || 'عربي' ? 'font-reem' : 'font-noto'}`}>
        
        {i18n.language === 'عربي' ? (
            <div variants={serviceVariant} className={`text-right group-hover:text-russian-violet grid grid-cols-1 h-full place-content-between`}>
            <div>
            <p className='font-normal text-lg mb-0'>{desp}</p>
            <div className='justify-center gap-1 grid grid-flow-col items-baseline w-full text-center'>
                <p className=' py-5 order-2 text-lg'>{currency}</p>
                <h1 className='py-5 font-bold text-5xl'>{price}</h1>
            </div>

            <ul className='flex flex-col text-md gap-y-2'>
            {points.map((s, i) =>
                <li className='grid grid-cols-6 items-baseline align-text-top'>
                    <h2 className='col-span-5'>{points[i]}</h2>
                    <div className='col-span-1 flex flex-row-reverse w-full'>
                    <MdCheckCircle/>
                    </div>
                    
                </li>
            )}
            </ul>
            </div>
            <div class="mt-8 sm:mt-5 items-stretch">
                <Link to={link}>
                    <button
                    class="self-end block w-full rounded-lg bg-transparent text-russian-violet border-2 border-russian-violet px-8 py-3 text-sm text-center font-semibold  shadow hover:bg-russian-violet hover:text-mettalic-gold hover:border-mettalic-gold focus:outline-none focus:ring transition duration-500"
                    >
                    {t("button04")}
                    </button>
                </Link>
              </div>
            
        </div>

        ) : (
            <motion.div variants={serviceVariant} className={`text-left grid grid-cols-1 gap-4 md:gap-0 h-full w-auto place-content-between ${i18n.language === 'Arabic' || 'عربي' ?  'font-reem': 'font-noto'}`}>
            <div>
            <p className='font-normal text-md group-hover:text-russian-violet'>{desp}</p>
            <div className='justify-center gap-1 grid grid-flow-col my-5 w-full text-center items-baseline group-hover:text-russian-violet'>
                <p className='order-2 text-lg'>{currency}</p>
                <h1 className='font-bold text-5xl'>{price}</h1>
            </div>

            <ul className='flex flex-col text-md gap-y-1'>
            {points.map((s, i) =>
                <li className='grid grid-cols-6 items-baseline align-text-top group-hover:text-russian-violet'>
                    <div className='col-span-1 flex flex-row w-full'>
                    <MdCheckCircle/>
                    </div>
                    <h2 className='col-span-5'>{points[i]}</h2>
                </li>
            )}
            </ul>
            </div>
            
            <div class="w-full mt-5 items-stretch">
            <Link to={link}>
                <button
                  class="self-end block w-full rounded-lg bg-transparent text-russian-violet border-2 border-russian-violet px-8 py-3 text-sm text-center font-semibold  shadow hover:bg-russian-violet hover:text-mettalic-gold hover:border-mettalic-gold focus:outline-none focus:ring transition duration-500"
                >
                  {t("button04")}
                </button>
            </Link>
            </div>
            
        </motion.div>
        )}
        
        </div>
    )
}

const Packages = ({packages}) => {

    const { t, i18n } = useTranslation();

    const points01 = i18n.language === 'عربي' ? ar['package'].package01.points : en['package'].package01.points;
    const points02 = i18n.language === 'عربي' ? ar['package'].package02.points : en['package'].package02.points;
    const points03 = i18n.language === 'عربي' ? ar['package'].package03.points : en['package'].package03.points;

  return (
    <section data-section id="packages" className={`pt-10 pb-10 ${i18n.language === 'Arabic' || 'عربي' ?  'font-reem': 'font-noto'}`}>
        {/* Header */}
        <div className='basis-4/5 mt-16 mb:10 md:mt-24'>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.2 }}
                variants={{
                    hidden: {opacity:0, x:-50},
                    visible: {opacity:1, x: 0}
                }}
            >
                {i18n.language === 'عربي' ? (
                     <div>
                     <h2 className='text-mettalic-gold text-2xl font-bold font-montserrat z-10 text-center md:text-end uppercase'>
                         {packages}
                     </h2>
                     </div>
                ) : (
                    <div>
                    <h2 className='text-mettalic-gold text-2xl font-bold font-montserrat z-10 text-center md:text-start uppercase'>
                        {packages}
                    </h2>
                    {/* <p className='mt-5 mb-8 text-md text-center md:text-start font-montserrat font-medium'>
                        Explore our packages which is carefully build upon the cases.
                    </p> */}
                    </div>
                )}
               
            </motion.div>
        </div>
        {/* Packages */}
        {i18n.language === 'عربي' ? (
        <div className='flex flex-col-reverse md:grid md:grid-cols-3 md:justify-between mt-10 gap-8'>
            <Packag title = {(t(`${"package"}.package03.id`))} currency = {t(`${"package"}.package03.currency`)} price = {t(`${"package"}.package03.price`)} desp = {t(`${"package"}.package03.title`)} points={points03} link="/package03" />


            <Packag title = {(t(`${"package"}.package02.id`))} currency = {t(`${"package"}.package02.currency`)} price = {t(`${"package"}.package02.price`)} desp = {t(`${"package"}.package02.title`)} points={points02} link="/package02" /> 

            <Packag title = {(t(`${"package"}.package01.id`))} currency = {t(`${"package"}.package01.currency`)} price = {t(`${"package"}.package01.price`)} desp = {t(`${"package"}.package01.title`)} points={points01} link="/package01" />
                
        </div>
        ) : (
            <div className='md:grid md:grid-cols-3 md:justify-between mt-10 gap-8'>
            
            <Packag title = {(t(`${"package"}.package01.id`))} currency = {t(`${"package"}.package01.currency`)} price = {t(`${"package"}.package01.price`)} desp = {t(`${"package"}.package01.title`)} points={points01} link="/package01" />
            
            <Packag title = {(t(`${"package"}.package02.id`))} currency = {t(`${"package"}.package02.currency`)} price = {t(`${"package"}.package02.price`)} desp = {t(`${"package"}.package02.title`)} points={points02} link="/package02" />
            <Packag title = {(t(`${"package"}.package03.id`))} currency = {t(`${"package"}.package03.currency`)} price = {t(`${"package"}.package03.price`)} desp = {t(`${"package"}.package03.title`)} points={points03} link="/package03" />
            </div>
        )}
    </section>
  )
}

export default Packages