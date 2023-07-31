import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import Navbar02 from '../components/Navbar02';
import Footer from '../components/Footer';

import Dropdown from '../components/Dropdown';
import { useNavigate } from 'react-router-dom';
import { MdArrowBackIos } from 'react-icons/md'


import { Fragment, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { BsChevronExpand } from 'react-icons/bs'

import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

import ar from '../lng/ar.json'
import en from '../lng/en.json'


const Selector = ({selected, setSelected, people, val }) => {
    const { t, i18n } = useTranslation();

    // useeffect for dynamic changing language tranlation
    useEffect(() => {
        if (i18n.language === 'عربي') {
          setSelected(people[val])
        }else{
            setSelected(people[val])
            
        }
        
      }, []);
      

    return (
        <div className={`w-full h-full text-md ${i18n.language === 'Arabic' || 'عربي' ? 'font-reem' : 'font-noto'} `}>
                                    <Listbox disabled={true} value={selected} onChange={setSelected}>
                                        <div className="relative">
                                            <Listbox.Button className={`relative w-full cursor-default rounded bg-zinc-200 py-2 pl-5 pr-5 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 text-sm ${i18n.language === 'عربي' ? 'text-right' : 'text-left'} cursor-not-allowed`}>
                                                <span className={`pointer-events-none absolute inset-y-0 ${i18n.language === 'عربي' ? 'left-0' : 'right-0'} flex items-center p-2`}>
                                                    <ChevronUpDownIcon
                                                        className="h-5 w-5 text-gray-400"
                                                        aria-hidden="true"
                                                    />
                                                </span>
                                                <span className={`block truncate text-[1rem]`}>{selected.name}</span>

                                                {/* <span className={`block truncate ${i18n.language === 'عربي' ? 'hidden' : 'block'}`}>{selected.name}</span> */}
                                            </Listbox.Button>
                                            <Transition
                                                as={Fragment}
                                                leave="transition ease-in duration-100"
                                                leaveFrom="opacity-100"
                                                leaveTo="opacity-0"
                                            >
                                                <Listbox.Options className={`absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-sm ${i18n.language === 'عربي' ? 'text-right' : 'text-left'}`}>
                                                    {people.map((person, personIdx) => (
                                                        <Listbox.Option
                                                            key={personIdx}
                                                            className={({ active }) =>
                                                                `relative cursor-default select-none py-2 pl-5 pr-4 ${active ? 'bg-mettalic-gold text-russian-violet' : 'text-gray-900'
                                                                }`
                                                            }
                                                            value={person}
                                                        >
                                                            {({ selected }) => (
                                                                <>
                                                                    <span
                                                                        className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                                            }`}
                                                                    >
                                                                        {person.name}
                                                                    </span>
                                                                    {selected ? (
                                                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                        </span>
                                                                    ) : null}
                                                                </>
                                                            )}
                                                        </Listbox.Option>
                                                    ))}
                                                </Listbox.Options>
                                            </Transition>
                                        </div>
                                    </Listbox>
                                </div>
    )
}

const Contact = ({ val, isDisabled }) => {

    let navigate = useNavigate();

    const { t, i18n } = useTranslation();

    // Data
    let def = i18n.language === 'عربي' ? "اختار الباقة" : "Select Package";
    let packT1 = i18n.language === 'عربي' ? ar.package.package01.title : en.package.package01.title;
    let packT2 = i18n.language === 'عربي' ? ar.package.package02.title : en.package.package02.title;
    let packT3 = i18n.language === 'عربي' ? ar.package.package03.title : en.package.package03.title;
    let packT4 = i18n.language === 'عربي' ? ar.package.package04.title : en.package.package04.title;

    let people = [{ name: packT1 }, { name: packT2 }, { name: packT3 }, { name: packT4 }]
    let options = [packT1, packT2, packT3, packT4]
    let def_arr = { name: def }

    const [selected, setSelected] = useState(people[val])

    const {
        register,
        trigger,
        formState: { errors }
    } = useForm();

    const onSubmit = async (e) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }
    }


    return (
        <>

            <div id='contact' className={`min-h-screen grid grid-cols-1 lg:grid-cols-2 py-[50px] gap-10 bg-olive px-10 pt-28 md:px-[100px] md:pt-[125px] md:pb-[50px] ${i18n.language === 'Arabic' || 'عربي' ? 'font-reem' : 'font-noto'}`}>

                <div className={`${i18n.language === 'Arabic' || 'عربي' ? 'md:order-2' : 'order-1'}`}>

                    <button
                        className="md:hidden mb-5 top-28 left-10 text-magic-potion hover:text-toddy-gold transition-all flex flex-wrap flex-col font-montserrat text-md font-semibold gap-2"
                        onClick={() => navigate(-1)}
                    >
                        <MdArrowBackIos size={30} className='fill-mettalic-gold bg-russian-violet hover:fill-mettalic-gold hover:bg-russian-violet active:fill-mettalic-gold pl-2 border-mettalic-gold border-2 rounded-lg' />

                    </button>

                    <div>
                        <h1 className={`sm:text-3xl text-2xl font-bold title-font mb-4 text-mettalic-gold uppercase ${i18n.language === 'عربي' ? 'text-right' : 'text-left'}`}>{t("contact02")}</h1>
                        {/* <div class="h-1 w-20 bg-mettalic-gold"></div> */}

                        <p className={`lg:w-full w-full text-md leading-relaxed text-white my-5 ${i18n.language === 'عربي' ? 'text-right' : 'text-left'}`}>{t("contDescription")}</p>

                    </div>

                    <form
                        target="_blank"
                        onSubmit={onSubmit}
                        action="https://formsubmit.co/abdullah@ahattah.com"
                        method="POST"
                    >
                        {i18n.language === 'عربي' ? (
                            <div className='flex justify-center flex-col-reverse space-y-5 text-russian-violet'>
                                <button className='text-[1rem] mt-5 rounded mb-3 md:mb-0 bg-mettalic-gold px-8 py-1.5'>{t("submit")}</button>
                                {/* <input
                        className='w-full rounded mb-3 md:rounded-none md:mb-0 bg-white text-sm font-normal placeholder-olive/75 px-5 py-2 text-right'
                        type='text'
                        placeholder={selectPackage}
                        {...register("name",{
                            required: true,
                            maxLength: 20,
                        })}
                    /> */}
                                <Selector selected={selected} setSelected={setSelected} people={people} val={val} />
                                <input type="hidden" name="Package" value={selected.name}
                                    {...register("Package", {
                                        required: true,
                                        maxLength: 20,
                                    })}
                                />
                                {/* <Dropdownv2/> */}

                                <input
                                    className='w-full rounded mb-3 md:mb-0 bg-white text-[1rem] font-medium placeholder-olive/75 px-5 py-2 text-right'
                                    type='text'
                                    placeholder={t("email")}
                                    {...register("Email", {
                                        required: true,
                                        maxLength: 20,
                                    })}
                                />
                                <input
                                    className='w-full rounded mb-3 md:mb-0 bg-white text-[1rem] font-medium placeholder-olive/75 px-5 py-2 text-right'
                                    type='text'
                                    placeholder={t("phone")}
                                    {...register("Phone", {
                                        required: true,
                                        maxLength: 20,
                                    })}
                                />
                                <input
                                    className='w-full rounded bg-white text-[1rem] font-medium placeholder-olive/75 px-5 py-2 text-right'
                                    type='text'
                                    placeholder={t("name")}
                                    {...register("Name", {
                                        required: true,
                                        maxLength: 20,
                                    })}
                                />
                            </div>
                        ) : (
                            <div className='flex flex-col justify-center space-y-5 text-russian-violet'>
                                <input
                                    className='w-full rounded mt-5 md:mb-0 bg-white text-[1rem] font-medium placeholder-olive/75 px-5 py-2'
                                    type='text'
                                    placeholder={t("name")}
                                    {...register("Name", {
                                        required: true,
                                        maxLength: 20,
                                    })}
                                />
                                <input
                                    className='w-full rounded mb-3  md:mb-0 bg-white text-[1rem] font-medium placeholder-olive/75 px-5 py-2'
                                    type='text'
                                    placeholder={t("email")}
                                    {...register("Email", {
                                        required: true,
                                        maxLength: 20,
                                    })}
                                />
                                <input
                                    className='w-full rounded mb-3 md:mb-0 bg-white text-[1rem] font-medium placeholder-olive/75 px-5 py-2'
                                    type='text'
                                    placeholder={t("phone")}
                                    {...register("Phone", {
                                        required: true,
                                        maxLength: 20,
                                    })}
                                />
                                <Selector selected={selected} setSelected={setSelected} people={people} val={val} />
                                <input type="hidden" name="Selected Package" value={selected.name}
                                    {...register("Package", {
                                        required: true,
                                        maxLength: 20,
                                    })}
                                />
                                <button className='text-[1rem] font-medium mt-5 md:mt-0 rounded mb-3 md:mb-0 md:rounded-r-lg bg-mettalic-gold px-8 py-1.5'>{t("submit")}</button>
                            </div>
                        )}
                    </form>
                </div>
                <div className={`${i18n.language === 'عربي' ? 'order-1' : 'order-2'}`}>
                    <div class={`bg-mettalic-gold/80 p-2.5`}>
                        <div
                            class="overflow-hidden bg-[url('/public/balance.jpeg')] bg-cover cursor-pointer rounded-sm relative group z-0 before:absolute w-full h-full"
                        >
                            {/* bg-[url('/public/balance.jpeg')] */}
                            <img

                                alt="First Product"
                                class="object-cover group-hover:scale-110 transition duration-500 ease-in-out z-10 w-full max-w-full md:invisible"
                                src="balance.jpeg"
                            />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Contact