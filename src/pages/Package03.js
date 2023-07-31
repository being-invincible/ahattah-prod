import React from 'react'
import { useTranslation } from 'react-i18next';

// json data
import ar from "../lng/ar.json"
import en from "../lng/en.json"
import Navbar02 from '../components/Navbar02';
import Footer from '../components/Footer';

import { MdCheckCircle } from 'react-icons/md';
import Contact from './Contact';

const Package03 = () => {
  const { t, i18n } = useTranslation();

  const points01 = i18n.language === 'عربي' ? ar['package'].package03.points : en['package'].package03.points;
  const explain01 = i18n.language === 'عربي' ? ar['package'].package03.explain : en['package'].package03.explain;

  return (
    <div>
      <Navbar02 />

      <Contact val={2} />
      <div className="bg-gradient-to-tl from-coyote to-sheen-gold md:justify-between md:items-center">
        <div className="w-5/6 mx-auto">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Package03