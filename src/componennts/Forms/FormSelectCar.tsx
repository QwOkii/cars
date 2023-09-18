import { Select } from 'antd'
import React from 'react'
import { useFormik } from 'formik'

interface InitialValues{
    SelectMark:string,
    SelectModel:string,
    YearBefore:number,
    YearAfter:number
}

export const FormSelectCar = () => {
    const formik =useFormik<InitialValues>({
        initialValues:{
            SelectMark:'',
            SelectModel:'',
            YearAfter:0,
            YearBefore:0
        },
        onSubmit:(values)=>{
            alert(JSON.stringify(values))
        }
    })

  return (
    <form className='p-10 ml-4 sm:ml-0 w-[350px] sm:w-[606px] md:h-[375px] bg-[#12120e] rounded text-white z-10'>
        <div className='font-title text-[18px] '>Виберіть Авто:</div>
        <div>
            <div className='flex flex-col sm:flex-row'>
                <div className='flex flex-col  mx-3'>
                    <label htmlFor="mark" className='my-5'>Марка</label>
                    <Select onSelect={(e:string)=>formik.setFieldValue('SelectMark',e)} placeholder='Виберыть марку' className='w-[240px] h-[40px] text-black '></Select>
                </div>
                <div className='flex flex-col  mx-3'>
                    <label htmlFor="mark" className='my-5'>Модель</label>
                    <Select onSelect={(e:string)=>formik.setFieldValue('SelectModel',e)} placeholder='Виберыть Модель' className='w-[240px] h-[40px] text-black '></Select>
                </div>
            </div>
            <div className='flex'>
                <div className='flex flex-col  mx-3'>
                    <label htmlFor="mark" className='my-5'>Рік від</label>
                    <Select onSelect={(e:string)=>formik.setFieldValue('YearAfter',e)} placeholder='Виберыть марку' className=' w-[120px] sm:w-[240px] h-[40px] text-black '></Select>
                </div>
                <div className='flex flex-col mx-3'>
                    <label htmlFor="mark" className='my-5'>Рік до</label>
                    <Select onSelect={(e:string)=>formik.setFieldValue('YearBefore',e)} placeholder='Виберыть марку' className=' w-[120px] sm:w-[240px] h-[40px] text-black '></Select>
                </div>
            </div>
        </div>
        <button onClick={(e:any)=> formik.handleSubmit(e)} className='bg-[#740706] ml-5 sm:ml-0 w-[240px] sm:w-[140px] h-[41px] my-5 rounded'>Знайти</button>
    </form> 
  )
}
