import React from 'react'
import motor from "../../accest/Item/motor.webp"
import car from "../../accest/Item/car.webp"
import probig from "../../accest/Item/probig.webp"
import back from "../../accest/Main/bensin.svg"
import calendar from "../../accest/Item/calendar.svg"
import privod from "../../accest/Item/privod.webp"
import logo from "../../accest/Item/logo.webp"




export const Item = () => {
  return (
    <div className='w-[950px] h-[190px] bg-[#12120e] my-[10px] flex text-white border border-solid border-[#12120e]'>
        <div>
            <img  className='w-[290px] h-[190px]' src={logo} alt="" />
        </div>
        <div className='h-[190px] border-r border-solid border-[#f1f1f6] py-5 pr-20 ml-5 w-[390px]'>
            <div className='text-[15px] font-bold'>
                2014 FORD FUSION SE
            </div>
            <div className='flex mt-5 mb-1'>
                <div className='flex flex-col gap-[5px]'>
                    <div className='flex '>
                        <div className='w-[19px] h-[19px]'>
                            <img src={calendar} alt="" />
                        </div>
                        <div className='text-[10px] ml-3'>
                            2022
                        </div>
                    </div>
                    <div className='flex '>
                        <div className='w-[19px] h-[19px]'>
                            <img src={motor} alt="" />
                        </div>
                        <div className='text-[10px] ml-3'>
                            1 500 см³
                        </div>
                    </div>
                    <div className='flex '>
                        <div className='w-[19px] h-[19px]'>
                            <img src={probig} alt="" />
                        </div>
                        <div className='text-[10px] ml-3'>
                            50 000 миль
                        </div>
                    </div>
                    <div className='flex '>
                        <div className='w-[19px] h-[19px]'>
                            <img src={car} alt="" />
                        </div>
                        <div className='text-[10px] ml-3'>
                            Відсутній
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-[5px] ml-14'>
                    <div className='flex '>
                        <div className='w-[19px] h-[19px]'>
                            <img src={back} alt="" />
                        </div>
                        <div className='text-[10px] ml-3'>
                            Бензин
                        </div>
                    </div>
                    <div className='flex '>
                        <div className='w-[19px] h-[19px]'>
                            <img src={privod} alt="" />
                        </div>
                        <div className='text-[10px] ml-3'>
                            Повний
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex '>
                <div className='text-[9px]'>
                    VIN
                </div>
                <div className='text-[10px] ml-2'>
                    2HKRW2H99ЕH641274
                </div>
            </div>
        </div>
        <div className='flex flex-col items-center p-3'>
            <div className='text-[13px]'>
                Аукціон через 1 день
            </div>
            <div className='flex flex-col items-center'>
                <div className='text-[13px]'>
                    Поточна ставка:
                </div>
                <div className='text-[#740706] text-[17px] font-bold'>
                    $0
                </div>
            </div>
            <div className='flex flex-col'>
                <button className='text-[11px] border-[3px] border-solid border-[#f1f1f6] rounded w-[220px] h-[30px]'>
                    Зробити ставку
                </button>
                <button className='w-[220px] h-[30px] rounded text-[11px] bg-[#740706] my-2'>
                    Детальніше
                </button>
            </div>
        </div>
    </div>
  )
}
