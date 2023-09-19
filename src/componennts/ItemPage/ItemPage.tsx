import React from 'react'
import Baner from "../../accest/ItemPage/Baner.webp"
import { Item } from '../Item/Item'
import arrow from "../../accest/Main/play.png"
import EmailBlack from "../../accest/Contact/EmailBlack.svg"
import PhoneBlack from "../../accest/Contact/PhoneBlack.svg"
import { useSelector } from "react-redux"
import { RootState, useAppDispatch } from '../../app/store'
import { GetItemByID } from '../../app/ItemPage'
import { useParams } from 'react-router-dom'
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

export const ItemPage = () => {
    const { carID } = useParams()
    const dispatch = useAppDispatch()
    React.useEffect(()=>{
        dispatch(GetItemByID(Number(carID)))
    },[])
    const { VIN_code,color,current_bid,drive_type,engine_type,fuel,images_list,keys,location,lot_name,lot_number,odometer,odometer_type,primary_damage,year } = useSelector((u:RootState)=>u.ItemPage)
    const { ListItem } = useSelector( (u:RootState)=>u.Catalog)
    return (
    <div className='font-mono mt-10 flex flex-col items-start  w-screen pl-36 gap-[75px]'>
        <div ref={(el)=>{console.log(el?.scrollTop);}} className='flex flex-col'>
            <div className='font-title text-[21px] '>
                {lot_name}
            </div>
            <div className='flex gap-8'>
                <div className='w-[823px] flex flex-col gap-8'>
                    <div className='w-[823px] h-[560px] border border-solid border-[#12120e] overflow-hidden'>
                    <LightGallery
                        onInit={()=>{}}
                        speed={500}
                        plugins={[lgThumbnail, lgZoom]}
                        
                    >
                    {
                        images_list.FULL_IMAGE.map(u =><a href={u}><img className='w-[823px] h-[560px] rounded'  src={u} alt="" /></a>)
                    }
                    </LightGallery>
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
                                    {primary_damage}
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
                </div>
            </div>
        </div>
        <div className='-ml-36 mt-52 w-screen flex items-center h-[230px] bg-[#740706] ' >
            <img className='h-[404px] w-[720px]' src={Baner} alt="" />
            <div className='text-[21px] font-title font-bold w-[450px] m-10 mb-0 text-white'>
                Разом ціна автомобіля з доставкою та розмитненням:  13 000 $
            </div>
            
        </div>
        <div className=' -ml-36 flex flex-col gap-10 '>
            <div className='w-screen pl-36 h-[109px] bg-[#12120e] mt-10'>
                    <div className='ml-5 mt-4 text-[26px] font-title font-bold text-white'>
                        Схожі Авто
                    </div>
            </div>
            
            <div className='w-screen m-0 p-0 flex gap-[20px] items-center'>
                    {ListItem.map(u =><Item {...u}/>)}
            </div>
        </div>
        <div className='w-screen -ml-36 bg-[#12120e] h-[150px] text-white flex items-center'>
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
