import { Fragment, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { BsChevronExpand } from 'react-icons/bs'

import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

import ar from '../lng/ar.json'
import en from '../lng/en.json'

const Selector2 = ({val}) => {

    const { t, i18n } = useTranslation();

    const [isOpen, setIsOpen] = useState(false);
    // const [isSelected, setIsSelected] = useState(val);
   

    // Data
    let def = i18n.language === 'عربي' ? "اختار الباقة" : "Select Package";
    let packT1 = i18n.language === 'عربي' ? ar.package.package01.title : en.package.package01.title;
    let packT2 = i18n.language === 'عربي' ? ar.package.package02.title : en.package.package02.title;
    let packT3 = i18n.language === 'عربي' ? ar.package.package03.title : en.package.package03.title;
    let packT4 = i18n.language === 'عربي' ? ar.package.package04.title : en.package.package04.title;

    let people = [{ name: packT1 }, { name: packT2 }, { name: packT3 }, { name: packT4 }]
    let options = [packT1, packT2, packT3, packT4]
    let def_arr = {name:def}

    const [selected, setSelected] = useState(people[val])

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
                        `relative cursor-default select-none py-2 pl-5 pr-4 ${
                          active ? 'bg-mettalic-gold text-russian-violet' : 'text-gray-900'
                        }`
                      }
                      value={person}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? 'font-medium' : 'font-normal'
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

export default Selector2
