import React from 'react'
import PhoneWhite from "../../accest/Contact/PhoneWhite.svg"
import UserWhite from "../../accest/Contact/UserWhite.svg"
import commentWhite from "../../accest/Contact/commentWhite.svg"
import EmailBlack from "../../accest/Contact/EmailBlack.svg"
import PhoneBlack from "../../accest/Contact/PhoneBlack.svg"

export const Contact = () => {
  return (
    <div className='mt-10 ml-16 flex flex-col xl:flex-row gap-[50px]'>
        <form className='w-[600px] h-[600px] text-white bg-[#12120e] p-5 flex flex-col gap-[25px] rounded-md'>
            <div className='font-title text-[21px] font-bold'>
                Зв‘яжіться з нами!
            </div>
            <div className='my-2'>
                Заповніть форму, щоб отримати консультацію нашого експерта
            </div>
            <div className='flex gap-[20px]'>
                <div>
                    <div className='flex mb-2'>
                        <img className='w-[30px] h-[30px]' src={PhoneWhite} alt="" />
                        <div className='text-[15px]'>
                            Номер телефону
                        </div>
                    </div>
                    <input type="text" className='w-[246px] h-[60px] outline-none rounded p-3' placeholder='+380 XX XX XX XXX'/>
                </div>
                <div>
                    <div className='flex mb-2'>
                        <img className='w-[30px] h-[30px]' src={UserWhite} alt="" />
                        <div className='text-[15px]'>
                            Ваше ім’я
                        </div>
                    </div>
                    <input type="text" className='w-[246px] h-[60px] outline-none rounded p-3' placeholder='Ім’я Прізвище'/>
                </div>
            </div>
            <div className='mt-3'>
                <div className='flex mb-2'>
                    <img className='w-[30px] h-[30px]' src={commentWhite} alt="" />
                    <div className='text-[15px]'>
                    Коментар
                    </div>
                </div>
                <textarea className='h-[150px] w-[530px] p-3 rounded' placeholder='Коментар'></textarea>
            </div>
            <button className='text-[15px] font-bold h-[60px] w-[390px] bg-[#740706] rounded'>Зв’язатися</button>
        </form>
        <div>
            <div className='text-[26px] font-bold font-title'>
                КОНТАКТИ
            </div>
            <div className='flex gap-[10px] text-[18px] font-bold'>
                <img className='w-[35px] h-[35px]' src={PhoneBlack} alt="" />
                <div>
                    Телефон:
                </div>
                <div>
                    +380 99 491 32 25
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
  )
}
