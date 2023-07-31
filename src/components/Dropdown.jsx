import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { AiOutlineCaretUp, AiOutlineCaretDown } from 'react-icons/ai'
import Select, {components} from 'react-select'

import ar from '../lng/ar.json'
import en from '../lng/en.json'

const Input = (props) => (
    <components.Input {...props} readOnly={props.selectProps.isReadOnly} />
  );

const MySelect = (props) => {
    const menuIsOpen = props.isReadOnly ? false : props.menuIsOpen;
    return <Select components={{ Input }} {...props} menuIsOpen={menuIsOpen} />;
  };

const Dropdown = ({val, isDisabled}) => {

    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false)

    let pack1 = i18n.language === 'عربي' ? ar.package.package01.id : en.package.package01.id;
    let pack2 = i18n.language === 'عربي' ? ar.package.package02.id : en.package.package02.id;
    let pack3 = i18n.language === 'عربي' ? ar.package.package03.id : en.package.package03.id;

    let packT1 = i18n.language === 'عربي' ? ar.package.package01.title : en.package.package01.title;
    let packT2 = i18n.language === 'عربي' ? ar.package.package02.title : en.package.package02.title;
    let packT3 = i18n.language === 'عربي' ? ar.package.package03.title : en.package.package03.title;

    // let title = [packT1, packT2, packT3]
    // let list = [pack1, pack2, pack3]
    // console.log(list)

    // Language Dropdown
    let options_eng = [ pack1+" - "+packT1, pack2+" - "+packT2, pack3+" - "+packT3];
    let options_arb = [pack1+" - "+ packT1, packT2+" - "+pack2, packT3+" - "+pack3]
    console.log(options_arb)
    const onOptionChangeHandler = (event) => {
        // console.log("User Selected Value - ", event.target.value)
        // i18n.changeLanguage(event.target.value)
        //  = options.indexOf(event.target.value)
    }
    console.log(isDisabled);

    return (
        <div className='relative grid w-full rounded-lg'>
            {/* <button
                onClick={() => setIsOpen((prev) => !prev)}
                className='p-1.5 bg-gray-100 grid grid-flow-col items-center justify-between rounded-lg border-2 border-gray-100 active:border-2 active:border-russian-violet'>
                Dropdown
                {!isOpen ? (
                    <AiOutlineCaretDown className='h-8' />
                ) : (
                    <AiOutlineCaretUp className='h-8' />
                )}
            </button>

            {isOpen && (
                <div className='bg-gray-100 absolute top-12 flex flex-col w-full rounded-lg p-2 transition duration-200'>
                    {list.map((item, i) => (
                        <div className='grid grid-flow-col w-full px-10 hover:bg-russian-violet hover:text-white p-1 cursor-pointer'>
                            <h2>{item}</h2>
                            <h2>{title[i]}</h2>
                        </div>
                    ))}
                </div>
            )} */}

            {i18n.language === 'عربي' ? (
                <select value={options_arb[val]} disabled={true} onChange={onOptionChangeHandler} className={`bg-gray-100 p-2 rounded-md text-sm text-right`} >
                {options_arb.map((option, index) => {
                    return <option className='p-4' key={index} >
                        {option}
                    </option>
                })}
            </select>

            ) : (
                <select value={options_eng[val]} disabled={true} onChange={onOptionChangeHandler} className={`bg-gray-100 p-2 rounded-md text-sm`} >
                {options_eng.map((option, index) => {
                    return <option className='p-4' key={index} >
                        {option}
                    </option>
                })}
            </select>
            )}

        </div>
    )
}

export default Dropdown