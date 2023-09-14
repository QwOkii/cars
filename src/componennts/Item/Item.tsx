import React from 'react'
import motor from "../../accest/Item/motor.webp"
import car from "../../accest/Item/car.webp"
import probig from "../../accest/Item/probig.webp"
import back from "../../accest/Main/bensin.svg"
import { NavLink } from 'react-router-dom'

export const Item = () => {
  return (
    <NavLink to={'/car'} className='w-[300px] h-[578px] bg-[#12120e] flex flex-col justify-between items-center text-white '>
        <img src="" alt="" className='w-[300px] h-[196px]'/>
        <div className='font-mono font-bold '>
            Title
        </div>
        <div className='w-[280px] border-b border-solid border-[#f1f1f6] mx-2'>
            <div className='flex mx-3 my-4'>
                <div className='flex mx-3'>
                    <img src={motor} alt="" className='w-[32.5px] h-[32.5px] mr-1'/>
                    1 500 см³
                </div>
                <div className='flex'>
                    <img src={back} alt="" className='w-[32.5px] h-[32.5px] mr-1' />
                    1 500 см³
                </div>
            </div>
            <div  className='flex mx-3 my-4'>
                <div className='flex mx-3'>
                    <img src={probig} alt=""  className='w-[32.5px] h-[32.5px] mr-1'/>
                    1 500 см³
                </div>
                <div className='flex'>
                    <img src={car} alt=""  className='w-[32.5px] h-[32.5px] mr-1'/>
                    1 500 см³
                </div>
            </div>
        </div>
        <div className='font-mono'>
            <div className='flex '>
                <div className='text-white '>Поточна ставка:</div>
                <div className='text-[#ad3b3a] text-[17.3px] ml-2'>$0</div>
            </div>
            <div className=' text-[15px] text-[#aeaeb2]'>
                Аукціон через 2 тижні
            </div>
        </div>
        <button className='bg-[#12120e] border-4 border-solid border-[#aeaeb2] w-[256px] h-[52px] rounded'>
            Зробити ставку
        </button>
        <button className='w-[256px] h-[52px] bg-[#740706] rounded mb-2'>
            Детальніше
        </button>
    </NavLink>
  )
}
