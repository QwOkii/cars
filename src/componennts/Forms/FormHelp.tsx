import { Select } from 'antd'
import React from 'react'
import {useFormik} from "formik"

interface InitialValues{
    SelectMark:string,
    YearFrom:number,
    YearTo:number,
    PriceFrom:number,
    PriceTo:number,
    phone:string,
    name:string
}

export const FormHelp = () => {
    const formik = useFormik<InitialValues>({
        initialValues:{
            SelectMark:'',
            YearFrom:0,
            YearTo:0,
            PriceFrom:0,
            PriceTo:0,
            phone:'',
            name:''
        },
        onSubmit:()=>{

        }
    })
  return (
    <form className='w-[300px] sm:w-[600px]  xl:w-[950px] xl:h-[240px] bg-white p-5 text-[#12120e] drop-shadow-lg'>
        <div className='text-[17px] font-bold font-title'>
            ДОПОМОГА У ПІДБОРІ АВТО
        </div>
        <div className='flex flex-col xl:flex-row'>
            <div>
                <div className='text-[15px]'>
                    Марка
                </div>
                <Select onSelect={(e:any)=>formik.setFieldValue('SelectMark',e)} placeholder="Марка" className='w-[210px] h-[40px] mt-1'></Select>
            </div>
            <div className='flex'>
                <div className='mx-2'>
                    <div className='text-[15px]'>
                        Рік від
                    </div>
                    <Select onSelect={(e:any)=>formik.setFieldValue('YearFrom',e)} placeholder="Рік від" className='w-[120px] h-[40px] mt-1'></Select>
                </div>
                <div className='mx-2'>
                    <div className='text-[15px]'>
                        Рік до
                    </div>
                    <Select onSelect={(e:any)=>formik.setFieldValue('YearTo',e)} placeholder="Рік до" className='w-[120px] h-[40px] mt-1'></Select>
                </div>
            </div>
            <div className='flex'>
                <div className='mx-2'>
                    <div className='text-[15px]'>
                        Ціна від
                    </div>
                    <Select onSelect={(e:any)=>formik.setFieldValue('PriceFrom',e)} placeholder="Ціна від" className='w-[120px] h-[40px] mt-1'></Select>
                </div>
                <div className='mx-2'>
                    <div className='text-[15px]'>
                        Ціна до
                    </div>
                    <Select onSelect={(e:any)=>formik.setFieldValue('PriceTo',e)} placeholder="Ціна до" className='w-[120px] h-[40px] mt-1'></Select>
                </div>
            </div>
        </div>
        <div className='flex  flex-col xl:flex-row'>
            <div className='mx-2'>
                <div className='text-[15px]'>
                    Телефон
                </div>
                <input name='' onChange={(e:any)=>formik.handleChange(e)} type="text" className=' p-2 w-[202px] h-[32px] rounded border-[3px] border-solid border-[#12120e]' placeholder='+380 ХХ ХХ ХХХ' />
            </div>
            <div className='mx-2'>
                <div className='text-[15px]'>
                    Ваше ім’я
                </div>
                <input name='' onChange={(e:any)=>formik.handleChange(e)} type="text" className=' p-2 w-[252px] h-[32px] rounded border-[3px] border-solid border-[#12120e]' placeholder='Ім’я Прізвище' />
            </div>
            <button className='text-white font-bold rounded w-[260px] h-[40px] bg-[#740706] mx-2 mt-4'>
                Вибрати авто
            </button>
        </div>
    </form>
  )
}
