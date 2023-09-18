import { Select } from 'antd'
import React from 'react'
import {useFormik} from "formik"

interface InitialValues{
    name:string,
    phone:string,
    CarType:string,
    budgetFrom:number,
    budgetTo:number
}

export const FromCopart = () => {
    const formik = useFormik<InitialValues>({
        initialValues:{
            name:'',
            phone:'',
            CarType:'',
            budgetFrom:0,
            budgetTo:0
        },
        onSubmit:(values:InitialValues)=>{
            alert(JSON.stringify(values))
        }
    })
  return (
    <form className='w-[320px] sm:w-[533px] mx-5  bg-[#f1f1f6] flex flex-col items-center'>
        <div className='text-[22px] font-bold mt-[45px]'>
            Підібрати авто на аукціоні Copart
        </div>
        <div className='flex justify-between w-[320px] sm:w-[475px] gap-[35px] mt-5'>
            <div>
                <div className='text-[17px]'>
                    Бюджет Від
                </div>
                <Select onSelect={(e)=>formik.setFieldValue('budgetFrom',e)}  className='w-[120px] sm:w-[220px]  ' placeholder="Бюджет Від"></Select>
            </div>
            <div>
                <div className='text-[17px]'>
                    Бюджет До
                </div>
                <Select onSelect={(e)=>formik.setFieldValue('budgetTo',e)} className='w-[120px] sm:w-[220px] ' placeholder="Бюджет До"></Select>
            </div>
        </div>
        <div className='my-5'>
            <div>
                Телефон
            </div>
            <input name='phone' onChange={(e:any)=>formik.handleChange(e)} className='box-border p-3 w-[320px] sm:w-[475px] h-[60px] border-4 border-solid border-[#12120e]' placeholder='+380 ХХ ХХ ХХ ХХХ' type="text" />
        </div>
        <div>
            <div className='text-[17px]'>
                Тип автомобіля
            </div>
            <Select onSelect={(e)=>formik.setFieldValue('CarType',e)} className='w-[320px] sm:w-[475px] ' placeholder="Пікап"></Select>
        </div>
        <div className='my-5'>
            <div>
                Ваше ім’я
            </div>
            <input name='name' onChange={(e:any)=>formik.handleChange(e)} className='box-border p-3 w-[320px] sm:w-[475px] h-[60px] border-4 border-solid border-[#12120e]' placeholder='Ім’я Прізвище' type="text" />
        </div>
        <button onClick={(e:any)=>formik.handleSubmit(e)} className='bg-[#740706] w-[320px] sm:w-[475px] h-[55px] text-white'>
            Замовити підбір
        </button>
    </form>
  )
}
