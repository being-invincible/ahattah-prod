import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const DotGroup = ({ selectedPage, setSelectedPage }) => {

    const selectedStyles = `relative bg-mettalic-gold before:absolute before:w-6 before:h-6 
        before:rounded-full before:border-2 before:border-mettalic-gold before:left-[-50%] before:top-[-50%]`;

  return (
    <div className='flex flex-col gap-6 fixed top-[50%] right-7 transition delay-1000'>
        <AnchorLink className={`${selectedPage === 'home' ? selectedStyles : "bg-russian-violet"}
            w-3 h-3 rounded-full transition-all`}
            href={`#home`}
            onClick={() => setSelectedPage('home')}
        />
        <AnchorLink className={`${selectedPage === 'about' ? selectedStyles : "bg-russian-violet"}
            w-3 h-3 rounded-full transition-all`}
            href={`#about`}
            onClick={() => setSelectedPage('about')}
        />
        <AnchorLink className={`${selectedPage === 'services' ? selectedStyles : "bg-russian-violet"}
            w-3 h-3 rounded-full transition-all`}
            href={`#services`}
            onClick={() => setSelectedPage('services')}
        />
        <AnchorLink className={`${selectedPage === 'packages' ? selectedStyles : "bg-russian-violet"}
            w-3 h-3 rounded-full transition-all`}
            href={`#packages`}
            onClick={() => setSelectedPage('packages')}
        />
        <AnchorLink className={`${selectedPage === 'contact' ? selectedStyles : "bg-russian-violet"}
            w-3 h-3 rounded-full transition-all`}
            href={`#contact`}
            onClick={() => setSelectedPage('contact')}
        />
    </div>
  )
}

export default DotGroup;