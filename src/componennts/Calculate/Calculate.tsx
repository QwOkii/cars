import React from 'react'
import Baner1 from "../../accest/Calculate/Baner1.jpeg"
import Baner2 from "../../accest/Calculate/Baner2.png"

import { Select } from 'antd'

export const Calculate = () => {
  return (
    <div className='font-mono'>
        <div className='ml-16 flex gap-[50px] mt-10'>
            <div className='flex flex-col gap-[35px] w-[550px]'>
                <div className='font-title font-bold text-[23px]'>
                    Калькулятор доставки та розмитнення авто із США в Україну
                </div>
                <div className='text-[15px]'>
                    Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту
                </div>
            </div>
            <img src={Baner1} className='w-[580px] h-[270px] rounded' alt="" />
        </div>
        <div className='ml-16 flex mt-10'>
            <form className='w-[437px] h-[650px] bg-[#12120e] rounded text-white p-4'>
                <div className='font-title text-[21px] font-bold ' >
                    Вхідні дані
                </div>
                <div>
                    <div className='font-bold my-2'>
                        Вартість авто на аукціоні 
                    </div>
                    <input placeholder='5 000 $' type="text" className=' outline-none w-[250px] h-[40px] rounded-md pl-3 ' />
                </div>
                <div>
                    <div className='font-bold my-2'>
                        Аукціон
                    </div>
                    <Select placeholder='Аукціон' className=' outline-none w-[250px] h-[40px] rounded-md '></Select>
                </div>
                <div>
                    <div className='font-bold my-2'>
                        Майданчик аукціону 
                    </div>
                    <Select placeholder='Майданчик аукціону' className=' outline-none w-[250px] h-[40px] rounded-md '></Select>
                </div>
                <div>
                    <div className='font-bold my-2'>
                        Тип транспорту
                    </div>
                    <Select placeholder='Виберіть' className=' outline-none w-[250px] h-[40px] rounded-md '></Select>
                </div>
                <div>
                    <div className='font-bold my-2'>
                        Тип двигуна
                    </div>
                    <Select placeholder='Виберіть' className=' outline-none w-[250px] h-[40px] rounded-md '></Select>
                </div>
                <div>
                    <div className='font-bold my-2'>
                        Об’єм двигуна
                    </div>
                    <input placeholder='Потужність двигуна, кВт' type="text" className=' outline-none w-[250px] h-[40px] rounded-md pl-3' />
                </div>
                <div>
                    <div className='font-bold my-2'>
                        Рік випуску
                    </div>
                    <Select placeholder='Виберіть' className=' outline-none w-[250px] h-[40px] rounded-md '></Select>
                </div>
            </form>
            <div className='mx-4'>
                <div className='flex flex-col gap-[8px] mb-[170px]'>
                    <div className='flex justify-between'>
                        <div className='font-title '>
                            Вартість вашого авто на аукціоні США 
                        </div>
                        <div>
                            $0
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <div>
                            Аукціонний збір
                        </div>
                        <div>
                            $0
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <div>
                            Комісія
                        </div>
                        <div>
                            $0
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <div>
                            Доставка по США
                        </div>
                        <div>
                            $0
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <div>
                            Доставка в Україну
                        </div>
                        <div>
                            $0
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <div>
                            Розмитнення
                        </div>
                        <div>
                            $0
                        </div>
                    </div>
                </div>
                <div className='border-t-2 border-solid border-[#740706] w-[700px]  '>
                    <div className='flex justify-between'>
                        <div className='font-title text-[21px]'>
                            Вартість авто + доставка
                        </div>
                        <div>
                            $0
                        </div>
                    </div>
                    <div className='text-white flex gap-[10px] mt-5 ml-16'>
                        <button className='bg-[#740706] h-[40px] w-[250px] rounded'>Детальніше</button>
                        <button className='bg-[#740706] h-[40px] w-[250px] rounded'>Розрахунок по патежам</button>
                    </div>
                </div>
            </div>
        </div>
        <div className='ml-16 flex gap-[50px] text-white mt-10 '>
            <div className='w-[565px] h-[500px] bg-[#12120e] rounded flex flex-col items-center p-5'>
                <div className='w-[475px] border-b-2 border-solid border-[#740706] font-title text-[21px]'> 
                    Чому варто користуватися калькулятором авто з США?
                </div>
                <div className='mt-4 mx-10'>
                    Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад
                </div>
            </div>
            <div className='w-[565px] h-[340px] bg-[#12120e] rounded flex flex-col items-start p-5'>
                <div className='w-[475px] border-b-2 border-solid border-[#740706] font-title text-[21px]'> 
                    Як користуватись калькулятором?
                </div>
                <div className='mt-4 mx-10'>
                    Для того щоб розрахувати вартість доставлення з розмитненням потрібно вказати:
                </div>
                <ol className='list-decimal flex flex-col gap-[10px] ml-14 mt-3'>
                    <li>
                        Приклад тексту Приклад тексту Приклад
                    </li>
                    <li>
                        Приклад тексту Приклад тексту Приклад
                    </li>
                    <li>
                        Приклад тексту Приклад тексту Приклад
                    </li>
                    <li>
                        Приклад тексту Приклад тексту Приклад
                    </li>
                </ol>
            </div>
        </div>
        <div className=' w-screen h-[230px] bg-[#12120e] flex justify-between mt-[150px] text-white'>
            <div className='m-10'>
                <div className='font-title text-[21px]'>
                    Отримай знижку 10%
                </div>
                <div>
                    Приклад тексту Приклад тексту Приклад
                </div>
                <button className='h-[40px]  bg-[#740706] rounded w-[200px] mt-10'>Отримати знижку</button>
            </div>
            <img className='h-[230px] w-[380px]' src={Baner2} alt="" />
        </div>
        <div className='ml-16 mt-8'>
            <div className='text-[#12120e] text-[30px] font-title font-bold'>
                Часті питання
            </div>
            <div className='flex text-white gap-[10px]'>
                <div className='flex flex-col gap-[10px]'>
                    <details id='details' className='bg-[#12120e] rounded flex flex-col justify-center items-center p-5'>
                        <summary className='font-title text-[20px] w-[510px]  h-[60px] text-center pt-5 marker:text-[#740706]'>
                            З якими аукціонами ми працюємо? 
                        </summary>
                        <div className='h-[250px] w-[470px] mx-10'>
                            Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту
                            Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту
                        </div>
                    </details> 
                    <details id='details' className='bg-[#12120e] rounded flex flex-col justify-center items-center p-5'>
                        <summary className='font-title text-[20px] w-[510px]  h-[60px] text-center pt-5 marker:text-[#740706]'>
                            Як вибрати авто із США?
                        </summary>
                        <div className='h-[250px] w-[470px] mx-10'>
                            Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту
                            Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту
                        </div>
                    </details> 
                    <details id='details' className='bg-[#12120e] rounded flex flex-col justify-center items-center p-5'>
                        <summary className='font-title text-[20px] w-[510px]  h-[60px] text-center pt-5 marker:text-[#740706]'>
                            З якими аукціонами ми працюємо? 
                        </summary>
                        <div className='h-[250px] w-[470px] mx-10'>
                            Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту
                            Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту
                        </div>
                    </details> 
                </div>
                <div className='flex flex-col gap-[10px]'>
                    <details id='details' className='bg-[#12120e] rounded flex flex-col justify-center items-center p-5'>
                        <summary className='font-title text-[20px] w-[510px]  h-[60px] text-center pt-5 marker:text-[#740706]'>
                            З якими аукціонами ми працюємо? 
                        </summary>
                        <div className='h-[250px] w-[470px] mx-10'>
                            Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту
                            Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту
                        </div>
                    </details> 
                    <details id='details' className='bg-[#12120e] rounded flex flex-col justify-center items-center p-5'>
                        <summary className='font-title text-[20px] w-[510px]  h-[60px] text-center pt-5 marker:text-[#740706]'>
                            З якими аукціонами ми працюємо? 
                        </summary>
                        <div className='h-[250px] w-[470px] mx-10'>
                            Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту
                            Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту
                        </div>
                    </details> 
                    <details id='details' className='bg-[#12120e] rounded flex flex-col justify-center items-center p-5'>
                        <summary className='font-title text-[20px] w-[510px]  h-[60px] text-center pt-5 marker:text-[#740706]'>
                            З якими аукціонами ми працюємо? 
                        </summary>
                        <div className='h-[250px] w-[470px] mx-10'>
                            Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту
                            Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту
                        </div>
                    </details> 
                </div>
            </div>
        </div>
    </div>
  )
}
