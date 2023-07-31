import Navbar from '../components/Navbar'
import Landing from '../scenes/Landing'
import About from '../scenes/About'
import DotGroup from '../components/DotGroup'
import Services from '../scenes/Services'
import Packages from '../scenes/Packages'
import Contact from '../scenes/Contact'
import Footer from '../components/Footer'

import { useState, useLayoutEffect } from "react";
import { useTranslation } from "react-i18next";
import useMediaQuery from "../hooks/useMediaQuery";

// Restrict value to be between the range [0, value]
const clamp = (number) => Math.max(0, number);

// Check if number is between two values
const isBetween = (number) => {
  let value;
  return value >= Math.floor(number) && value <= Math.ceil(number);
}

const useScrollspy = (ids, offset = 0) => {
  const [activeId, setActiveId] = useState("");

  useLayoutEffect(() => {
    const listener = () => {
      const scroll = window.pageYOffset;

      const position = ids
        .map((id) => {
          const element = document.getElementById(id);

          if (!element) return { id, top: -1, bottom: -1 };

          const rect = element.getBoundingClientRect();
          const top = clamp(rect.top + scroll - offset);
          const bottom = clamp(rect.bottom + scroll - offset);

          return { id, top, bottom };
        })
        .find(({ top, bottom }) => isBetween(scroll, top, bottom));

      setActiveId(position?.id || "");
    };

    listener();

    window.addEventListener("resize", listener);
    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("resize", listener);
      window.removeEventListener("scroll", listener);
    };
  }, [ids, offset]);

  return activeId;
};

const Home = () => {

  const { t, i18n } = useTranslation();

  const [selectedPage, setSelectedPage] = useState('home');
  const isAboutMediumScreens = useMediaQuery("(min-width: 1060px)");

  const ids = ["home", "about", "services", "packages", "contact"];
  const activeId = useScrollspy(ids, 54); // 54 is navigation height

  return (
    <div>
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} font={t("font")} home={t("home")} about={t("about")} packages={t("packages")} services={t("services")} contact={t("contact")} />

      <Landing setSelectedPage={setSelectedPage} companyName={t("companyName")} slogan={t("slogan")} button01={t("button01")} button02={t("button02")} font={t("font")} />

      {/* About */}
      <div className="bg-olive">
        <div className="w-5/6 mx-auto">
          <About setSelectedPage={setSelectedPage} aboutTitle={t("aboutTitle")} aboutContent={t("aboutContent")} button02={t("button02")} button03={t("button03")} font={t("font")} />
        </div>
      </div>

      {/* Nav Floating Dots */}
      <div className="">
        {isAboutMediumScreens && (
          <DotGroup selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        )}
      </div>

      {/* Services */}
      <div className="bg-gradient-to-tr from-coyote to-arylide-yellow">
        <div className="w-5/6 mx-auto">
          <Services services={t("services")}
            serviceTitle01={t("serviceTitle01")} serviceContent01={t("serviceContent01")}
            serviceTitle02={t("serviceTitle02")} serviceContent02={t("serviceContent02")}
            serviceTitle03={t("serviceTitle03")} serviceContent03={t("serviceContent03")}
            serviceTitle04={t("serviceTitle04")} serviceContent04={t("serviceContent04")}
            serviceTitle05={t("serviceTitle05")} serviceContent05={t("serviceContent05")}
            serviceTitle06={t("serviceTitle06")} serviceContent06={t("serviceContent06")}
            serviceTitle07={t("serviceTitle07")} serviceContent07={t("serviceContent07")}
            serviceTitle08={t("serviceTitle08")} serviceContent08={t("serviceContent08")}
            serviceTitle09={t("serviceTitle09")} serviceContent09={t("serviceContent09")}
            serviceTitle10={t("serviceTitle10")} serviceContent10={t("serviceContent10")}
            font={t("font")}
          />
        </div>
      </div>

      {/* Packages */}
      <div className="bg-olive">
        <div className="w-5/6 mx-auto md:h-full">
          <Packages packages={t("packages")} font={t("font")} />
        </div>
      </div>

      <div className="bg-olive md:justify-between md:items-center md:h-full bg-logo bg-no-repeat bg-contain  md:bg-center">
        {/* <img className="absolute w-1/2" src='/logo.png' alt="logo-bg" /> */}
        {/* <div className="absolute bg-logo bg-no-repeat bg-contain bg-center"> */}

        <div className="w-5/6 mx-auto min-h-screen">
          <Contact contact={t("contact")} contactContent={t("contactContent")} or={t("or")} name={t("name")} email={t("email")} phone={t("phone")} selectPackage={t("selectPackage")} submit={t("submit")} whatsapp={t("whatsapp")} location={t("location")} call={t("callMe")} />
        </div>
        {/* </div> */}
      </div>

      <div className="bg-gradient-to-tl from-coyote to-sheen-gold md:justify-between md:items-center">
        <div className="w-5/6 mx-auto">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Home