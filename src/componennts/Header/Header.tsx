import React from 'react'
import logo from "../../accest/Header/logo.png"
import phoneSVG from "../../accest/Header/PhoneSVG.svg"
import menuBurger from '../../accest/Header/icons8-menu.svg'
import { NavLink} from "react-router-dom"

export const Header = () => {
  return (
    <header className='w-screen md:w-[85%] h-[120px] md:h-[190px] flex justify-around items-center bg-gradient-to-tr from-[#000] to-[#191919] md:rounded-lg text-white font-mono'>
        <div>
            <img className='w-[70px] h-[70px] md:w-[137.7px] md:h-[179.5px] object-cover my-[5px]' src={logo} alt=""/>
        </div>
        <div className='hidden xl:block'>
            <div className='flex w-[800px] border-b border-solid border-[#f1f1f6] pb-2 '>
                <NavLink to={'/'} className='mx-2'>Головна</NavLink>
                <NavLink to={'/calalog'} className='mx-2'>Каталог авто </NavLink>
                <NavLink to={'/calculate'} className='mx-2'>Калькулятор</NavLink>
                <NavLink to={'/cooperation'} className='mx-2'>Співпраця </NavLink>
                <NavLink to={'/guarantees'} className='mx-2'>Гарантії</NavLink>
                <NavLink to={'/about'} className='mx-2'>Про нас</NavLink>
                <NavLink to={'/contact'} className='mx-2'>Контакти </NavLink>
            </div>
            <div className='my-2 flex text-[#aeaeb2]'>
                <div className='mx-2'>Вибір авто</div>
                <div className='mx-2'>Марки</div>
                <div className='mx-2'>Вигоди</div>
                <div className='mx-2'>Калькулятор</div>
                <div className='mx-2'>Чому ми</div>
                <div className='mx-2'>Відгуки</div>
                <div className='mx-2'>Контакти</div>
            </div>
        </div>
        <div>
            <div className='hidden sm:flex flex-col lg:flex-row items-center'>
                
                <div>
                    <img className='w-[26px] h-[26px] mr-2' src={phoneSVG}/>
                </div>
                <div>
                    +38011122233
                </div>
            </div>
            <button className='bg-[#740706] w-[140px] h-[41px] my-5 rounded'>Замовити дзвінок</button>
        </div>
        <button className='block sm:hidden'>
            <img src={menuBurger} alt="" />
            <img src="" alt="" />
        </button>
    </header>
  )
}
