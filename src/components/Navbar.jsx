import { useState } from 'react'
import logo from '../assets/logo.svg'
import menu from '../assets/hamburger.svg'

export default function Navber() {
    const [btn, setBtn] = useState(false)
    function toggleBtn() {
        setBtn(!btn)
    }
    return (
        <nav className="w-full flex items-center relative">
            <img src={logo} alt='logo' className='object-contain mr-8'/>
            <div className='w-full hidden md:flex items-center'>
                <a href='#feature' className='font-poppins text-sm text-gray hover:text-dark-blue px-4 font-medium cursor-pointer'>Features</a>
                <a href='#price' className='font-poppins text-sm text-gray hover:text-dark-blue px-4 font-medium cursor-pointer'>Pricing</a>
                <a href='#resource' className='font-poppins text-sm text-gray hover:text-dark-blue px-4 font-medium cursor-pointer'>Resources</a>
                <button className='font-poppins text-sm ml-auto mr-8'>Login</button>
                <button className='font-poppins text-sm py-2 px-5 rounded-3xl bg-cyan text-white hover:opacity-75'>Sign Up</button>
            </div>
            <button onClick={toggleBtn} className='ml-auto md:hidden'><img src={menu} className='w-6 h-6'/></button>
            {btn && <div className='font-poppins bg-dark-blue flex flex-col rounded-xl p-4 w-full absolute top-[120%] text-center gap-5'>
                <a href='#feature' className='text-sm text-white px-4 font-medium'>Features</a>
                <a href='#price' className='text-sm text-white px-4 font-medium'>Pricing</a>
                <a href='#resource' className='text-sm text-white px-4 font-medium'>Resources</a>
                <div className='bg-gray h-[1px] w-full rounded-2xl'></div>
                <button className='text-white text-sm'>Login</button>
                <button className='text-white text-sm py-2 px-5 rounded-3xl bg-cyan'>Sign Up</button>
            </div>}
        </nav>
    )
}