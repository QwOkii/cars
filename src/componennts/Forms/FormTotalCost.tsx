import { Select } from 'antd'
import React from 'react'
import { useFormik } from 'formik'

interface InitialValues{
    Auction:string,
    WinningBet:number,
    AuctionPlatform:string,
    TypeTransport:string,
    EngineType:string,
    EngineSize:string,
    YearIssue:number

}

export const FormTotalCost = () => {
    const formik = useFormik<InitialValues>({
        initialValues:{
            Auction:'',
            AuctionPlatform:'',
            TypeTransport:'',
            WinningBet:0,
            EngineSize:'',
            EngineType:'',
            YearIssue:0
        },
        onSubmit:(values)=>{
            alert(JSON.stringify(values))
        }
    })
  return (
    <form className=' w-[330px] mx-3 sm:w-[637px]  bg-[#12120e] flex flex-col text-white p-5 box-border font-mono'>
        <div className='font-title text-[23px] font-bold'>
            КАЛЬКУЛЯТОР ЗАГАЛЬНОЇ ВАРТОСТІ
        </div>
        <div className='border-b border-solid border-[#f1f1f6] my-8'>
            <div className='text-[18px]  font-bold'>
                Крок 1: аукціон
            </div>
            <div className='flex flex-col sm:flex-row  gap-[10px]'>
                <div>
                    <div>
                        Аукціон
                    </div>
                    <Select onSelect={(e:any)=>formik.setFieldValue('Auction',e)} placeholder="Аукціон" className='bg-[#12120e] w-[260px] h-[40px]'></Select>
                </div>
                <div className='text-[#aeaeb2]'>
                    <div>
                        Переможна ставка
                    </div>
                    <input name='WinningBet' onChange={formik.handleChange} placeholder='Переможна ставка, $' type="text" className='outline-none p-3 w-[260px] h-[40px] border-4 border-solid border-[#aeaeb2] bg-[#12120e] rounded' />
                </div>
            </div>
            <div className='flex mb-5 justify-between'>
                Вартість авто на аукціоні: <div className='text-[20px] font-bold text-[#ad3d3a]'>$0</div>
            </div>
        </div>
        <div className='border-b border-solid border-[#f1f1f6] my-8'>
            <div className='text-[18px]  font-bold'>
                Крок 2: доставка
            </div>
            <div className='flex flex-col sm:flex-row  gap-[10px] text-[#aeaeb2]'>
                <div>
                    <div>
                        Майданчик аукціону
                    </div>
                    <Select onSelect={(e:any)=>formik.setFieldValue('AuctionPlatform',e)} placeholder="Майданчик аукціону" className='w-[260px] h-[40px]'></Select>
                </div>
                <div>
                    <div>
                        Тип транспорту
                    </div>
                    <Select onSelect={(e:any)=>formik.setFieldValue('TypeTransport',e)} placeholder="Тип транспорту" className='w-[260px] h-[40px]'></Select>
                </div>
            </div>
            <div className='flex mb-5 justify-between'>
                Вартість доставки: <div className='text-[20px] font-bold text-[#ad3d3a]'>$0</div>
            </div>
        </div>
        <div className='border-b border-solid border-[#f1f1f6] my-8' >
            <div className='text-[18px]  font-bold'>
                Крок 3: розмитнення
            </div>
            <div className='flex flex-col sm:flex-row  flex-wrap gap-[10px]'>
                <div>
                    <div>
                        Тип двигуна
                    </div>
                    <Select onSelect={(e:any)=>formik.setFieldValue('EngineType',e)} placeholder="Тип двигуна" className='bg-[#12120e] w-[260px] h-[40px]'></Select>
                </div>
                <div>
                    <div>
                        Об’єм двигуна
                    </div>
                    <input name='' onChange={formik.handleChange} placeholder='Об’єм двигуна' type="text" className='outline-none p-3 w-[260px] h-[40px] border-4 border-solid border-[#aeaeb2] bg-[#12120e] rounded'/>
                </div>
                <div>
                    <div>
                        Рік випуску
                    </div>
                    <Select onSelect={(e:any)=>formik.setFieldValue('YearIssue',e)} placeholder="Рік випуску" className='bg-[#12120e] w-[260px] h-[60px]'></Select>
                </div>
            </div>
            <div className='flex mb-5 justify-between text-[18px]'>
                Вартість розмитнення: <div className='text-[20px] font-bold text-[#ad3d3a]'>$0</div>
            </div>
        </div>
        <div>
            <div className='flex mb-5 justify-between text-[21px] font-bold my-2'>
                Загальна вартість:<div className='text-[20px]  text-[#ad3d3a]'>$0</div>
            </div>
            <button onClick={(e:any)=>formik.handleSubmit(e)} className='w-[300px] h-[55px] text-[19px] bg-[#740706] rounded' >
                Детальний розрахунок
            </button>
        </div>
    </form> 
  )
}
