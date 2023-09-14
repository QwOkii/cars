import React from 'react'
import logo from "../../accest/Header/logo.webp"
import phoneSVG from "../../accest/Header/PhoneSVG.svg"
import { NavLink} from "react-router-dom"

export const Header = () => {
  return (
    <header className='w-[1320px] h-[200px] flex justify-around items-center bg-gradient-to-tr from-[#000] to-[#191919] rounded-lg text-white font-mono'>
        <div className='w-[137.7px] h-[179.5px] mt-[80px]'>
            <img src={logo} alt=""/>
        </div>
        <div>
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
            <div className='flex items-center'>
                
                <div>
                    <img className='w-[39px] h-[39px] mr-2' src={phoneSVG}/>
                </div>
                <div>
                    +38011122233
                </div>
            </div>
            <button className='bg-[#740706] w-[140px] h-[41px] my-2 rounded'>Замовити дзвінок</button>
        </div>
    </header>
  )
}
