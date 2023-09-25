import { useFormik } from 'formik'
import React,{ useState } from 'react'
import { useAppDispatch } from '../../app/store'
import { SendQuestions } from '../../app/Message'

interface Props{
    title:string,
    button:string,
    style?:string,
    styleButton?:string,
    message_type:string
}
interface InitialValues{
    name:string,
    phone_number:string,
    commnet:string
}

export const PopUpWithoutCommnet:React.FC<Props> = ({button,title,style,styleButton,message_type}) => {
    const [isOpen,SetisOpen] = useState<boolean>(false)
    const dispatch = useAppDispatch()
    const formik = useFormik<InitialValues>({initialValues:{
        commnet:'',
        name:'',
        phone_number:''
    },onSubmit:({commnet,name,phone_number})=>{
        dispatch(SendQuestions({comment:commnet,message_type:message_type,name:name,phone_number:phone_number}))
        
    }})
  return (

    <div>
        <button onClick={()=>SetisOpen(true)} className={styleButton !==undefined?styleButton:'bg-[#740706] rounded h-[45px] w-[180px] text-[14px]'}>
            {button}
        </button>
        {
            isOpen &&    <div  onBlur={()=>SetisOpen(false)} className={style !==undefined?style:'absolute z-[70] top-full left-1/3'}>
                    <form onSubmit={formik.handleSubmit} className='bg-[#f1f1f6] fixed left-2 sm:left-1/3 bottom-36 sm:bottom-0 gap-[10px] z-[1000] text-black rounded-lg p-5 flex flex-col justify-start items-center box-border w-[350px] sm:w-[520px] h-[560px] my-5 border border-solid border-[#12120e]'>
                        <div className='flex justify-between w-full'> 
                            <div className='text-[21px] font-title font-bold'>
                                {title}
                            </div>
                            <div onClick={()=>SetisOpen(false)} className='text-[32px] text-[#740706] cursor-pointer'>
                                X
                            </div>
                        </div>
                        <div>
                            <div>
                                Ім'я 
                            </div>
                            <input name='name' onChange={formik.handleChange} className='w-[220px] md:w-[420px] h-[40px] outline-none p-5 rounded ' type="text" placeholder="Ім'я та прізвище  " />
                        </div>
                        <div>
                            <div>
                                    Телефон 
                            </div>
                            <input name='phone_number'  onChange={formik.handleChange}  className='w-[220px] md:w-[420px] h-[40px] outline-none p-5 rounded ' type="text" placeholder="+ 380 XX XX XX XXX  " />
                        </div>
                        <div>
                            <div>
                                Коментар 
                            </div>
                            <textarea name='commnet'  onChange={formik.handleChange}  className='w-[220px] md:w-[420px] h-[150px] outline-none p-5 rounded' placeholder='Коментар' >

                            </textarea>
                        </div>
                        <button type='submit' onClick={(e:any)=>formik.handleSubmit(e)} className='bg-[#740706] rounded h-[45px] w-[220px] md:w-[420px] text-white cursor-pointer'>
                            Відправити 
                        </button>
                    </form>
            </div>
        }
    </div>
  )
}