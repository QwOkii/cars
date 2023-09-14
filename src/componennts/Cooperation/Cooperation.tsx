import React from 'react'
import Baner1 from '../../accest/Cooperation/Baner1.webp'
import Baner2 from '../../accest/Cooperation/Baner2.webp'
import Baner3 from "../../accest/Main/Baner2.webp"
import phone from '../../accest/Cooperation/phone.svg'
import user from '../../accest/Cooperation/user.svg'
import comment from '../../accest/Cooperation/comment.svg'
import cargo from '../../accest/Cooperation/cargo.webp'
import doc from '../../accest/Cooperation/doc.webp'
import dolar from '../../accest/Cooperation/dolar.webp'
import hammer from '../../accest/Cooperation/hammer.webp'
import EmailBlack from "../../accest/Contact/EmailBlack.svg"
import PhoneBlack from "../../accest/Contact/PhoneBlack.svg"

export const Cooperation = () => {
  return (
    <div className='font-mono mt-10 flex flex-col items-start w-screen pl-28 gap-[75px]'>
        <div className='flex gap-11'>
            <div className='w-[475px]'>
                <div className='text-[21px] font-title font-bold'>
                    Ми завжди відкриті до співпраці
                </div>
                <div>
                    Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад
                </div>
            </div>
            <img className='w-[530px] h-[270px] rounded' src={Baner1} alt="" />
        </div>
        <form className='flex flex-col gap-4'>
            <div className='text-[21px] font-bold font-title'>
                Отримайте вигідні умови партнерства
            </div>
            <div className='flex gap-[30px]'>
                <div>
                    <div className='flex gap-4 text-[15px] my-2'>
                        <img className='w-[26px] h-[26px]' src={phone} alt="" />
                        <div>
                            Номер телефону
                        </div>
                    </div>
                    <input placeholder='+380 XX XX XX XXX' className='h-[60px] w-[250px] border-[3px] border-solid border-[#12120e] rounded box-border p-5' type="text" />
                </div>
                <div>
                    <div className='flex gap-4 text-[15px] my-2'>
                        <img className='w-[26px] h-[26px]' src={user} alt="" />
                        <div>
                            Ваше ім’я
                        </div>
                    </div>
                    <input placeholder='Ім’я Прізвище' className='h-[60px] w-[250px] border-[3px] border-solid border-[#12120e] rounded box-border p-5' type="text" />
                </div>
            </div>
            <div>
                <div className='flex gap-4 text-[15px] my-2'>
                    <img className='w-[26px] h-[26px]' src={comment} alt="" />
                    <div>
                        Коментар
                    </div>
                </div>
                <textarea placeholder='Коментар' className='w-[530px] h-[200px]  border-[3px] border-solid border-[#12120e] rounded box-border p-5'></textarea>
            </div>
            <button className='w-[420px] h-[60px] bg-[#740706] rounded text-white'>
                Стати Партнером
            </button>
        </form>
        <div className='flex flex-col gap-5 '>
            <div className='text-[21px] font-title font-bold text-center'>
                Вигідні умови співпраці для оптових клієнтів
            </div>
            <div className='flex gap-[15px] text-white'>
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
        <div className='flex gap-[50px]'>
            <div className='w-[600px]'>
                <div className='text-[21px] font-title font-bold '>
                    Працюємо з найкращими аукціонами Америки
                </div>
                <div className='text-[15px] w-[545px]'>
                    Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад 
                </div>
            </div>
            <div className='flex flex-wrap gap-4'>
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
        <div className='-ml-28 pl-28 bg-[#12120e] w-screen min-h-[900px] text-white flex flex-col gap-5'>
            <div className='text-[21px] font-title font-bold'>
                Співпрацюючи з нами, ви отримуєте: 
            </div>
            <div className='flex text-[#12120e] gap-5 mb-10'>
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
            <img className='w-[750px] h-[350px]' src={Baner2} alt="" />
        </div>
        <div className='ml-16 mt-8'>
            <div className='text-[#12120e] text-[30px] font-title font-bold'>
                Популярні питання
            </div>
            <div className='flex text-white gap-[10px]'>
                <div className='flex flex-col gap-[10px]'>
                    <details  id='details' className='bg-[#12120e] rounded flex flex-col justify-center items-center p-5'>
                        <summary className='font-title text-[20px] w-[510px]  h-[60px] text-center pt-5 marker:text-[#740706]'>
                            З якими аукціонами ми працюємо? 
                        </summary>
                        <div className='h-[250px] w-[470px] mx-10'>
                            Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту
                            Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту
                        </div>
                    </details> 
                    <details  id='details' className='bg-[#12120e] rounded flex flex-col justify-center items-center p-5'>
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
            <div className='m-16  flex '>
                <form className='ml-10 flex flex-col gap-[10px] border-[3px] h-[620px] border-solid bg-white border-[#12120e] p-5 rounded-lg z-50 '>
                    <div className='font-title text-[26px] font-bold'>
                        ЗАЛИШИЛИСЯ ПИТАННЯ?
                    </div>
                    <div className='font-bold text-[20px]'>
                        Наш менеджер охоче відповість на кожне з них
                    </div>
                    <div>
                        <div className='flex mb-1'> 
                            <img src={phone} className='w-[30px] h-[30px] mr-2' alt="" />Номер телефону
                        </div>
                        <input type="text" className='w-[420px] h-[60px] border-4 border-solid border-[#12120e] rounded' placeholder='+380 XX XX XX XXX'/>
                    </div>
                    <div>
                        <div className='flex  mb-1'>
                            <img src={user} className='w-[30px] h-[30px] mr-2' alt="" />Ваше ім’я
                        </div>
                        <input type="text" className='w-[420px] h-[60px] border-4 border-solid border-[#12120e] rounded' placeholder='Ім’я Прізвище'/>
                    </div>
                    <div>
                        <div className='flex  mb-1'>
                            <img src={comment} className='w-[30px] h-[30px] mr-2' alt="" />Коментар
                        </div>
                        <textarea  rows={30} className='w-[420px] h-[150px] border-4 border-solid border-[#12120e] rounded ' placeholder='Коментар'></textarea>
                    </div>
                    <button className='text-[19px] w-[420px] h-[60px] bg-[#740706] text-white rounded'>
                        Відправити
                    </button>
                </form>
                <div> 
                    <img className='ml-[150px]' src={Baner3} alt="" />
                </div>
            </div>
        </div> 
        <div className='w-screen -ml-28 bg-[#12120e] h-[200px] text-white flex items-center -mt-[180px] -top-5'>
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

