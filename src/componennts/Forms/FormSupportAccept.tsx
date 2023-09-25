import React from 'react'
import comment from "../../accest/AboutUS/comment.svg"
import phone from "../../accest/AboutUS/phone.svg"
import user from "../../accest/AboutUS/user.svg"
import {useFormik} from "formik"
import { useAppDispatch } from '../../app/store'
import { SendQuestions } from '../../app/Message'

interface InitialValues{
    name:string,
    phone:string,
    comment:string
}

export const FormSupportAccept = () => {
    const disatch = useAppDispatch()
    const formik = useFormik<InitialValues>({
        initialValues:{
            comment:'',
            name:'',
            phone:'',
        },
        onSubmit:({comment,name,phone})=>{
            disatch(SendQuestions({comment,name,phone_number:phone,message_type:''}))
        }
    })
  return (
    <form className='mt-14  flex flex-col gap-3 ml-20'>
        <div className='font-title font-bold text-[22px] '>
            Або заповніть форму для замовлення консультації
        </div>
        <div>
            Ми завжди відкриті до співпраці
        </div>
        <div>
            <div className='flex my-2'>
                <img className='w-[26px] h-[26px]' src={phone} alt="" />
                <div className='text-13px ml-2'>
                    Номер телефону
                </div>
            </div>
            <input name='phone' onChange={(e:any)=>formik.handleChange(e)} className=' text-black box-border p-4 bg-white outline-none rounded w-[360px] h-[54px]' placeholder='+380 XX XX XX XXX' type="text" />
        </div>
        <div>
            <div className='flex my-2 '>
                <img className='w-[26px] h-[26px]' src={user} alt="" />
                <div className='text-13px ml-2'>
                    Ваше ім’я
                </div>
            </div>
            <input name='name' onChange={(e:any)=>formik.handleChange(e)} className=' text-black box-border p-4 bg-white outline-none rounded w-[360px] h-[54px]' placeholder='Ім’я Прізвище' type="text" />
        </div>
        <div>
            <div className='flex my-2'>
                <img className='w-[26px] h-[26px]' src={comment} alt="" />
                <div className='text-13px ml-2'>
                    Коментар
                </div>
            </div>
            <textarea name='comment' onChange={(e:any)=>formik.handleChange(e)} className=' text-black box-border p-4 bg-white outline-none rounded w-[360px] h-[150px]' placeholder='Коментар' ></textarea>
        </div>
        <button onClick={(e:any)=>formik.handleSubmit(e)} className=' bg-[#740706] rounded w-[360px] h-[50px]'>
            Отримати консультацію
        </button>                    
    </form>
  )
}
