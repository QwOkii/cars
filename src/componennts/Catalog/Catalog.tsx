import { Select } from 'antd'
import React from 'react'
import { Item } from './Item'
import play from "../../accest/Main/play.png"
import obert from "../../accest/Catalog/obert.svg"
import Baner1 from "../../accest/Catalog/Baner1.webp"
import Baner2 from "../../accest/Main/Baner2.webp"
import EmailBlack from "../../accest/Contact/EmailBlack.svg"
import PhoneBlack from "../../accest/Contact/PhoneBlack.svg"
import { BlackTheme } from '../BlackTheme/BlackTheme'
import { FormFilter } from '../Forms/FormFilter'
import { FormHelp } from '../Forms/FormHelp'
import { FormQuestionsBorder } from '../Forms/FormQuestionsBorder'
import { GetListofItem } from '../../app/Catalog'
import { RootState, useAppDispatch } from '../../app/store'
import { useSelector } from "react-redux"

export const Catalog = () => {
    const dispatch = useAppDispatch()
    React.useEffect(()=>{
        dispatch(GetListofItem())
    },[dispatch])
    const {ListItem } = useSelector((u:RootState)=>u.Catalog )
  return (
    <div className='font-mono mt-10 flex flex-col items-start w-screen ml-5 md:pl-56 gap-[75px]'>
        <div className=' font-mono sm:min-h-[1400px]'>
            <div className='font-title text-[21px] font-bold m-8'>
                АВТОМОБІЛІ З АУКЦІОНІВ США
            </div>
            <div className='flex ml-10 sm:ml-0'>
                <div className=' flex-col hidden xl:flex'>
                    <BlackTheme>
                        <FormFilter/>                      
                    </BlackTheme>

                    <div className='w-[256px] bg-[#12120e] text-white mr-5 mt-5 pl-5 py-2 hidden xl:block'>
                        <div>
                            Отримувати новини на Email
                        </div>
                        <input placeholder='Введіть ваш email' type="text" className='border-[3px] pl-2 border-solid border-[#f1f1f6] bg-[#12120e] w-[210px] h-[40px] outline-none rounded my-4'/>
                        <button className='text-[15px] font-bold w-[210px] h-[40px] bg-[#740706] rounded'>
                            Підписатися
                        </button>
                    </div>
                </div>
                <div>
                    
                    <div className='flex xl:w-[950px] justify-between'>
                        <button className='block tablet:hidden rounded w-[210px] h-[40px] bg-[#740706] text-white'>
                            Фільтр
                        </button>
                        <div className=' hidden tablet:block'>
                            Знайдено 10 000 авто
                        </div>
                        <div className='hidden tablet:flex'>
                            <input type="checkbox" name="" id=""  className='w-[20px] h-[20px] mr-4'/> 
                            <div>
                                Виключити майбутні лоти
                            </div>
                        </div>
                        <Select  className='w-[210px] h-[40px]' placeholder="Відсортувати"></Select>
                    </div>
                    <div className='flex flex-col ml-8 sm:-ml-20 tablet:ml-0'>
                        {
                            ListItem.map(u=><Item key={u.VIN_code} {...u} />)
                        }
                        <FormHelp/>
                        <div className='flex gap-[10px] text-[#12120e] font-bold text-[14px] mt-[200px]'>
                            {/*додати редірект на верх при натисканні*/}
                            <div  className='w-[42.5px] h-[42.5px] font-bold bg-[#740706] rounded text-white flex justify-center items-center'>
                                <div>
                                    1
                                </div>
                            </div>
                            <div className='w-[42.5px] h-[42.5px] font-bold bg-white rounded flex justify-center items-center'>
                                2
                            </div>
                            <div className='min-w-[42.5px] h-[42.5px] font-bold bg-white rounded flex justify-center items-center ml-10'>
                                200
                            </div>
                            <div className='min-w-[42.5px] h-[42.5px] font-bold bg-white rounded flex justify-center items-center'>
                                <img className='w-[20px] h-[20px]' src={play} alt="" />
                            </div>
                            <button className=' flex w-[176px] h-[42px] border-[3px] border-solid border-[#740706] rounded justify-center items-center'>
                                Показати ще 
                                <img className='w-[22px] h-[30px] rotate-12 ml-3' src={obert} alt="" />
                            </button>
                        </div>
                    </div>
                </div>          
            </div>
        </div>
        <div className='flex'>
            <div className=' xl:w-[630px] mr-[50px] flex flex-col items-center'>
                <div className='mt-10'>
                    <div className='text-[21px] font-bold font-title  mb-5'>
                        Пошук та підбір б/в машин на майданчиках американських автомобілів
                    </div>
                    <div className='text-[15px]'>
                        Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту
                    </div>
                </div>
                <div className='mt-10'>
                    <div className='text-[25px] font-bold font-title  mb-5'>
                        Як вдало купити автомобіль в Америці на аукціоні?
                    </div>
                    <div className='text-[15px]'>
                        Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту
                    </div>
                </div>
                <div className='mt-10'>
                    <div className='text-[25px] font-bold font-title  mb-5'>
                        Биті чи не биті авто з аукціону, що обрати
                    </div>
                    <div className='text-[15px]'>
                        Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту
                    </div>
                </div>
                <div className='text-[#740706] underline decoration-1 text-[18px] hover:italic mt-10'>
                    Згорнути
                </div>
            </div>
            <div>
                <img className='w-[482px] h-[321px] hidden xl:block' src={Baner1} alt="" />
            </div>
        </div>
        <div className='xl:ml-16 mt-8'>
            <div className='text-[#12120e] ml-12 sm:ml-0 text-[30px] font-title font-bold'>
                Популярні питання
            </div>
            <div className='flex flex-col  xl:flex-row ml-12 sm:ml-0 text-white gap-[10px] mb-10'>
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
            <div className='flex tablet:-mb-32 '>
                    <FormQuestionsBorder/>
                <div className='hidden xl:block'> 
                    <img className='ml-80' src={Baner2} alt="" />
                </div>
            </div>
        </div> 
        <div className='w-screen -ml-[235px] bg-[#12120e] min-h-[230px] text-white flex items-center'>
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
