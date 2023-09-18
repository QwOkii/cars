import React from 'react'
import Baner1 from '../../accest/Cooperation/Baner1.webp'
import Baner2 from '../../accest/Cooperation/Baner2.webp'
import Baner3 from "../../accest/Main/Baner2.webp"
import cargo from '../../accest/Cooperation/cargo.webp'
import doc from '../../accest/Cooperation/doc.webp'
import dolar from '../../accest/Cooperation/dolar.webp'
import hammer from '../../accest/Cooperation/hammer.webp'
import EmailBlack from "../../accest/Contact/EmailBlack.svg"
import PhoneBlack from "../../accest/Contact/PhoneBlack.svg"
import { FormQuestionsBorder } from '../Forms/FormQuestionsBorder'
import { FormCooperation } from '../Forms/FormCooperation'

export const Cooperation = () => {
  return (
    <div className='font-mono mt-10 flex flex-col items-start w-screen pl-56 gap-[75px]'>
        <div className='flex gap-11 mx-10 justify-between'>
            <div className='w-[475px]'>
                <div className='text-[21px] font-title font-bold mb-5'>
                    Ми завжди відкриті до співпраці
                </div>
                <div>
                    Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад
                </div>
            </div>
            <img className='w-[530px] ml-44 h-[270px] rounded hidden xl:block ' src={Baner1} alt="" />
        </div>
        <FormCooperation/>
        <div className='flex flex-col gap-5 '>
            <div className='text-[21px] font-title font-bold text-center'>
                Вигідні умови співпраці для оптових клієнтів
            </div>
            <div className='flex flex-col xl:flex-row gap-[15px] text-white'>
                <div className='flex flex-col items-center'>
                    <div className='w-[90px] h-[90px] rounded-full bg-[#740706] flex justify-center items-center -mb-10 z-40'>
                        <img className='w-[60px] h-[60px]' src={hammer} alt="" />
                    </div>
                    <div className='w-[310px] h-[110px] bg-[#12120e] rounded-md flex justify-center items-center'>
                    Дилерський доступ до майданчиків
                    </div>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='w-[90px] h-[90px] rounded-full bg-[#740706] flex justify-center items-center -mb-10 z-40'>
                        <img className='w-[60px] h-[60px]' src={doc} alt="" />
                    </div>
                    <div className='w-[310px] h-[110px] bg-[#12120e] rounded-md flex justify-center items-center'>
                    Повний документальний супровід
                    </div>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='w-[90px] h-[90px] rounded-full bg-[#740706] flex justify-center items-center -mb-10 z-40'>
                        <img className='w-[60px] h-[60px]' src={dolar} alt="" />
                    </div>
                    <div className='w-[310px] h-[110px] bg-[#12120e] rounded-md flex justify-center items-center'>
                    Мінімальні комісійні ставки
                    </div>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='w-[90px] h-[90px] rounded-full bg-[#740706] flex justify-center items-center -mb-10 z-40'>
                        <img className='w-[60px] h-[60px]' src={cargo} alt="" />
                    </div>
                    <div className='w-[310px] h-[110px] bg-[#12120e] rounded-md flex justify-center items-center'>
                    Доставка за оптовими тарифами
                    </div>
                </div>
            </div>
        </div>
        <div className='flex flex-col xl:flex-row gap-[50px]'>
            <div className='w-[600px]'>
                <div className='text-[21px] font-title font-bold '>
                    Працюємо з найкращими аукціонами Америки
                </div>
                <div className='text-[15px] w-[545px]'>
                    Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад 
                </div>
            </div>
            <div className='flex flex-wrap gap-4 w-[600px]'>
                <div className='w-[280px] h-[110px] bg-[#12120e] rounded text-white font-title font-bold text-[21px]'>
                    Аукціон №
                </div>
                <div className='w-[280px] h-[110px] bg-[#12120e] rounded text-white font-title font-bold text-[21px]'>
                    Аукціон №
                </div>
                <div className='w-[280px] h-[110px] bg-[#12120e] rounded text-white font-title font-bold text-[21px]'>
                    Аукціон №
                </div>
                <div className='w-[280px] h-[110px] bg-[#12120e] rounded text-white font-title font-bold text-[21px]'>
                    Аукціон №
                </div>
                <div className='w-[280px] h-[110px] bg-[#12120e] rounded text-white font-title font-bold text-[21px]'>
                    Аукціон №
                </div>
                <div className='w-[280px] h-[110px] bg-[#12120e] rounded text-white font-title font-bold text-[21px]'>
                    Аукціон №
                </div>
            </div>
        </div>
        <div className='-ml-56 pl-60 bg-[#12120e] w-screen min-h-[900px] text-white flex flex-col gap-5'>
            <div className='text-[23px] font-title font-bold my-4'>
                Співпрацюючи з нами, ви отримуєте: 
            </div>
            <div className='flex flex-col xl:flex-row text-[#12120e] gap-5 mb-10'>
                <ul className='list-inside list-disc flex flex-col gap-5'>
                    <li className='bg-white rounded-md w-[380px] h-[330px]'>
                        Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад 
                    </li>
                    <li className='bg-white rounded-md w-[380px] h-[330px]'>
                        Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад 
                    </li>
                </ul>
                <ul className='list-inside list-disc flex flex-col gap-5'>
                    <li className='bg-white rounded-md w-[380px] h-[220px]'>
                        Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад 
                    </li>
                    <li className='bg-white rounded-md w-[380px] h-[220px]'>
                        Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад 
                    </li>
                </ul>
                <ul className='list-inside list-disc flex flex-col gap-5'>
                    <li className='bg-white rounded-md w-[380px] h-[330px]'>
                        Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад 
                    </li>
                    <li className='bg-white rounded-md w-[380px] h-[330px]'>
                        Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад 
                    </li>
                    <li className='bg-white rounded-md w-[380px] h-[220px]'>
                        Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад 
                    </li>
                </ul>
            </div>
        </div>
        <div className='flex gap-12'>
            <div className='text-[15px] flex flex-col gap-5 w-[530px]'>
                <div className='text-[21px] font-title font-bold'>
                    Географія доставки
                </div>
                <div>
                    Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад 
                </div>
                <div>
                    Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад 
                </div>
            </div>
            <img className='w-[750px] h-[350px] hidden xl:block ' src={Baner2} alt="" />
        </div>
        <div className='xl:ml-16 mt-8'>
            <div className='text-[#12120e] text-[30px] font-title font-bold'>
                Популярні питання
            </div>
            <div className='flex flex-col xl:flex-row text-white gap-[10px] mb-10'>
                <div className='flex flex-col gap-[10px]'>
                    <details  id='details' className='bg-[#12120e] w-[510px] h-[110px] box-border rounded flex flex-col justify-center items-center p-5'>
                        <summary className='font-title text-[20px]  h-[60px] text-center pt-5 marker:text-[#740706]'>
                            З якими аукціонами ми працюємо? 
                        </summary>
                        <div className='h-[250px] max-w-[470px] mx-10'>
                            Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту
                            Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту
                        </div>
                    </details> 
                    <details  id='details' className='bg-[#12120e] w-[510px] h-[110px] box-border rounded flex flex-col justify-center items-center p-5'>
                        <summary className='font-title text-[20px]  h-[60px] text-center pt-5 marker:text-[#740706]'>
                            Як вибрати авто із США?
                        </summary>
                        <div className='h-[250px] w-[470px] mx-10'>
                            Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту
                            Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту
                        </div>
                    </details> 
                    <details id='details' className='bg-[#12120e] w-[510px] h-[110px] box-border rounded flex flex-col justify-center items-center p-5'>
                        <summary className='font-title text-[20px]h-[60px] text-center pt-5 marker:text-[#740706]'>
                            З якими аукціонами ми працюємо? 
                        </summary>
                        <div className='h-[250px] w-[470px] mx-10'>
                            Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту
                            Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту
                        </div>
                    </details> 
                </div>
                <div className='flex flex-col gap-[10px]'>
                    <details id='details' className='bg-[#12120e] w-[510px] h-[110px] box-border rounded flex flex-col justify-center items-center p-5'>
                        <summary className='font-title text-[20px]  h-[60px] text-center pt-5 marker:text-[#740706]'>
                            З якими аукціонами ми працюємо? 
                        </summary>
                        <div className='h-[250px] w-[470px] mx-10'>
                            Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту
                            Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту
                        </div>
                    </details> 
                    <details id='details' className='bg-[#12120e] w-[510px] h-[110px] box-border rounded flex flex-col justify-center items-center p-5'>
                        <summary className='font-title text-[20px]h-[60px] text-center pt-5 marker:text-[#740706]'>
                            З якими аукціонами ми працюємо? 
                        </summary>
                        <div className='h-[250px] w-[470px] mx-10'>
                            Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту
                            Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту
                        </div>
                    </details> 
                    <details id='details' className='bg-[#12120e] w-[510px] h-[110px] box-border rounded flex flex-col justify-center items-center p-5'>
                        <summary className='font-title text-[20px]h-[60px] text-center pt-5 marker:text-[#740706]'>
                            З якими аукціонами ми працюємо? 
                        </summary>
                        <div className='h-[250px] w-[470px] mx-10'>
                            Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту
                            Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту
                        </div>
                    </details> 
                </div>
            </div>
            <div className='  flex -mb-32 '>
                <FormQuestionsBorder/>
                <div className='hidden xl:block'> 
                    <img className='ml-80' src={Baner3} alt="" />
                </div>
            </div>
        </div> 
        <div className='w-screen -ml-56 bg-[#12120e] min-h-[230px] text-white flex items-center'>
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

