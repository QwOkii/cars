import React from 'react'
import Licens from "../../accest/AboutUS/Licens.webp"
import deferent from "../../accest/AboutUS/deferent.webp"
import delivery from "../../accest/AboutUS/delivery.webp"
import support from "../../accest/AboutUS/support.webp"
import Baner1 from "../../accest/AboutUS/Baner1.webp"
import EmailBlack from "../../accest/Contact/EmailBlack.svg"
import PhoneBlack from "../../accest/Contact/PhoneBlack.svg"
import { FormSupportAccept } from '../Forms/FormSupportAccept'
export const AboutUS = () => {
  return (
    <div className='font-mono mt-10 flex flex-col items-start w-screen pl-56 '>
        <div className='my-8 w-[470px]  '>
            <div className='text-[23px] font-title font-bold'>
                Про нашу компанію
            </div>
            <div className='text-[15px] my-5'>
                Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад
            </div>
            <ul className='list-disc flex flex-col gap-[10px] list-inside'>
                <li>Приклад тексту Приклад тексту </li>
                <li>Приклад тексту Приклад тексту </li>
                <li>Приклад тексту Приклад тексту </li>
            </ul>
        </div>
        <div className='my-8 flex gap-12 flex-col xl:flex-row'>
            <div className=' border border-solid border-[#12120e] w-[450px] h-[388px] rounded'>

            </div>
            <div className='max-w-[731px]'>
                <div className='text-[23px] font-title font-bold'>
                    Наша історія
                </div>
                <div className='text-[15px] mt-3'>
                    Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту  Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту  Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту
                </div>
            </div>
        </div>
        <div className='my-8flex gap-12  flex-col xl:flex-row'>
            <div className=' w-[400px]  '>
                <div className='text-[23px] font-title font-bold'>
                    Наші цінності
                </div>
                <div className='text-[15px] my-5'>
                    Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад
                </div>
                <ul className='list-disc flex flex-col gap-[10px] list-inside'>
                    <li>Приклад тексту Приклад тексту </li>
                    <li>Приклад тексту Приклад тексту </li>
                    <li>Приклад тексту Приклад тексту </li>
                </ul>
            </div>
            <div className='flex flex-wrap my-5 -ml-24 gap-4'>
                <div className='box-border w-[350px] h-[250px] bg-[#12120e] rounded flex flex-col p-5 text-white'>
                    <div className='flex gap-4'>
                        <div className='bg-[#740706] rounded-full w-[90px] h-[90px] flex justify-center items-center'>
                            <img className='w-[60px] h-[60px]' src={Licens} alt="" />
                        </div>
                        <div className='text-[21px] font-title font-bold'>
                            Ліцензії
                        </div>
                    </div>
                    <div className='text-[14px] max-w-[560px] mt-4'>
                        Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту
                    </div>
                </div>
                <div className='box-border w-[350px] h-[250px] bg-[#12120e] rounded flex flex-col p-5 text-white'>
                    <div className='flex gap-4'>
                        <div className='bg-[#740706] rounded-full w-[90px] h-[90px] flex justify-center items-center'>
                            <img className='w-[60px] h-[60px]' src={deferent} alt="" />
                        </div>
                        <div className='text-[21px] font-title font-bold'>
                            Прозорість
                        </div>
                    </div>
                    <div className='text-[14px] max-w-[560px] mt-4'>
                        Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту
                    </div>
                </div>
                <div className='box-border w-[350px] h-[250px] bg-[#12120e] rounded flex flex-col p-5 text-white'>
                    <div className='flex gap-4'>
                        <div className='bg-[#740706] rounded-full w-[90px] h-[90px] flex justify-center items-center'>
                            <img className='w-[60px] h-[60px]' src={delivery} alt="" />
                        </div>
                        <div className='text-[21px] font-title font-bold'>
                            Логістика
                        </div>
                    </div>
                    <div className='text-[14px] max-w-[560px] mt-4'>
                        Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту
                    </div>
                </div>
                <div className='box-border w-[350px] h-[250px] bg-[#12120e] rounded flex flex-col p-5 text-white'>
                    <div className='flex gap-4'>
                        <div className='bg-[#740706] rounded-full w-[90px] h-[90px] flex justify-center items-center'>
                            <img className='w-[60px] h-[60px]' src={support} alt="" />
                        </div>
                        <div className='text-[21px] font-title font-bold'>
                            Завжди онлайн
                        </div>
                    </div>
                    <div className='text-[14px] max-w-[560px] mt-4'>
                        Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту
                    </div>
                </div>
            </div>
        </div>
        <div className='mt-8 bg-white w-screen h-[400px] -ml-56 pl-56 flex gap-40 items-center '>
            <div className='flex flex-col gap-8 mt-16 w-[420px]'>
                <div className='text-[23px] font-title font-bold'>
                    Натисни сюди, щоб потрапити на портал пошуку роботи
                </div>
                <div className='text-[15px] '>
                    Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту
                </div>
                <button className='bg-[#740706] rounded text-white text-[17px] w-[420px] h-[90px] font-bold'>
                    Натисни сюди, щоб потрапити на портал пошуку роботи
                </button>
            </div>
            <img src={Baner1} className='hidden xl:block w-[574px] h-[380px] rounded' alt="" />
        </div>
        <div className=' flex gap-32 justify-between w-screen -ml-56  flex-col xl:flex-row'>
            <div className='ml-56 flex flex-col gap-8 xl:gap-16 w-[430px]'>
                <div className='text-[23px] font-title font-bold'>
                    Ми завжди відкриті до співпраці
                </div>
                <div className='text-[15px]'>
                    Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад
                </div>
                <button className='bg-[#740706] rounded text-white font-bold text-[18px] w-[320px] h-[70px]'>
                    Співпраця
                </button>
            </div>
            <div className='w-[900px] object-cover h-[620px] bg-Baner2 text-white '>
                <FormSupportAccept/>
            </div>
        </div>
        <div className='mb-8 w-screen -ml-56 bg-[#12120e] min-h-[150px] text-white flex items-center'>
            <div className='mx-56 flex flex-col xl:flex-row gap-12 p-4'>
                <div>
                    <div className='text-[22px] font-bold '>
                        ПІДПИСУЙТЕСЬ!
                    </div>
                    <div className='text-[18px]'>
                        Та дізнавайтеся перші про вигідні пропозиції
                    </div>
                </div>
                <div className='flex xl:ml-96'>
                    <input className='box-border p-4 w-[320px] h-[54px] bg-[#12120e] border-[3px] border-solid border-[#f1f1f6]' placeholder='Введіть ваш Email' type="text" />
                    <button className='h-[54px] bg-[#730706] w-[220px]'>
                        Підписатися
                    </button>
                </div>
            </div>
        </div>
        <div className='mt-8'>
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
