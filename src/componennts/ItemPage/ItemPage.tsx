import React from 'react'
import Baner from "../../accest/ItemPage/Baner.webp"
import { Item } from '../Item/Item'
import arrow from "../../accest/Main/play.png"
import EmailBlack from "../../accest/Contact/EmailBlack.svg"
import PhoneBlack from "../../accest/Contact/PhoneBlack.svg"
import { useSelector } from "react-redux"
import { RootState, useAppDispatch } from '../../app/store'
import ImageGallery from "react-image-gallery";
import { GetItemByID } from '../../app/ItemPage'
import { useParams } from 'react-router-dom'

export const ItemPage = () => {
    const { carID } = useParams()
    const dispatch = useAppDispatch()
    React.useEffect(()=>{
        console.log(carID);
        dispatch(GetItemByID(Number(carID)))
    },[])
    const { VIN_code,color,current_bid,drive_type,engine_type,fuel,images_list,keys,location,lot_name,lot_number,odometer,odometer_type,primary_damage,year } = useSelector((u:RootState)=>u.ItemPage)
    const { ListItem } = useSelector( (u:RootState)=>u.Catalog)
    return (
    <div className='font-mono mt-10 flex flex-col items-start w-screen pl-56 gap-[75px]'>
        <div className='flex flex-col'>
            <div className='font-title text-[21px] '>
                {lot_name}
            </div>
            <div className='flex gap-8'>
                <div className='w-[823px] flex flex-col gap-8'>
                    <div className='w-[823px] h-[560px] border border-solid border-[#12120e]'>
                        <ImageGallery className='w-[823px] h-[560px] border border-solid border-[#12120e]' items={images_list.FULL_IMAGE}/>
                    </div>  
                    <div className='flex gap-8'>
                        <div className='w-[395px] h-[327px] flex flex-col text-white'>
                            <div className='w-[395px] h-[47px] bg-[#740706]  font-title rounded-tl rounded-tr flex justify-center items-center'>
                                Інформація про авто
                            </div>
                            <div className='h-[280px] w-[395px] bg-[#12120e] p-5 box-border rounded-bl rounded-br flex flex-col gap-4'>
                                <div className='flex justify-between'>
                                    <div>
                                        Рік
                                    </div>
                                    <div>
                                        {year}
                                    </div>
                                </div>
                                <div className='flex justify-between'>
                                    <div>
                                        Тип палива
                                    </div>
                                    <div>
                                        {fuel}
                                    </div>
                                </div>
                                <div className='flex justify-between'>
                                    <div>
                                        Пробіг
                                    </div>
                                    <div>
                                        {odometer}
                                    </div>
                                </div>
                                <div className='flex justify-between'>
                                    <div>
                                        Об'єм двигуна
                                    </div>
                                    <div>
                                        {engine_type}
                                    </div>
                                </div>
                                <div className='flex justify-between'>
                                    <div>
                                        Привід
                                    </div>
                                    <div>
                                        {drive_type}
                                    </div>
                                </div>
                                <div className='flex justify-between'>
                                    <div>
                                        Колір
                                    </div>
                                    <div>
                                        {color}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-[395px] h-[327px] flex flex-col text-white '>
                            <div className='w-[395px] h-[47px] bg-[#740706] font-title rounded-tl rounded-tr flex justify-center items-center'>
                                Пошкодження
                            </div>
                            <div className='h-[280px] w-[395px] bg-[#12120e] p-5 flex flex-col gap-4 box-border rounded-bl rounded-br'>
                                <div>
                                    <div className='font-title text-[21px] font-bold'>
                                        Основні::
                                    </div>
                                    <div>
                                        {primary_damage}
                                    </div>
                                </div>
                                <div>
                                    <div className='font-title text-[21px] font-bold'>
                                        Другорядні:
                                    </div>
                                    <div>
                                        
                                    </div>
                                </div>
                                <button className='w-[260px] h-[45px] rounded bg-[#740706]'>
                                    Підібрати запчастини
                                </button>
                                <button className='w-[260px] h-[45px] rounded bg-[#740706]'>
                                    Оцінити ремонт
                                </button>
                            </div>
                        </div>
                    </div>
                    <div >
                        Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад
                    </div>
                </div>
                <div className='w-[395px] flex flex-col gap-8 text-white'>
                    <div className='w-[395px] h-[327px] flex flex-col '>
                        <div className='w-[395px] h-[47px] bg-[#740706]  font-title rounded-tl rounded-tr flex justify-center items-center'>
                            Інформація про лот
                        </div>
                        <div className='h-[280px] w-[395px] bg-[#12120e] box-border p-5 rounded-bl rounded-br flex flex-col gap-4'>
                            <div className='flex justify-between'>
                                <div>
                                    Місцезнаходження
                                </div>
                                <div>
                                    {location}
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <div>
                                    Ключі
                                </div>
                                <div>
                                    {keys}
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <div>
                                    VIN код
                                </div>
                                <div>
                                    {VIN_code}
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <div>
                                    Стан
                                </div>
                                <div>

                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <div>
                                    Пошкодження
                                </div>
                                <div>
                                {primary_damage}
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <div>
                                    Реальний пробіг
                                </div>
                                <div>
                                    {odometer}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[395px] h-[327px] flex flex-col '>
                        <div className='w-[395px] h-[47px] bg-[#740706] text-white font-title rounded-tl rounded-tr flex justify-center items-center'>
                            Інформація про ставки
                        </div>
                        <div className='h-[280px] w-[395px] bg-[#12120e] box-border p-5 rounded-bl rounded-br flex flex-col gap-4'>
                            <div className='border-b-2 pb-1 border-solid border-[#740706] w-[350px]'>
                                Лот  {lot_number}
                            </div>
                            <div className='flex justify-between'>
                                <div>
                                    Поточна ставка:
                                </div>
                                <div>
                                    {current_bid}
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <div>
                                    Купити зараз:
                                </div>
                                <div>
                                    6 400$
                                </div>
                            </div>
                            <div className='flex justify-between border-b-2 pb-1 border-solid border-[#740706] w-[350px]'>
                                <div>
                                    Ваша ставка:
                                </div>
                                <input className='border p-1 border-solid border-[#740706] rounded-lg' placeholder='5 900$'/>
                                    
                            </div>
                            <div className='text-12 text-center'>
                                При ставці 5 900$
                            </div>
                            <div className='font-title text-[21px] font-bold text-center'>
                                Ціна авто в Україні:  13 987 $
                            </div>
                        </div>
                    </div>
                    <div className='w-[395px] h-[327px] flex flex-col '>
                        <div className='w-[395px] h-[47px] bg-[#740706] text-white font-title rounded-tl rounded-tr flex justify-center items-center'>
                            Не втрачай часу
                        </div>
                        <div className='h-[280px] w-[395px] bg-[#12120e] box-border p-5 rounded-bl rounded-br flex flex-col gap-4 items-center justify-end'>
                            <div className='flex gap-4 mb-10'>
                                <div className=''>
                                    До аукціону:
                                </div>
                                <div className='text-[14px]'>
                                    <div>
                                        3
                                    </div>
                                    <div>
                                        дні
                                    </div>
                                </div>
                                <div className='text-[14px]'>
                                    <div>
                                        7
                                    </div>
                                    <div>
                                        годин
                                    </div>
                                </div>
                                <div className='text-[14px]'>
                                    <div>
                                        33
                                    </div>
                                    <div>
                                        хвилин
                                    </div>
                                </div>
                                <div className='text-[14px]'>
                                    <div>
                                        56
                                    </div>
                                    <div>
                                        секунд
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='flex gap-[10px] mb-[10px]'>
                                    <button className='bg-[#740706] rounded h-[45px] w-[180px] text-[14px]'>
                                        Запропонувати ставку
                                    </button>
                                    <button className='bg-[#740706] rounded h-[45px] w-[180px] text-[14px]'>
                                        Купити зараз
                                    </button>
                                </div>
                                <button className='bg-[#740706] rounded h-[45px] w-[370px] text-[14px]'>
                                    Замовити консультацію
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex flex-col'>
            <div className='font-title font-bold text-[21px] my-3'>
                Розрахунок вартості
            </div>
            <div className='flex gap-6'>
                <div className='w-[400px] h-[510px] bg-[#12120e] flex flex-col justify-between box-border p-5 text-white'>
                    <div className='text-[21px] font-bold font-title text-center'>
                        Аукціон
                    </div>
                    <div className='flex gap-3 text-[18px]'>
                        <div>
                            Усього:
                        </div>
                        <div>
                            5 800 $
                        </div>
                    </div>
                </div>
                <div className='w-[400px] h-[510px] bg-[#12120e] flex flex-col justify-between box-border p-5 text-white'>
                    <div className='text-[21px] font-bold font-title text-center'>
                        Доставка
                    </div>
                    <div className='flex gap-3 text-[18px]'>
                        <div>
                            Усього:
                        </div>
                        <div>
                            5 800 $
                        </div>
                    </div>
                </div>
                <div className='w-[400px] h-[510px] bg-[#12120e] flex flex-col justify-between box-border p-5 text-white'>
                    <div className='text-[21px] font-bold font-title text-center'>
                        Розмитнення
                    </div>
                    <div className='flex gap-3 text-[18px]'>
                        <div>
                            Усього:
                        </div>
                        <div>
                            1 200 $
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='-ml-56 mt-52 w-screen flex items-center h-[230px] bg-[#740706] ' >
            <img className='h-[404px] w-[720px]' src={Baner} alt="" />
            <div className='text-[21px] font-title font-bold w-[450px] m-10 mb-0 text-white'>
                Разом ціна автомобіля з доставкою та розмитненням:  13 000 $
            </div>
            
        </div>
        <div className='m-10 -ml-56 flex flex-col gap-10 '>
            <div className='w-screen pl-56 h-[109px] bg-[#12120e] '>
                    <div className='ml-5 mt-4 text-[26px] font-title font-bold text-white'>
                        Схожі Авто
                    </div>
            </div>
            
            <div className='w-screen flex gap-[20px] items-center'>
                <img src={arrow} alt="" className='w-[28px] h-[25px] ml-32 scale-x-[-1] scale-y-[1]'/>
                    {ListItem.map(u =><Item {...u}/>)}
                <img src={arrow} alt="" className='w-[28px] h-[25px]'/>
            </div>
        </div>
        <div className='w-screen -ml-56 bg-[#12120e] h-[150px] text-white flex items-center'>
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
