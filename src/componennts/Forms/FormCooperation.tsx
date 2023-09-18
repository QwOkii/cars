import React from 'react'
import phone from '../../accest/Cooperation/phone.svg'
import user from '../../accest/Cooperation/user.svg'
import comment from '../../accest/Cooperation/comment.svg'
import { useFormik} from "formik"

interface InitialValues{
    phone:string,
    name:string,
    comment:string
}

export const FormCooperation = () => {
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
    <form className=' mx-10 flex flex-col gap-4'>
        <div className='text-[21px] font-bold font-title'>
            Отримайте вигідні умови партнерства
        </div>
        <div className='flex gap-[30px]'>
            <div>
                <div className='flex gap-4 text-[15px] my-2'>
                    <img className='w-[26px] h-[26px]' src={phone} alt="" />
                    <div>
                        Номер телефону
                    </div>
                </div>
                <input name='phone' onChange={formik.handleChange} placeholder='+380 XX XX XX XXX' className='h-[60px] w-[250px] border-[3px] border-solid border-[#12120e] rounded box-border p-5' type="text" />
            </div>
            <div>
                <div className='flex gap-4 text-[15px] my-2'>
                    <img className='w-[26px] h-[26px]' src={user} alt="" />
                    <div>
                        Ваше ім’я
                    </div>
                </div>
                <input name='name' onChange={formik.handleChange} placeholder='Ім’я Прізвище' className='h-[60px] w-[250px] border-[3px] border-solid border-[#12120e] rounded box-border p-5' type="text" />
            </div>
        </div>
        <div>
            <div className='flex gap-4 text-[15px] my-2'>
                <img className='w-[26px] h-[26px]' src={comment} alt="" />
                <div>
                    Коментар
                </div>
            </div>
            <textarea name='comment' onChange={formik.handleChange} placeholder='Коментар' className='w-[530px] h-[200px]  border-[3px] border-solid border-[#12120e] rounded box-border p-5'></textarea>
        </div>
        <button onClick={(e:any)=>formik.handleSubmit(e)} className='w-[420px] h-[60px] bg-[#740706] rounded text-white'>
            Стати Партнером
        </button>
    </form>
  )
}
