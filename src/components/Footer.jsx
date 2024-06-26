import React from 'react';
import { FaReact } from "react-icons/fa6";
import { TbBrandVite } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";


const Footer = ({theme='dark', linkedin=true}) => {



    //Styling logic ----------------------------------------------------------------
    //Tailwind Styles for hover effect making the icons enlarge on hover
    const hoverLarge = "transform transition-transform duration-200 hover:scale-125 cursor-pointer mx-4"
    //Styling for available themes
    const themes = {
        dark: 'bg-black',
        light: 'bg-gray-400'
    }


    return (
        <div className={`px-8 py-4 ${themes[theme]}`}>
            <div className='flex justify-center items-center text-3xl text-gray-600'>
                <p className='text-sm mx-2'>Powered by</p>
                <div className={hoverLarge}><a target="_blank" rel='noopener' href="https://react.dev/"><FaReact /></a></div>
                <div className={hoverLarge}><a target="_blank" rel='noopener' href="https://tailwindcss.com/"><SiTailwindcss /></a></div>
                <div className={hoverLarge}><a target="_blank" rel='noopener' href="https://vitejs.dev/"><TbBrandVite /></a></div>

            </div>
        </div>
    )}

export default Footer