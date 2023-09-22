import {  Select, Slider } from 'antd'
import React, { useState } from 'react'
import { GetFilterData } from '../../app/Catalog'
import { RootState, useAppDispatch } from '../../app/store'
import { useSelector } from 'react-redux'


export const FormFilter:React.FC<{formik:any}> = ({formik}) => {
    const {Option} =Select
    const dispatch = useAppDispatch()
    const [load,setload] =useState<boolean>(true)
    React.useEffect(()=>{
        dispatch(GetFilterData())
    },[dispatch])
    const {body_styles,colors,drive_types,engine_types,fuels,keys,makes,models,primary_damages,transmissions,odometer_borders,pre_accident_value_borders,year_borders} = useSelector((u:RootState)=>u.Catalog.Data)
    const {Data} =useSelector((u:RootState)=>u.Catalog)
    setTimeout(()=>{
        if(Data !== undefined||Data !== null ||Data !==''){
            setload(false)
        }else{
            setload(true)
        }        
    },1500)
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
    <form onSelect={formik.handleSubmit} onChange={formik.handleSubmit} className='w-[256px]  bg-[#12120e] text-white mr-5 pl-5 py-2'> 
        <div className='flex flex-col items-start'>
            <div className='text-[17px]'>
                Марка
            </div>
            <Select loading={load} onSelect={(e:any)=>formik.setFieldValue('SelectMark',e)}  placeholder="Марка" className='w-[210px] h-[40px] mt-1 text-black'>
                {makes.map((u:{label:string,value:number})=><Option key={u.value}><div className='text-black'>  {u.value}</div></Option>)}
            </Select>
        </div>
        <div >
            <div className='text-[17px]'>
                Модель
            </div>
            <Select  loading={load} onSelect={(e:any)=>formik.setFieldValue('SelectModel',e)} placeholder="Модель" className='w-[210px] h-[40px] mt-1'>
            {models.map((u:{label:string,value:number})=><Option key={u.value}><div className='text-black'>  {u.value}</div></Option>)}
            </Select>
        </div>
        <div >
            <div className='text-[17px]'>
                Рік
            </div>
            <Slider range onChange={ChangeYear} defaultValue={year_borders} value={[formik.values.YearFrom,formik.values.YearTo]} max={year_borders.max} min={year_borders.min} className='w-[190px]'></Slider>
            <div className='flex'>
                <input name='YearFrom' onChange={(e:any)=>formik.handleChange(e)} className='w-[60px] bg-[#12120e] outline-none ' placeholder='2012'/> - 
                <input name='YearTo' onChange={(e:any)=>formik.handleChange(e)} className='w-[60px] bg-[#12120e] outline-none ml-3' placeholder='2023'/>
            </div>
        </div>
        <div >
            <div className='text-[17px]'>
                Доаварійна вартість
            </div>
            <Slider range onChange={ChangePrice} defaultValue={pre_accident_value_borders} value={[formik.values.PriceFrom,formik.values.PriceTo]} max={pre_accident_value_borders.max} min={pre_accident_value_borders.min}  className='w-[190px]'></Slider>
            <div className='flex'>
                <input name='PriceFrom' onChange={(e:any)=>formik.handleChange(e)}  className='w-[60px] bg-[#12120e] outline-none ' placeholder='0$'/> - 
                <input name='PriceTo' onChange={(e:any)=>formik.handleChange(e)} className='w-[60px] bg-[#12120e] outline-none ml-3' placeholder='100$'/>
            </div>
        </div>
        <div >
            <div className='text-[17px]'>
                Пробіг
            </div>
            <Slider range onChange={ChangeMileage}   max={odometer_borders.max} min={odometer_borders.min} value={[formik.values.MileageFrom,formik.values.MileageTo]} defaultValue={odometer_borders} className='w-[190px]'></Slider>
            <div className='flex'>
                <input name='MileageFrom' onChange={(e:any)=>formik.handleChange(e)}  className='w-[80px] bg-[#12120e] outline-none ' placeholder='0 миль'/> - 
                <input name='MileageTo' onChange={(e:any)=>formik.handleChange(e)}  className='w-[120px] bg-[#12120e] outline-none ml-3' placeholder='169,995 миль'/>
            </div>
        </div>
        <div >
            <div className='text-[17px]'>
                З ключем
            </div>
            <Select loading={load} onSelect={(e:any)=>formik.setFieldValue('Keys',e)} placeholder="Ключі" className='w-[210px] h-[40px] mt-1'>
                {keys.map((u:{label:string,value:number})=><Option key={u.value}><div className='text-black'>  {u.value}</div></Option>)}
            </Select>
        </div>
        <div >
            <div className='text-[17px]'>
                Тип кузова
            </div>
            <Select loading={load} onSelect={(e:any)=>formik.setFieldValue('TypeCar',e)} placeholder="Кузов" className='w-[210px] h-[40px] mt-1'>
                {body_styles.map((u:{label:string,value:number})=><Option key={u.value}><div className='text-black'>  {u.value}</div></Option>)}
            </Select>
        </div>
        <div >
            <div className='text-[17px]'>
                Паливо
            </div>
            <Select loading={load} onSelect={(e:any)=>formik.setFieldValue('Fuel',e)} placeholder="Паливо" className='w-[210px] h-[40px] mt-1'>
                {fuels.map((u:{label:string,value:number})=><Option key={u.value}><div className='text-black'>  {u.value}</div></Option>)}
            </Select>
        </div>
        <div >
            <div className='text-[17px]'>
                Колір
            </div>
            <Select loading={load} onSelect={(e:any)=>formik.setFieldValue('Color',e)} placeholder="Колір" className='w-[210px] h-[40px] mt-1'>
                {colors.map((u:{label:string,value:number})=><Option key={u.value}><div className='text-black'>  {u.value}</div></Option>)}
            </Select>
        </div>
        <div >
            <div className='text-[17px]'>
                Привід
            </div>
            <Select loading={load} onSelect={(e:any)=>formik.setFieldValue('Reason',e)} placeholder="Привід" className='w-[210px] h-[40px] mt-1'>
                {drive_types.map((u:{label:string,value:number})=><Option key={u.value}><div className='text-black'>  {u.value}</div></Option>)}
            </Select>
        </div>
        <div >
            <div className='text-[17px]'>
                Пошкодження
            </div>
            <Select loading={load} onSelect={(e:any)=>formik.setFieldValue('Damage',e)} placeholder="Пошкодження" className='w-[210px] h-[40px] mt-1'>
            {primary_damages.map((u:{label:string,value:number})=><Option key={u.value}><div className='text-black'>  {u.value}</div></Option>)}
            </Select>
        </div>
        <div >
            <div className='text-[17px]'>
                Трансмісія
            </div>
            <Select loading={load} onSelect={(e:any)=>formik.setFieldValue('Transmission',e)} placeholder="Трансмісія" className='w-[210px] h-[40px] mt-1'>
                {transmissions.map((u:{label:string,value:number})=><Option key={u.value}><div className='text-black'>  {u.value}</div></Option>)}
            </Select>
        </div>
        <div >
            <div className='text-[17px]'>
                Об’єм двигуна
            </div>
            <Select loading={load} onSelect={(e:any)=>formik.setFieldValue('EngineSize',e)} placeholder="Об’єм двигуна" className='w-[210px] h-[40px] mt-1'>
                {engine_types.map((u:{label:string,value:number})=><Option key={u.value}><div className='text-black'>  {u.value}</div></Option>)}
            </Select>
        </div>
    </form>
  )
}
