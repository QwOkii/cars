import { Checkbox, Select, Slider } from 'antd'
import React from 'react'
import {useFormik} from "formik"

interface InitialValues{
    SelectMark:string,
    SelectModel:string,
    PriceFrom:number,
    PriceTo:number,
    YearFrom:number,
    YearTo:number,
    MileageFrom:number,
    MileageTo:number,
    Keys:number,
    TypeCar:string,
    Fuel:string,
    Color:string,
    Reason:string,
    Damage:string,
    Transmission:string,
    EngineSize:number,
    BuyNow:boolean
}

export const FormFilter = () => {
    const formik = useFormik<InitialValues>({
        initialValues:{
            SelectMark:'',
            SelectModel:'',
            PriceFrom:0,
            PriceTo:0,
            YearFrom:0,
            YearTo:0,
            MileageFrom:0,
            MileageTo:0,
            Keys:0,
            TypeCar:'',
            Fuel:'',
            Color:'',
            Reason:'',
            Damage:'',
            Transmission:'',
            EngineSize:0,
            BuyNow:false
        },
        onSubmit:()=>{

        }
    })
    const ChangeYear =(values:any)=>{
        if(values[0] < values[1]){
            formik.setFieldValue('YearFrom',values[0])
            formik.setFieldValue('YearTo',values[1])
        }
    }
    const ChangePrice =(values:any)=>{
        if(values[0] < values[1]){
            formik.setFieldValue('PriceFrom',values[0])
            formik.setFieldValue('PriceTo',values[1])
        }
    }
    const ChangeMileage =(values:any)=>{
        if(values[0] < values[1]){
            formik.setFieldValue('MileageFrom',values[0])
            formik.setFieldValue('MileageTo',values[1])
        }
    }
  return (
    <form className='w-[256px]  bg-[#12120e] text-white mr-5 pl-5 py-2'> 
        <div className='flex flex-col items-start'>
            <div className='text-[17px]'>
                Марка
            </div>
            <Select onSelect={(e:any)=>formik.setFieldValue('SelectMark',e)} placeholder="Марка" className='w-[210px] h-[40px] mt-1'></Select>
        </div>
        <div >
            <div className='text-[17px]'>
                Модель
            </div>
            <Select onSelect={(e:any)=>formik.setFieldValue('SelectModel',e)} placeholder="Модель" className='w-[210px] h-[40px] mt-1'> </Select>
        </div>
        <div >
            <div className='text-[17px]'>
                Рік
            </div>
            <Slider range onChange={ChangeYear} value={[formik.values.YearFrom,formik.values.YearTo]} className='w-[190px]'></Slider>
            <div className='flex'>
                <input name='YearFrom' onChange={(e:any)=>formik.handleChange(e)} className='w-[60px] bg-[#12120e] outline-none ' placeholder='2012'/> - 
                <input name='YearTo' onChange={(e:any)=>formik.handleChange(e)} className='w-[60px] bg-[#12120e] outline-none ml-3' placeholder='2023'/>
            </div>
        </div>
        <div >
            <div className='text-[17px]'>
                Доаварійна вартість
            </div>
            <Slider range onChange={ChangePrice} value={[formik.values.PriceFrom,formik.values.PriceTo]}  className='w-[190px]'></Slider>
            <div className='flex'>
                <input name='PriceFrom' onChange={(e:any)=>formik.handleChange(e)}  className='w-[60px] bg-[#12120e] outline-none ' placeholder='0$'/> - 
                <input name='PriceTo' onChange={(e:any)=>formik.handleChange(e)} className='w-[60px] bg-[#12120e] outline-none ml-3' placeholder='100$'/>
            </div>
        </div>
        <div >
            <div className='text-[17px]'>
                Пробіг
            </div>
            <Slider range onChange={ChangeMileage} value={[formik.values.MileageFrom,formik.values.MileageTo]} defaultValue={[0,100]} className='w-[190px]'></Slider>
            <div className='flex'>
                <input name='MileageFrom' onChange={(e:any)=>formik.handleChange(e)}  className='w-[80px] bg-[#12120e] outline-none ' placeholder='0 миль'/> - 
                <input name='MileageTo' onChange={(e:any)=>formik.handleChange(e)}  className='w-[120px] bg-[#12120e] outline-none ml-3' placeholder='169,995 миль'/>
            </div>
        </div>
        <div className='flex '>
                <Checkbox onClick={(e)=>formik.setFieldValue('BuyNow',e)}/>
            <div className='text-[15px] ml-2'>
                Купити зараз
            </div>
        </div>
        <div >
            <div className='text-[17px]'>
                З ключем
            </div>
            <Select onSelect={(e:any)=>formik.setFieldValue('Keys',e)} placeholder="Ключі" className='w-[210px] h-[40px] mt-1'> </Select>
        </div>
        <div >
            <div className='text-[17px]'>
                Тип кузова
            </div>
            <Select onSelect={(e:any)=>formik.setFieldValue('TypeCar',e)} placeholder="Кузов" className='w-[210px] h-[40px] mt-1'> </Select>
        </div>
        <div >
            <div className='text-[17px]'>
                Паливо
            </div>
            <Select onSelect={(e:any)=>formik.setFieldValue('Fuel',e)} placeholder="Паливо" className='w-[210px] h-[40px] mt-1'> </Select>
        </div>
        <div >
            <div className='text-[17px]'>
                Колір
            </div>
            <Select onSelect={(e:any)=>formik.setFieldValue('Color',e)} placeholder="Колір" className='w-[210px] h-[40px] mt-1'> </Select>
        </div>
        <div >
            <div className='text-[17px]'>
                Привід
            </div>
            <Select onSelect={(e:any)=>formik.setFieldValue('Reason',e)} placeholder="Привід" className='w-[210px] h-[40px] mt-1'> </Select>
        </div>
        <div >
            <div className='text-[17px]'>
                Пошкодження
            </div>
            <Select onSelect={(e:any)=>formik.setFieldValue('Damage',e)} placeholder="Пошкодження" className='w-[210px] h-[40px] mt-1'> </Select>
        </div>
        <div >
            <div className='text-[17px]'>
                Трансмісія
            </div>
            <Select onSelect={(e:any)=>formik.setFieldValue('Transmission',e)} placeholder="Трансмісія" className='w-[210px] h-[40px] mt-1'> </Select>
        </div>
        <div >
            <div className='text-[17px]'>
                Об’єм двигуна
            </div>
            <Select onSelect={(e:any)=>formik.setFieldValue('EngineSize',e)} placeholder="Об’єм двигуна" className='w-[210px] h-[40px] mt-1'> </Select>
        </div>
    </form>
  )
}
