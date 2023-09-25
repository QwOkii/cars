import { Select } from 'antd'
import React from 'react'
import {useFormik} from "formik"
import { RootState, useAppDispatch } from '../../app/store'
import { PickUpCar } from '../../app/Message'
import { useSelector } from 'react-redux'

interface InitialValues{
    name:string,
    phone:string,
    CarType:string,
    budgetFrom:string,
    budgetTo:string
}

export const FromCopart = () => {
    const { Option } = Select
    const {body_styles,pre_accident_values} = useSelector((u:RootState)=>u.Catalog.Data)
    const { isload } = useSelector((u:RootState)=>u.Catalog)
    const dispatch = useAppDispatch()
    const formik = useFormik<InitialValues>({
        initialValues:{
            name:'',
            phone:'',
            CarType:'',
            budgetFrom:'',
            budgetTo:''
        },
        onSubmit:({CarType,budgetFrom,budgetTo,name,phone})=>{
            dispatch(PickUpCar({auto:CarType,budget_from:budgetFrom,budget_to:budgetTo,name,phone_number:phone}))
        }
    })
    if(isload){
        return(
            <div>

            </div>
        )
    }else{
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
                        <Select onSelect={(e)=>formik.setFieldValue('budgetFrom',e)}  className='w-[120px] sm:w-[220px]  ' placeholder="Бюджет Від">
                            {pre_accident_values.map((u:{label:string,value:number})=><Option key={u.label}><div className='text-black'>  {u.label}</div></Option>)}
                        </Select>
                    </div>
                    <div>
                        <div className='text-[17px]'>
                            Бюджет До
                        </div>
                        <Select onSelect={(e)=>formik.setFieldValue('budgetTo',e)} className='w-[120px] sm:w-[220px] ' placeholder="Бюджет До">
                            {pre_accident_values.map((u:{label:string,value:number})=><Option key={u.label}><div className='text-black'>  {u.label}</div></Option>)}
                        </Select>
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
                    <Select onSelect={(e)=>formik.setFieldValue('CarType',e)} className='w-[320px] sm:w-[475px] ' placeholder="Пікап">
                    {body_styles.map((u:{label:string,value:number})=><Option key={u.label}><div className='text-black'>  {u.label}</div></Option>)}
                    </Select>
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

}
