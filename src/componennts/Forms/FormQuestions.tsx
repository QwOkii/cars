import React from 'react'
import phone from "../../accest/Main/phone.svg"
import comment from "../../accest/Main/comment.svg"
import user from "../../accest/Main/user.svg"
import { useFormik } from 'formik'

interface InitialValues{
    phone:string,
    name:string,
    comment:string
}

export const FormQuestions = () => {
    const formik = useFormik<InitialValues>({
        initialValues:{
            comment:'',
            name:'',
            phone:''
        },
        onSubmit:(values)=>{
            alert(JSON.stringify(values))
        }
    })
  return (
    <form className='ml-10 flex flex-col gap-[10px]'>
        <div className='font-title text-[26px] font-bold'>
            ЗАЛИШИЛИСЯ ПИТАННЯ?
        </div>
        <div className='font-bold text-[20px]'>
            Наш менеджер охоче відповість на кожне з них
        </div>
        <div>
            <div className='flex mb-1'> 
                <img src={phone} className='w-[30px] h-[30px] mr-2' alt="" />Номер телефону
            </div>
            <input name='phone' onChange={formik.handleChange} className='outline-none box-border p-4 w-[240px] sm:w-[420px] h-[60px] border-4 border-solid border-[#12120e] rounded' placeholder='+380 XX XX XX XXX'/>
        </div>
        <div>
            <div className='flex  mb-1'>
                <img src={user} className='w-[30px] h-[30px] mr-2' alt="" />Ваше ім’я
            </div>
            <input name='name' onChange={formik.handleChange} className='outline-none box-border p-4 w-[240px] sm:w-[420px] h-[60px] border-4 border-solid border-[#12120e] rounded' placeholder='Ім’я Прізвище'/>
        </div>
        <div>
            <div className='flex  mb-1'>
                <img src={comment} className='w-[30px] h-[30px] mr-2' alt="" />Коментар
            </div>
            <textarea name='comment' onChange={formik.handleChange} rows={30} className='outline-none box-border p-4 w-[240px] sm:w-[420px] h-[150px] border-4 border-solid border-[#12120e] rounded' placeholder='Коментар'></textarea>
        </div>
        <button onClick={(e:any)=>formik.handleSubmit(e)} className='text-[19px] w-[240px] sm:w-[420px] h-[60px] bg-[#740706] text-white rounded'>
            Відправити
        </button>
    </form>
  )
}
