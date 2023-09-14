import { Select, Slider } from 'antd'
import React from 'react'
import { Item } from './Item'
import play from "../../accest/Main/play.png"
import obert from "../../accest/Catalog/obert.svg"
import Baner1 from "../../accest/Catalog/Baner1.webp"
import Baner2 from "../../accest/Main/Baner2.webp"
import phone from "../../accest/Main/phone.svg"
import comment from "../../accest/Main/comment.svg"
import user from "../../accest/Main/user.svg"

export const Catalog = () => {
  return (
    <div className='w-screen bg-[#f1f1f6]'>
        <div className='ml-16 font-mono h-[1400px]'>
            <div className='font-title text-[21px] font-bold m-8'>
                АВТОМОБІЛІ З АУКЦІОНІВ США
            </div>
            <div className='flex '>
                <div className='flex flex-col '>
                    <form className='w-[256px]  bg-[#12120e] text-white mr-5 pl-5 py-2'> 
                        <div className='flex flex-col items-start'>
                            <div className='text-[17px]'>
                                Марка
                            </div>
                            <Select placeholder="Марка" className='w-[210px] h-[40px] mt-1'></Select>
                        </div>
                        <div >
                            <div className='text-[17px]'>
                                Модель
                            </div>
                            <Select placeholder="Модель" className='w-[210px] h-[40px] mt-1'> </Select>
                        </div>
                        <div >
                            <div className='text-[17px]'>
                                Рік
                            </div>
                            <Slider range defaultValue={[0,100]} className='w-[190px]'></Slider>
                            <div className='flex'>
                                <input className='w-[60px] bg-[#12120e] outline-none ' placeholder='2012'/> - 
                                <input  className='w-[60px] bg-[#12120e] outline-none ml-3' placeholder='2023'/>
                            </div>
                        </div>
                        <div >
                            <div className='text-[17px]'>
                                Доаварійна вартість
                            </div>
                            <Slider range defaultValue={[0,100]} className='w-[190px]'></Slider>
                            <div className='flex'>
                                <input className='w-[60px] bg-[#12120e] outline-none ' placeholder='0$'/> - 
                                <input  className='w-[60px] bg-[#12120e] outline-none ml-3' placeholder='100$'/>
                            </div>
                        </div>
                        <div >
                            <div className='text-[17px]'>
                                Пробіг
                            </div>
                            <Slider range defaultValue={[0,100]} className='w-[190px]'></Slider>
                            <div className='flex'>
                                <input className='w-[80px] bg-[#12120e] outline-none ' placeholder='0 миль'/> - 
                                <input  className='w-[120px] bg-[#12120e] outline-none ml-3' placeholder='169,995 миль'/>
                            </div>
                        </div>
                        <div className='flex '>
                            <input type="checkbox" name="" id="" />
                            <div className='text-[15px] ml-2'>
                                Купити зараз
                            </div>
                        </div>
                        <div >
                            <div className='text-[17px]'>
                                З ключем
                            </div>
                            <Select placeholder="Ключі" className='w-[210px] h-[40px] mt-1'> </Select>
                        </div>
                        <div >
                            <div className='text-[17px]'>
                                Тип кузова
                            </div>
                            <Select placeholder="Кузов" className='w-[210px] h-[40px] mt-1'> </Select>
                        </div>
                        <div >
                            <div className='text-[17px]'>
                                Паливо
                            </div>
                            <Select placeholder="Паливо" className='w-[210px] h-[40px] mt-1'> </Select>
                        </div>
                        <div >
                            <div className='text-[17px]'>
                                Колір
                            </div>
                            <Select placeholder="Колір" className='w-[210px] h-[40px] mt-1'> </Select>
                        </div>
                        <div >
                            <div className='text-[17px]'>
                                Привід
                            </div>
                            <Select placeholder="Привід" className='w-[210px] h-[40px] mt-1'> </Select>
                        </div>
                        <div >
                            <div className='text-[17px]'>
                                Пошкодження
                            </div>
                            <Select placeholder="Пошкодження" className='w-[210px] h-[40px] mt-1'> </Select>
                        </div>
                        <div >
                            <div className='text-[17px]'>
                                Трансмісія
                            </div>
                            <Select placeholder="Трансмісія" className='w-[210px] h-[40px] mt-1'> </Select>
                        </div>
                        <div >
                            <div className='text-[17px]'>
                                Об’єм двигуна
                            </div>
                            <Select placeholder="Об’єм двигуна" className='w-[210px] h-[40px] mt-1'> </Select>
                        </div>
                    </form>
                    <div className='w-[256px] bg-[#12120e] text-white mr-5 mt-5 pl-5 py-2'>
                        <div>
                            Отримувати новини на Email
                        </div>
                        <input placeholder='Введіть ваш email' type="text" className='border-[3px] pl-2 border-solid border-[#f1f1f6] bg-[#12120e] w-[210px] h-[40px] outline-none rounded my-4'/>
                        <button className='text-[15px] font-bold w-[210px] h-[40px] bg-[#740706] rounded'>
                            Підписатися
                        </button>
                    </div>
                </div>
                <div>
                    
                    <div className='flex w-[950px] justify-between'>
                        <div>
                            Знайдено 10 000 авто
                        </div>
                        <div className='flex'>
                            <input type="checkbox" name="" id=""  className='w-[20px] h-[20px] mr-4'/> 
                            <div>
                                Виключити майбутні лоти
                            </div>
                        </div>
                        <Select className='w-[210px] h-[40px]' placeholder="Відсортувати"></Select>
                    </div>
                    <div className='flex flex-col '>
                        <Item/>
                        <Item/>
                        <Item/>
                        <form className='w-[950px] h-[240px] bg-white p-5 text-[#12120e] drop-shadow-lg'>
                            <div className='text-[17px] font-bold font-title'>
                                ДОПОМОГА У ПІДБОРІ АВТО
                            </div>
                            <div className='flex '>
                                <div>
                                    <div className='text-[15px]'>
                                        Марка
                                    </div>
                                    <Select placeholder="Марка" className='w-[210px] h-[40px] mt-1'></Select>
                                </div>
                                <div className='flex'>
                                    <div className='mx-2'>
                                        <div className='text-[15px]'>
                                            Рік від
                                        </div>
                                        <Select placeholder="Рік від" className='w-[120px] h-[40px] mt-1'></Select>
                                    </div>
                                    <div className='mx-2'>
                                        <div className='text-[15px]'>
                                            Рік до
                                        </div>
                                        <Select placeholder="Рік до" className='w-[120px] h-[40px] mt-1'></Select>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <div className='mx-2'>
                                        <div className='text-[15px]'>
                                            Ціна від
                                        </div>
                                        <Select placeholder="Ціна від" className='w-[120px] h-[40px] mt-1'></Select>
                                    </div>
                                    <div className='mx-2'>
                                        <div className='text-[15px]'>
                                            Ціна до
                                        </div>
                                        <Select placeholder="Ціна до" className='w-[120px] h-[40px] mt-1'></Select>
                                    </div>
                                </div>
                            </div>
                            <div className='flex '>
                                <div className='mx-2'>
                                    <div className='text-[15px]'>
                                        Телефон
                                    </div>
                                    <input type="text" className=' p-2 w-[202px] h-[32px] rounded border-[3px] border-solid border-[#12120e]' placeholder='+380 ХХ ХХ ХХХ' />
                                </div>
                                <div className='mx-2'>
                                    <div className='text-[15px]'>
                                        Ваше ім’я
                                    </div>
                                    <input type="text" className=' p-2 w-[252px] h-[32px] rounded border-[3px] border-solid border-[#12120e]' placeholder='Ім’я Прізвище' />
                                </div>
                                <button className='text-white font-bold rounded w-[260px] h-[40px] bg-[#740706] mx-2 mt-4'>
                                    Вибрати авто
                                </button>
                            </div>
                        </form>
                        <div className='flex gap-[10px] text-[#12120e] font-bold text-[14px] mt-[200px]'>
                            <div className='w-[42.5px] h-[42.5px] font-bold bg-[#740706] rounded text-white flex justify-center items-center'>
                                <div>
                                    1
                                </div>
                            </div>
                            <div className='w-[42.5px] h-[42.5px] font-bold bg-white rounded flex justify-center items-center'>
                                2
                            </div>
                            <div className='min-w-[42.5px] h-[42.5px] font-bold bg-white rounded flex justify-center items-center ml-10'>
                                200
                            </div>
                            <div className='min-w-[42.5px] h-[42.5px] font-bold bg-white rounded flex justify-center items-center'>
                                <img className='w-[20px] h-[20px]' src={play} alt="" />
                            </div>
                            <button className=' flex w-[176px] h-[42px] border-[3px] border-solid border-[#740706] rounded justify-center items-center'>
                                Показати ще 
                                <img className='w-[22px] h-[30px] rotate-12 ml-3' src={obert} alt="" />
                            </button>
                        </div>
                    </div>
                </div>          
            </div>
        </div>
        <div className='flex ml-16 mt-5'>
            <div className='w-[630px] mr-[50px] flex flex-col items-center'>
                <div className='mt-10'>
                    <div className='text-[21px] font-bold font-title  mb-5'>
                        Пошук та підбір б/в машин на майданчиках американських автомобілів
                    </div>
                    <div className='text-[15px]'>
                        Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту
                    </div>
                </div>
                <div className='mt-10'>
                    <div className='text-[25px] font-bold font-title  mb-5'>
                        Як вдало купити автомобіль в Америці на аукціоні?
                    </div>
                    <div className='text-[15px]'>
                        Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту
                    </div>
                </div>
                <div className='mt-10'>
                    <div className='text-[25px] font-bold font-title  mb-5'>
                        Биті чи не биті авто з аукціону, що обрати
                    </div>
                    <div className='text-[15px]'>
                        Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту
                    </div>
                </div>
                <div className='text-[#740706] underline decoration-1 text-[18px] hover:italic mt-10'>
                    Згорнути
                </div>
            </div>
            <div>
                <img className='w-[482px] h-[321px] ' src={Baner1} alt="" />
            </div>
        </div>
        <div className='ml-16 mt-8'>
            <div className='text-[#12120e] text-[30px] font-title font-bold'>
                Популярні питання
            </div>
            <div className='flex text-white gap-[10px]'>
                <div className='flex flex-col gap-[10px]'>
                    <details  id='details' className='bg-[#12120e] rounded flex flex-col justify-center items-center p-5'>
                        <summary className='font-title text-[20px] w-[510px]  h-[60px] text-center pt-5 marker:text-[#740706]'>
                            З якими аукціонами ми працюємо? 
                        </summary>
                        <div className='h-[250px] w-[470px] mx-10'>
                            Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту
                            Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту
                        </div>
                    </details> 
                    <details  id='details' className='bg-[#12120e] rounded flex flex-col justify-center items-center p-5'>
                        <summary className='font-title text-[20px] w-[510px]  h-[60px] text-center pt-5 marker:text-[#740706]'>
                            Як вибрати авто із США?
                        </summary>
                        <div className='h-[250px] w-[470px] mx-10'>
                            Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту
                            Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту
                        </div>
                    </details> 
                    <details id='details' className='bg-[#12120e] rounded flex flex-col justify-center items-center p-5'>
                        <summary className='font-title text-[20px] w-[510px]  h-[60px] text-center pt-5 marker:text-[#740706]'>
                            З якими аукціонами ми працюємо? 
                        </summary>
                        <div className='h-[250px] w-[470px] mx-10'>
                            Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту
                            Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту
                        </div>
                    </details> 
                </div>
                <div className='flex flex-col gap-[10px]'>
                    <details id='details' className='bg-[#12120e] rounded flex flex-col justify-center items-center p-5'>
                        <summary className='font-title text-[20px] w-[510px]  h-[60px] text-center pt-5 marker:text-[#740706]'>
                            З якими аукціонами ми працюємо? 
                        </summary>
                        <div className='h-[250px] w-[470px] mx-10'>
                            Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту
                            Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту
                        </div>
                    </details> 
                    <details id='details' className='bg-[#12120e] rounded flex flex-col justify-center items-center p-5'>
                        <summary className='font-title text-[20px] w-[510px]  h-[60px] text-center pt-5 marker:text-[#740706]'>
                            З якими аукціонами ми працюємо? 
                        </summary>
                        <div className='h-[250px] w-[470px] mx-10'>
                            Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту
                            Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту
                        </div>
                    </details> 
                    <details id='details' className='bg-[#12120e] rounded flex flex-col justify-center items-center p-5'>
                        <summary className='font-title text-[20px] w-[510px]  h-[60px] text-center pt-5 marker:text-[#740706]'>
                            З якими аукціонами ми працюємо? 
                        </summary>
                        <div className='h-[250px] w-[470px] mx-10'>
                            Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту
                            Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту
                        </div>
                    </details> 
                </div>
            </div>
            <div className='m-16  flex '>
                <form className='ml-10 flex flex-col gap-[10px] border-[3px] h-[620px] border-solid bg-white border-[#12120e] p-5 rounded-lg z-50 '>
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
                        <input type="text" className='w-[420px] h-[60px] border-4 border-solid border-[#12120e] rounded' placeholder='+380 XX XX XX XXX'/>
                    </div>
                    <div>
                        <div className='flex  mb-1'>
                            <img src={user} className='w-[30px] h-[30px] mr-2' alt="" />Ваше ім’я
                        </div>
                        <input type="text" className='w-[420px] h-[60px] border-4 border-solid border-[#12120e] rounded' placeholder='Ім’я Прізвище'/>
                    </div>
                    <div>
                        <div className='flex  mb-1'>
                            <img src={comment} className='w-[30px] h-[30px] mr-2' alt="" />Коментар
                        </div>
                        <textarea  rows={30} className='w-[420px] h-[150px] border-4 border-solid border-[#12120e] rounded ' placeholder='Коментар'></textarea>
                    </div>
                    <button className='text-[19px] w-[420px] h-[60px] bg-[#740706] text-white rounded'>
                        Відправити
                    </button>
                </form>
                <div> 
                    <img className='ml-[150px]' src={Baner2} alt="" />
                </div>
            </div>
        </div> 
        <div className='w-screen h-[200px] bg-[#12120e] -mt-[110px] -top-5 -z-0 '>

        </div>
        
    </div>
  )
}
