import React from 'react'
import { useSelector } from 'react-redux'
import GoogleTranlator from '../utiles/GoogleTranslater';

const GptSearchBar = () => {
    const langKey = useSelector((store) => store.Translator.GoogleTranslator);
    console.log(langKey)


    return (
        <div className='pt-[20%] flex justify-center'>
            <form className='w-1/2 bg-black grid grid-cols-12'>
                <input type='text' placeholder={GoogleTranlator[langKey].gptSearchPlaceholder} className='py-4 px-4 mx-4 col-span-8' ></input>
                <button className='py-2 px-2 bg-red-700 text-white rounded-lg  col-span-4 '>{GoogleTranlator[langKey].search}</button>
            </form>
        </div>
    )
}

export default GptSearchBar