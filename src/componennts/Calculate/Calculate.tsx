import React from 'react'
import Baner1 from "../../accest/Calculate/Baner1.jpeg"
import Baner2 from "../../accest/Calculate/Baner2.png"
import EmailBlack from "../../accest/Contact/EmailBlack.svg"
import PhoneBlack from "../../accest/Contact/PhoneBlack.svg"

import { Select } from 'antd'

export const Calculate = () => {
  return (
    <div className='font-mono mt-10 flex flex-col items-start w-screen pl-36 gap-[75px]'>
        <div className=' flex gap-[50px] '>
            <div className='flex flex-col gap-[35px] md:w-[550px] mr-10'>
                <div className='font-title font-bold text-[23px]'>
                    Калькулятор доставки та розмитнення авто із США в Україну
                </div>
                <div className='text-[15px]'>
                    Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту
                </div>
            </div>
            <img src={Baner1} className='w-[580px] h-[270px] rounded hidden xl:block ' alt="" />
        </div>
        <div className=' flex flex-col justify-center xl:flex-row'>
            
            <form className='w-[340px] md:w-[437px] md:h-[650px] bg-[#12120e] rounded text-white p-4'>
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
            <div className='mx-4 mt-8 xl:mt-0 mr-20'>
                <div className='flex flex-col gap-[8px] md:mb-[170px]'>
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
                <div className=' items-center md:items-start border-t-2 border-solid border-[#740706] w-[340px] md:w-[500px] xl:w-[700px]  '>
                    <div className='flex justify-between'>
                        <div className='font-title text-[21px]'>
                            Вартість авто + доставка
                        </div>
                        <div>
                            $0
                        </div>
                    </div>
                    <div className='text-white flex flex-col md:flex-row gap-[10px] mt-5 ml-16'>
                        <button className='bg-[#740706] h-[40px] w-[250px] rounded'>Детальніше</button>
                        <button className='bg-[#740706] h-[40px] w-[250px] rounded'>Розрахунок по патежам</button>
                    </div>
                </div>
            </div>
        </div>
        <div className=' flex flex-col xl:flex-row gap-[50px] text-white '>
            <div className='w-[340px] md:w-[565px] md:h-[500px] bg-[#12120e] rounded flex flex-col items-center p-5'>
                <div className='w-[300px] md:w-[475px] border-b-2 border-solid border-[#740706] font-title text-[21px]'> 
                    Чому варто користуватися калькулятором авто з США?
                </div>
                <div className='mt-4 mx-10'>
                    Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад
                </div>
            </div>
            <div className='w-[340px] md:w-[565px] md:h-[340px] bg-[#12120e] rounded flex flex-col items-start p-5'>
                <div className='w-[300px] md:w-[475px] border-b-2 border-solid border-[#740706] font-title text-[21px]'> 
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
        <div className='w-screen h-[230px] -ml-36 pl-36 bg-[#12120e] flex justify-between text-white'>
            <div className='m-10'>
                <div className='font-title text-[21px]'>
                    Отримай знижку 10%
                </div>
                <div>
                    Приклад тексту Приклад тексту Приклад
                </div>
                <button className='h-[40px]  bg-[#740706] rounded w-[200px] mt-10'>Отримати знижку</button>
            </div>
            <img className=' md:h-[230px] md:w-[380px] hidden md:block' src={Baner2} alt="" />
        </div>
        <div className=' xl:ml-16 '>
            <div className='text-[#12120e] text-[30px] font-title font-bold'>
                Популярні питання
            </div>
            <div className='flex flex-col  xl:flex-row text-white gap-[10px] mb-10'>
                <div className='flex flex-col gap-[10px]'>
                    <details  id='details' className='bg-[#12120e] w-[345px] h-[80px] md:w-[510px] md:h-[110px] box-border rounded flex flex-col justify-center items-center p-5'>
                        <summary className='font-title text-[20px]  h-[60px] text-center md:pt-5 marker:text-[#740706]'>
                            З якими аукціонами ми працюємо? 
                        </summary>
                        <div className='h-[250px] max-w-[470px] mx-10'>
                            Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту
                            Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту
                        </div>
                    </details> 
                    <details  id='details' className='bg-[#12120e] w-[345px] h-[80px] md:w-[510px] md:h-[110px] box-border rounded flex flex-col justify-center items-center p-5'>
                        <summary className='font-title text-[20px]  h-[60px] text-center md:pt-5 marker:text-[#740706]'>
                            Як вибрати авто із США?
                        </summary>
                        <div className='h-[250px] w-[470px] mx-10'>
                            Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту
                            Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту
                        </div>
                    </details> 
                    <details id='details' className='bg-[#12120e] w-[345px] h-[80px] md:w-[510px] md:h-[110px] box-border rounded flex flex-col justify-center items-center p-5'>
                        <summary className='font-title text-[20px]h-[60px] text-center md:pt-5 marker:text-[#740706]'>
                            З якими аукціонами ми працюємо? 
                        </summary>
                        <div className='h-[250px] w-[470px] mx-10'>
                            Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту
                            Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту
                        </div>
                    </details> 
                </div>
                <div className='flex flex-col gap-[10px]'>
                    <details id='details' className='bg-[#12120e] w-[345px] h-[80px] md:w-[510px] md:h-[110px] box-border rounded flex flex-col justify-center items-center p-5'>
                        <summary className='font-title text-[20px]  h-[60px] text-center md:pt-5 marker:text-[#740706]'>
                            З якими аукціонами ми працюємо? 
                        </summary>
                        <div className='h-[250px] w-[470px] mx-10'>
                            Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту
                            Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту
                        </div>
                    </details> 
                    <details id='details' className='bg-[#12120e] w-[345px] h-[80px] md:w-[510px] md:h-[110px] box-border rounded flex flex-col justify-center items-center p-5'>
                        <summary className='font-title text-[20px]h-[60px] text-center md:pt-5 marker:text-[#740706]'>
                            З якими аукціонами ми працюємо? 
                        </summary>
                        <div className='h-[250px] w-[470px] mx-10'>
                            Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту
                            Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту
                        </div>
                    </details> 
                    <details id='details' className='bg-[#12120e] w-[345px] h-[80px] md:w-[510px] md:h-[110px] box-border rounded flex flex-col justify-center items-center p-5'>
                        <summary className='font-title text-[20px]h-[60px] text-center md:pt-5 marker:text-[#740706]'>
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
        <div className='w-screen -ml-[15%] bg-[#12120e] min-h-[230px] text-white flex items-center'>
            <div className='md:mx-56 flex items-center flex-col xl:flex-row gap-12 p-4'>
                <div className='ml-12 md:ml-0'>
                    <div className='text-[22px] font-bold '>
                        ПІДПИСУЙТЕСЬ!
                    </div>
                    <div className='text-[18px]'>
                        Та дізнавайтеся перші про вигідні пропозиції
                    </div>
                </div>
                <div className='flex xl:ml-96'>
                    <input className='box-border p-4 md:w-[320px] h-[54px] bg-[#12120e] border-[3px] border-solid border-[#f1f1f6]' placeholder='Введіть ваш Email' type="text" />
                    <button className='h-[54px] bg-[#730706] box-border px-5 md:w-[220px] rounded-tr rounded-br'>
                        Підписатися
                    </button>
                </div>
            </div>
        </div>
        <div className='mx-14'>
            <div className='text-[26px] font-bold font-title'>
                КОНТАКТИ
            </div>
            <div className='flex gap-12 my-10'>
                <div className='flex gap-[10px] text-[18px] font-bold'>
                    <img className='w-[35px] h-[35px]' src={PhoneBlack} alt="" />
                    <div>
                        Телефон:
                    </div>
                    <div>
                        +38011122233
                    </div>
                </div>
                <div className='flex gap-[10px] text-[18px] font-bold'>
                    <img className='w-[35px] h-[35px]' src={EmailBlack} alt="" />
                    <div>
                        Email:
                    </div>
                    <div>
                        .com
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}
