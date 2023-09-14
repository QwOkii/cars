import React from 'react'
import Licens from "../../accest/AboutUS/Licens.webp"
import deferent from "../../accest/AboutUS/deferent.webp"
import delivery from "../../accest/AboutUS/delivery.webp"
import support from "../../accest/AboutUS/support.webp"
import Baner1 from "../../accest/AboutUS/Baner1.webp"
import comment from "../../accest/AboutUS/comment.svg"
import phone from "../../accest/AboutUS/phone.svg"
import user from "../../accest/AboutUS/user.svg"
import EmailBlack from "../../accest/Contact/EmailBlack.svg"
import PhoneBlack from "../../accest/Contact/PhoneBlack.svg"
export const AboutUS = () => {
  return (
    <div className='font-mono mt-10 flex flex-col items-start w-screen pl-28 gap-[75px]'>
        <div className=' w-[470px]  '>
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
        <div className=' flex gap-12'>
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
        <div className='flex gap-12'>
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
            <div className='flex flex-wrap max-w-[720px] gap-4'>
                <div className='box-border w-[350px] h-[250px] bg-[#12120e] rounded flex flex-col p-5 text-white'>
                    <div className='flex gap-4'>
                        <div className='bg-[#740706] rounded-full w-[90px] h-[90px] flex justify-center items-center'>
                            <img className='w-[60px] h-[60px]' src={Licens} alt="" />
                        </div>
                        <div className='text-[21px] font-title font-bold'>
                            Ліцензії
                        </div>
                    </div>
                    <div className='text-[14px] max-w-[280px] mt-4'>
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
                    <div className='text-[14px] max-w-[280px] mt-4'>
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
                    <div className='text-[14px] max-w-[280px] mt-4'>
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
                    <div className='text-[14px] max-w-[280px] mt-4'>
                        Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту
                    </div>
                </div>
            </div>
        </div>
        <div className='bg-white w-screen h-[400px] -ml-28 pl-28 flex gap-40 items-center '>
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
            <img src={Baner1} className='w-[574px] h-[380px] rounded' alt="" />
        </div>
        <div className='flex gap-32 justify-between w-screen -ml-28 '>
            <div className='ml-28 flex flex-col gap-16 w-[430px]'>
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
            <div className='w-[780px] h-[620px] bg-Baner2 text-white '>
                <form className='mt-14  flex flex-col gap-3 ml-20'>
                    <div className='font-title font-bold text-[22px] '>
                        Або заповніть форму для замовлення консультації
                    </div>
                    <div>
                        Ми завжди відкриті до співпраці
                    </div>
                    <div>
                        <div className='flex my-2'>
                            <img className='w-[26px] h-[26px]' src={phone} alt="" />
                            <div className='text-13px ml-2'>
                                Номер телефону
                            </div>
                        </div>
                        <input className='box-border p-4 bg-white outline-none rounded w-[360px] h-[54px]' placeholder='+380 XX XX XX XXX' type="text" />
                    </div>
                    <div>
                        <div className='flex my-2 '>
                            <img className='w-[26px] h-[26px]' src={user} alt="" />
                            <div className='text-13px ml-2'>
                                Ваше ім’я
                            </div>
                        </div>
                        <input className='box-border p-4 bg-white outline-none rounded w-[360px] h-[54px]' placeholder='Ім’я Прізвище' type="text" />
                    </div>
                    <div>
                        <div className='flex my-2'>
                            <img className='w-[26px] h-[26px]' src={comment} alt="" />
                            <div className='text-13px ml-2'>
                                Коментар
                            </div>
                        </div>
                        <textarea className='box-border p-4 bg-white outline-none rounded w-[360px] h-[150px]' placeholder='Коментар' ></textarea>
                    </div>
                    <button className=' bg-[#740706] rounded w-[360px] h-[50px]'>
                        Отримати консультацію
                    </button>                    
                </form>
            </div>
        </div>

        <div className='w-screen -ml-28 bg-[#12120e] h-[150px] text-white flex items-center'>
            <div className='mx-28 flex'>
                <div>
                    <div className='text-[22px] font-bold '>
                        ПІДПИСУЙТЕСЬ!
                    </div>
                    <div className='text-[18px]'>
                        Та дізнавайтеся перші про вигідні пропозиції
                    </div>
                </div>
                <div className='flex ml-96'>
                    <input className='box-border p-4 w-[320px] h-[54px] bg-[#12120e] border-[3px] border-solid border-[#f1f1f6]' placeholder='Введіть ваш Email' type="text" />
                    <button className='h-[54px] bg-[#730706] w-[220px]'>
                        Підписатися
                    </button>
                </div>
            </div>
        </div>
        <div>
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
