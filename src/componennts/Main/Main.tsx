import React from 'react'
import { Select } from 'antd'
import cross from "../../accest/Main/crooss.webp"
import parket from "../../accest/Main/parket.webp"
import pickUp from "../../accest/Main/pickUp.webp"
import Minivan from "../../accest/Main/Minivan.webp"
import sedan from "../../accest/Main/sedan.webp"
import hachback from "../../accest/Main/hachback.webp"
import kabriolet from "../../accest/Main/kabriolet.webp"
import cupe from "../../accest/Main/cupe.webp"
import vnedoroznik from "../../accest/Main/vnedoroznik.webp"
import back from "../../accest/Main/bensin.svg"
import { Item } from '../Item/Item'
import arrow from "../../accest/Main/play.png"
import Baner1 from "../../accest/Main/Baner1.webp"
import BanerCar from "../../accest/Main/BanderCar.webp"
import PointCar from "../../accest/Main/PointCar.svg"
import book from "../../accest/Main/book.webp"
import send from "../../accest/Main/send.webp"
import money from "../../accest/Main/money.webp"
import odred from "../../accest/Main/odred.svg"
import docAccept from "../../accest/Main/docAccept.svg"
import search from "../../accest/Main/search.svg"
import hammer from "../../accest/Main/hammer.svg"
import pay from "../../accest/Main/pay.webp"
import cargo from "../../accest/Main/cargo.svg"
import rozmitnennya from "../../accest/Main/rozmitnennya.svg"
import repair from "../../accest/Main/repair.svg"
import getCar from "../../accest/Main/getCar.svg"
import gogleMaps from "../../accest/Main/gogleMaps.webp"
import Baner2 from "../../accest/Main/Baner2.webp"
import phone from "../../accest/Main/phone.svg"
import comment from "../../accest/Main/comment.svg"
import ArrowTo from "../../accest/Main/arrow-bp-lg.svg"
import user from "../../accest/Main/user.svg"
import Copart from "../../accest/Main/Copart.webp"
import Baner from "../../accest/Main/Baner.webp"
import EmailBlack from "../../accest/Contact/EmailBlack.svg"
import PhoneBlack from "../../accest/Contact/PhoneBlack.svg"


export const Main = () => {
  return (
    <div className='font-mono mt-10 flex flex-col items-start w-screen pl-28 gap-[75px]'>
        <div>
            <div className='m-8 text-black font-bold text-[36px] font-title'>Купити авто з США</div>
            <div className='flex gap-[50px]'> 
                <form action="" className='p-10 w-[606px] h-[375px] bg-[#12120e] rounded text-white'>
                    <div className='font-title text-[18px] '>Виберіть Авто:</div>
                    <div>
                        <div className='flex '>
                            <div className='flex flex-col  mx-3'>
                                <label htmlFor="mark" className='my-5'>Марка</label>
                                <Select  id="mark" placeholder='Виберыть марку' className='w-[240px] h-[40px] text-black '></Select>
                            </div>
                            <div className='flex flex-col  mx-3'>
                                <label htmlFor="mark" className='my-5'>Модель</label>
                                <Select  id="mark" placeholder='Виберыть марку' className='w-[240px] h-[40px] text-black '></Select>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='flex flex-col  mx-3'>
                                <label htmlFor="mark" className='my-5'>Рік від</label>
                                <Select  id="mark" placeholder='Виберыть марку' className='w-[240px] h-[40px] text-black '></Select>
                            </div>
                            <div className='flex flex-col mx-3'>
                                <label htmlFor="mark" className='my-5'>Рік до</label>
                                <Select  id="mark" placeholder='Виберыть марку' className='w-[240px] h-[40px] text-black '></Select>
                            </div>
                        </div>
                    </div>
                    <button className='bg-[#740706] w-[140px] h-[41px] my-5 rounded'>Знайти</button>
                </form>
                <div>
                    <div className='w-[548px] h-[100px] text-[18px] font-bold font-title bg-[#e1ae32] rounded-3xl flex justify-center items-center drop-shadow-2xl'>
                        Adolbi.inc ваш надійний партнер в виборі "сталевого" коня!
                    </div>
                    <img className='w-[620px] h-[515px]' src={Baner} alt="" />

                </div>                
            </div>
        </div>
        <div>
            <div className='w-screen -ml-28 pl-28 h-[109px] bg-[#12120e] '>
                <div className='ml-5 mt-4 text-[28px] font-title font-bold text-white'>
                    Виберіть авто за:
                </div>
            </div>
            <div className='flex '>
                <div className='flex flex-col mx-[100px]'>
                    <div className='font-mono text-[25px] font-bold'>
                        Кузовом
                    </div>
                    <div className='flex flex-wrap w-[575px] gap-[20px]'>
                        <div className='w-[175px] h-[170px] bg-[#12120e] flex flex-col items-center justify-around'>
                            <div className='w-[160px] h-[80px]'>
                                <img src={cross} alt="" />
                            </div>
                            <div className='font-mono text-[14.4px] text-white font-bold'>
                                Кросовери
                            </div>
                        </div>
                        <div className='w-[175px] h-[170px] bg-[#12120e] flex flex-col items-center justify-around'>
                            <div className='w-[160px] h-[80px]'>
                                <img src={parket} alt="" />
                            </div>
                            <div className='font-mono text-[14.4px] text-white font-bold'>
                                Паркетники
                            </div>
                        </div>
                        <div className='w-[175px] h-[170px] bg-[#12120e] flex flex-col items-center justify-around'>
                            <div className='w-[160px] h-[80px]'>
                                <img src={pickUp} alt="" />
                            </div>
                            <div className='font-mono text-[14.4px] text-white font-bold'>
                                Пікапи
                            </div>
                        </div>
                        <div className='w-[175px] h-[170px] bg-[#12120e] flex flex-col items-center justify-around'>
                            <div className='w-[160px] h-[80px] scale-x-[-1] scale-y-[1]'>
                                <img src={Minivan} alt="" />
                            </div>
                            <div className='font-mono text-[14.4px] text-white font-bold'>
                                Мінівени
                            </div>
                        </div>
                        <div className='w-[175px] h-[170px] bg-[#12120e] flex flex-col items-center justify-around'>
                            <div className='w-[160px] h-[80px]'>
                                <img src={sedan} alt="" />
                            </div>
                            <div className='font-mono text-[14.4px] text-white font-bold'>
                                Седани
                            </div>
                        </div>
                        <div className='w-[175px] h-[170px] bg-[#12120e] flex flex-col items-center justify-around'>
                            <div className='w-[160px] h-[80px]'>
                                <img src={hachback} alt="" />
                            </div>
                            <div className='font-mono text-[14.4px] text-white font-bold'>
                                Хетчбеки
                            </div>
                        </div>
                        <div className='w-[175px] h-[170px] bg-[#12120e] flex flex-col items-center justify-around'>
                            <div className='w-[160px] h-[80px]'>
                                <img src={kabriolet} alt="" />
                            </div>
                            <div className='font-mono text-[14.4px] text-white font-bold'>
                                Кабріолети
                            </div>
                        </div>
                        <div className='w-[175px] h-[170px] bg-[#12120e] flex flex-col items-center justify-around'>
                            <div className='w-[160px] h-[80px]'>
                                <img src={cupe} alt="" />
                            </div>
                            <div className='font-mono text-[14.4px] text-white font-bold'>
                                Купе
                            </div>
                        </div>
                        <div className='w-[175px] h-[170px] bg-[#12120e] flex flex-col items-center justify-around'>
                            <div className='w-[160px] h-[80px]'>
                                <img src={vnedoroznik} alt="" />
                            </div>
                            <div className='font-mono text-[14.4px] text-white font-bold'>
                                Позашляховики
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='font-mono text-[25px] font-bold'>
                        Двигуном
                    </div>
                    <div  className='flex flex-wrap w-[390px] gap-[20px]'>
                        <div className='w-[175px] h-[170px] bg-[#12120e] flex flex-col items-center justify-around'>
                                <div className='font-mono text-[14.4px] text-white font-bold'>
                                    Бензиновий
                                </div>
                                <div className='w-[106px] h-[106px] '>
                                    <img src={back} alt="" />
                                </div>
                        </div>
                        <div className='w-[175px] h-[170px] bg-[#12120e] flex flex-col items-center justify-around'>
                                <div className='font-mono text-[14.4px] text-white font-bold'>
                                    Дизельний
                                </div>
                                <div className='w-[106px] h-[106px] '>
                                    <img src={back} alt="" />
                                </div>
                        </div>
                        <div className='w-[175px] h-[170px] bg-[#12120e] flex flex-col items-center justify-around'>
                                <div className='font-mono text-[14.4px] text-white font-bold'>
                                    Електро
                                </div>
                                <div className='w-[106px] h-[106px] '>
                                    <img src={back} alt="" />
                                </div>
                        </div>
                        <div className='w-[175px] h-[170px] bg-[#12120e] flex flex-col items-center justify-around'>
                                <div className='font-mono text-[14.4px] text-white font-bold'>
                                    Гібрид
                                </div>  
                                <div className='w-[106px] h-[106px] '>
                                    <img src={back} alt="" />
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className=' flex flex-col items-center'>
            <div className='w-screen -ml-28 pl-28 h-[109px] bg-[#12120e] '>
                <div className='ml-5 mt-4 text-[28px] font-title font-bold text-white'>
                    ПОПУЛЯРНІ МАРКИ
                </div>
            </div>
            <div className='m-10 font-mono text-[19px] flex underline decoration-1'>
                <ul style={{listStyleType:"initial"}} className='mx-[20px]' >
                    <li>ACURA</li>
                    <li>ALFA ROMEO</li>
                    <li>ASTON MARTIN</li>
                    <li>AUDI</li>
                    <li>BENTLEY</li>
                    <li>BMW</li>
                    <li>BUICK</li>
                    <li>CADILLAC</li>
                    <li>CHEVROLET</li>
                    <li>CHRYSLER</li>
                    <li>DODGE</li>
                </ul>
                <ul style={{listStyleType:"initial"}} className='mx-[20px]' >
                    <li>FERRARI</li>
                    <li>FIAT</li>
                    <li>FORD</li>
                    <li>FREIGHTLINER</li>
                    <li>GENESIS</li>
                    <li>GMC</li>
                    <li>HONDA</li>
                    <li>HYUNDAI</li>
                    <li>INFINITI</li>
                    <li>JAGUAR</li>
                    <li>JEEP</li>
                    <li>KIA</li>
                </ul>
                <ul style={{listStyleType:"initial"}} className='mx-[20px]' >
                    <li>LAMBORGHINI</li>
                    <li>LAND ROVER</li>
                    <li>LEXUS</li>
                    <li>LINCOLN</li>
                    <li>MASERATI</li>
                    <li>MAZDA</li>
                    <li>MCLAREN AUTOMOTIVE</li>
                    <li>MERCEDES-BENZ</li>
                    <li>MINI</li>
                    <li>MITSUBISHI</li>
                    <li>NISSAN</li>
                </ul>
                <ul style={{listStyleType:"initial"}} className='mx-[20px]'>
                    <li>POLARIS</li>
                    <li>POLESTAR</li>
                    <li>PORSCHE</li>
                    <li>RAM</li>
                    <li>SCION</li>
                    <li>SMART</li>
                    <li>SUBARU</li>
                    <li>TESLA</li>
                    <li>TOYOTA</li>
                    <li>VOLKSWAGEN</li>
                    <li>VOLVO</li>
                </ul>
            </div>
            <button className='text-white bg-[#740706] w-[461px] h-[58.6px] rounded my-10'>Перейти до каталогу всіх товарів</button>
        </div>
        <div className='m-10 -ml-28 flex flex-col gap-10 '>
            <div className='w-screen -ml-28 pl-28 h-[109px] bg-[#12120e] '>
                    <div className='ml-5 mt-4 text-[26px] font-title font-bold text-white'>
                        Схожі Авто
                    </div>
            </div>
            
            <div className='w-screen -ml-28 pl-28 flex gap-[20px] items-center'>
                <img src={arrow} alt="" className='w-[28px] h-[25px] ml-32 scale-x-[-1] scale-y-[1]'/>
                <Item />
                <Item />
                <Item />
                <Item />
                <img src={arrow} alt="" className='w-[28px] h-[25px]'/>
            </div>
        </div>
        <div className=' text-white'>
            <div className='w-screen -ml-28 pl-28 h-[350px] bg-[#12120e] flex items-center justify-between'>
                <div>
                    <img src={Baner1} alt="" className='h-[350px] w-[250px]'/>
                </div>
                <div className='flex flex-col '>
                    <div className='font-mono text-[20px] font-bold'>
                        Зателефонуйте нам та отримайте консультацію
                    </div>
                    <button className='border-4 border-solid border-[#aeaeb2] w-[270px] h-[60px] mt-10 font-mono text-[15px]' >
                        +38011122333
                    </button>
                </div>
                <div className='mr-16'>
                    <div className='font-mono text-[20px] font-bold'>
                        Або залиште свій номер телефону
                        ,<br /> і ми вам перезвонимо
                    </div>
                    <div className='flex mt-10'>
                        <input type="text" placeholder='+380XXXXXXXX' className='w-[270px] h-[60px] border-4 border-solid border-[#aeaeb2] bg-[#12120e] p-2 outline-none'/>
                        <button className='bg-[#740706] w-[170px] h-[60px] rounded ml-5'>Відправити</button>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div className='w-screen -ml-28 pl-28 h-[109px] bg-[#12120e] '>
                <div className='ml-5 mt-4 text-[26px] font-title font-bold text-white'>
                    ЧОМУ АВТО З США ВИГІДНО ДЛЯ ВАС?
                </div>
            </div>
            <div className='flex'>
                <div className='flex flex-col w-[600px] mx-14 my-10'>
                    <div className='font-mono text-[#12120e]'>
                        Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту
                    </div>
                    <div className='w-[641px] h-[258px]'>
                        <img src={BanerCar} alt="" />
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className='flex m-5'>
                        <div className='w-[71px] h-[71px] bg-gradient-to-tr from-[#740706] to-[#922a2a] rounded flex justify-center items-center'>
                            <img className='w-[45px] h-[45px]' src={book} alt="" />
                        </div>
                        <div className='ml-5 font-mono w-[480px]'>
                            <div className=' text-[20px] font-bold'>
                                Правдива історія авто
                            </div>
                            <div className=' mt-5'>
                                Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту
                            </div>
                        </div>
                    </div>
                    <div className='flex m-5'>
                        <div className='w-[71px] h-[71px] bg-gradient-to-tr from-[#740706] to-[#922a2a] rounded flex justify-center items-center'>
                            <img className='w-[45px] h-[45px]' src={money} alt="" />
                        </div>
                        <div className='ml-5 font-mono w-[480px]'>
                            <div className=' text-[20px] font-bold'>
                                Економія до 40%
                            </div>
                            <div className=' mt-5'>
                                Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту
                            </div>
                        </div>
                    </div>
                    <div className='flex m-5'>
                        <div className='w-[71px] h-[71px] bg-gradient-to-tr from-[#740706] to-[#922a2a] rounded flex justify-center items-center'>
                            <img className='w-[45px] h-[45px]' src={send} alt="" />
                        </div>
                        <div className='ml-5 font-mono w-[480px]'>
                            <div className=' text-[20px] font-bold'>
                                Безпечна доставка
                            </div>
                            <div className=' mt-5'>
                                Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту
                            </div>
                        </div>
                    </div>
                    <div className='flex m-5'>
                        <div className='w-[71px] h-[71px] bg-gradient-to-tr from-[#740706] to-[#922a2a] rounded flex justify-center items-center'>
                            <img className='w-[45px] h-[45px]' src={PointCar} alt="" />
                        </div>
                        <div className='ml-5 font-mono w-[480px]'>
                            <div className=' text-[20px] font-bold'>
                                Хороший технічний стан авто
                            </div>
                            <div className=' mt-5'>
                                Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex'>
            <div className='m-10 w-[600px]'>
                <div className='font-title text-[26px] font-bold'>
                    ВАРТІСТЬ АВТО З США В УКРАЇНІ
                </div>
                <div className='font-mono text-[17] flex my-4 '>
                    <div className='font-bold mr-2'>Вартість доставки</div> залежить від кількох факторів:
                </div>
                <div className='font-mono w-[500px]'>
                    Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту
                </div>
            </div>
            <form className='w-[637px]  bg-[#12120e] flex flex-col text-white p-5 font-mono'>
                <div className='font-title text-[23px] font-bold'>
                    КАЛЬКУЛЯТОР ЗАГАЛЬНОЇ ВАРТОСТІ
                </div>
                <div className='border-b border-solid border-[#f1f1f6] my-8'>
                    <div className='text-[18px]  font-bold'>
                        Крок 1: аукціон
                    </div>
                    <div className='flex  items-center gap-[10px]'>
                        <div>
                            <div>
                                Аукціон
                            </div>
                            <Select placeholder="Аукціон" className='bg-[#12120e] w-[260px] h-[60px]'></Select>
                        </div>
                        <div className='text-[#aeaeb2]'>
                            <div>
                                Переможна ставка
                            </div>
                            <input placeholder='Переможна ставка, $' type="text" className='outline-none p-3 w-[260px] h-[60px] border-4 border-solid border-[#aeaeb2] bg-[#12120e] rounded' />
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
                    <div className='flex  items-center gap-[10px] text-[#aeaeb2]'>
                        <div>
                            <div>
                                Майданчик аукціону
                            </div>
                            <Select placeholder="Майданчик аукціону" className='w-[260px] h-[60px]'></Select>
                        </div>
                        <div>
                            <div>
                                Тип транспорту
                            </div>
                            <Select placeholder="Тип транспорту" className='w-[260px] h-[60px]'></Select>
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
                    <div className='flex items-center flex-wrap gap-[10px]'>
                        <div>
                            <div>
                                Тип двигуна
                            </div>
                            <Select placeholder="Тип двигуна" className='bg-[#12120e] w-[260px] h-[60px]'></Select>
                        </div>
                        <div>
                            <div>
                                Об’єм двигуна
                            </div>
                            <input placeholder='Об’єм двигуна' type="text" className='outline-none p-3 w-[260px] h-[60px] border-4 border-solid border-[#aeaeb2] bg-[#12120e] rounded'/>
                        </div>
                        <div>
                            <div>
                                Рік випуску
                            </div>
                            <Select placeholder="Рік випуску" className='bg-[#12120e] w-[260px] h-[60px]'></Select>
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
                    <button className='w-[300px] h-[55px] text-[19px] bg-[#740706] rounded' >
                        Детальний розрахунок
                    </button>
                </div>
            </form>
        </div>
        <div >
            <div className='font-title text-[26px] font-bold'>
                ПРОЦЕС ПОКУПКИ АВТО З США
            </div>
            <div className='text-white flex flex-wrap gap-[35px] phone:justify-center'>
                    <div    className='buing-item bg-[#12120e] w-[400px] h-[169px] rounded flex p-4 box-border  relative phone:before:block'>
                        <div className='w-[66px] h-[70px] bg-[#f1f1f6] rounded flex justify-center items-center'>
                            <img className='w-[45px] h-[45px]' src={odred} alt="" />
                        </div>
                        <div className='ml-5 font-mono box-border max-w-[260px]'>
                            <div className=' text-[20px] font-bold'>
                                Заявка та консультація
                            </div>
                            <div className=' mt-5'>
                                Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту
                            </div>
                        </div>
                    </div>
                    <div  className='buing-item bg-[#12120e] w-[400px] h-[169px] rounded flex p-4 box-border  relative phone:before:block tablet:before:hidden  '>
                        <div className='w-[66px] h-[70px] rounded flex justify-center items-center'>
                            <img className='w-[45px] h-[45px]' src={docAccept} alt="" />
                        </div>
                        <div className='ml-5 font-mono  box-border max-w-[260px]'>
                            <div className=' text-[20px] font-bold'>
                                Договір
                            </div>
                            <div className=' mt-5'>
                                Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту
                            </div>
                        </div>
                    </div>
                    <div className='w-screen -ml-28  hidden tablet:block phone:hidden'>
                        <img className=' w-[600px] mx-auto ml-60' src={ArrowTo} alt="" />
                    </div>
                    <div   className='buing-item bg-[#12120e] w-[400px] h-[169px] rounded flex p-4 box-border relative phone:before:block  xl:before:hidden'>
                        <div className='w-[66px] h-[70px]  rounded flex justify-center items-center'>
                            <img className='w-[45px] h-[45px]' src={search} alt="" />
                        </div>
                        <div className='ml-5 font-mono  box-border max-w-[260px]'>
                            <div className=' text-[20px] font-bold'>
                                Підбір та перевірка
                            </div>
                            <div className=' mt-5'>
                                Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту
                            </div>
                        </div>
                    </div>
                    <div className='w-screen  -ml-28  hidden laptop:block'>
                        <img className='w-[850px]  mx-auto' src={ArrowTo} alt="" />
                    </div>
                    <div    className='buing-item bg-[#12120e] w-[400px] h-[169px] rounded flex p-4 box-border  relative phone:before:block tablet:before:hidden '>
                        <div className='w-[66px] h-[70px] bg-[#f1f1f6] rounded flex justify-center items-center'>
                            <img className='w-[45px] h-[45px]' src={hammer} alt="" />
                        </div>
                        <div className='ml-5 font-mono  box-border max-w-[260px]'>
                            <div className=' text-[20px] font-bold'>
                                Аукціон
                            </div>
                            <div className=' mt-5'>
                                Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту
                            </div>
                        </div>
                    </div>
                    <div className='w-screen -ml-28  hidden tablet:block phone:hidden'>
                        <img className=' w-[600px] mx-auto ml-60' src={ArrowTo} alt="" />
                    </div>
                    <div    className='buing-item bg-[#12120e] w-[400px] h-[169px] rounded flex p-4 box-border  relative '>
                        <div className='w-[66px] h-[70px] bg-[#f1f1f6] rounded flex justify-center items-center'>
                            <img className='w-[45px] h-[45px]' src={pay} alt="" />
                        </div>
                        <div className='ml-5 font-mono  box-border max-w-[260px]'>
                            <div className=' text-[20px] font-bold'>
                                Оплата
                            </div>
                            <div className=' mt-5'>
                                Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту
                            </div>
                        </div>
                    </div>
                    <div    className='buing-item bg-[#12120e] w-[400px] h-[169px] rounded flex p-4 box-border  relative phone:before:block xl:before:hidden tablet:before:hidden'>
                        <div className='w-[66px] h-[70px] bg-[#f1f1f6] rounded flex justify-center items-center'>
                            <img className='w-[45px] h-[45px]' src={cargo} alt="" />
                        </div>
                        <div className='ml-5 font-mono  box-border max-w-[260px]'>
                            <div className=' text-[20px] font-bold'>
                                Доставка
                            </div>
                            <div className=' mt-5'>
                                Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту
                            </div>
                        </div>
                    </div>
                    <div className='w-screen  -ml-28  hidden laptop:block'>
                        <img className='w-[850px]  mx-auto' src={ArrowTo} alt="" />
                    </div>
                    <div className='w-screen -ml-28  hidden tablet:block phone:hidden'>
                        <img className=' w-[600px] mx-auto ml-60' src={ArrowTo} alt="" />
                    </div>
                    <div    className='buing-item bg-[#12120e] w-[400px] h-[169px] rounded flex p-4 box-border  relative '>
                        <div className='w-[66px] h-[70px] bg-[#f1f1f6] rounded flex justify-center items-center'>
                            <img className='w-[45px] h-[45px]' src={rozmitnennya} alt="" />
                        </div>
                        <div className='ml-5 font-mono  box-border max-w-[260px]'>
                            <div className=' text-[20px] font-bold'>
                                Розмитнення
                            </div>
                            <div className=' mt-5'>
                                Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту
                            </div>
                        </div>
                    </div>
                    <div    className='buing-item bg-[#12120e] w-[400px] h-[169px] rounded flex p-4 box-border  relative  phone:before:block tablet:before:hidden'>
                        <div className='w-[66px] h-[70px] bg-[#f1f1f6] rounded flex justify-center items-center'>
                            <img className='w-[45px] h-[45px]' src={repair} alt="" />
                        </div>
                        <div className='ml-5 font-mono  box-border max-w-[260px]'>
                            <div className=' text-[20px] font-bold'>
                                Ремонт авто
                            </div>
                            <div className=' mt-5'>
                                Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту
                            </div>
                        </div>
                    </div>
                    <div className='w-screen -ml-28  hidden tablet:block phone:hidden'>
                        <img className=' w-[600px] mx-auto ml-60' src={ArrowTo} alt="" />
                    </div>
                    <div  className=' bg-[#12120e] w-[400px] h-[169px] rounded flex p-4 box-border  relative '>
                        <div className='w-[66px] h-[70px] bg-[#f1f1f6] rounded flex justify-center items-center'>
                            <img className='w-[45px] h-[45px]' src={getCar} alt="" />
                        </div>
                        <div className='ml-5 font-mono  box-border max-w-[260px]'>
                            <div className=' text-[20px] font-bold'>
                                Отримання авто
                            </div>
                            <div className=' mt-5'>
                                Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту
                            </div>
                        </div>
                    </div>
            </div>
        </div>
        <div>
            <div className='font-title text-[26px] font-bold'>
                ПРИЧИНИ ЗАМОВИТИ АВТО У НАС
            </div>
            <div className='flex '>
                <div className='w-[720px] text-white flex flex-wrap gap-[20px]'>
                    <div className=' w-[340px] h-[192px] bg-[#12120e] p-[20px] rounded'>
                        <div className='text-[18] font-bold my-3'>
                            Офіційний представник Copart
                        </div>
                        <div>
                            Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту
                        </div>
                    </div>
                    <div className=' w-[340px] h-[192px] bg-[#12120e] p-[20px] rounded'>
                        <div className='text-[18] font-bold my-3'>
                            Офіційний представник Copart
                        </div>
                        <div>
                            Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту
                        </div>
                    </div>
                    <div className=' w-[340px] h-[192px] bg-[#12120e] p-[20px] rounded'>
                        <div className='text-[18] font-bold my-3'>
                            Офіційний представник Copart
                        </div>
                        <div>
                            Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту
                        </div>
                    </div>
                    <div className=' w-[340px] h-[192px] bg-[#12120e] p-[20px] rounded'>
                        <div className='text-[18] font-bold my-3'>
                            Офіційний представник Copart
                        </div>
                        <div>
                            Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту
                        </div>
                    </div>
                </div>
                <div>
                    <div className=' w-[340px] h-[192px] bg-[#12120e] p-[20px] rounded text-white'>
                        <div className='text-[18] font-bold my-3'>
                            А також, те що про нас говорять
                        </div>
                        <div>
                            Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту
                        </div>
                        <button className='bg-[#740706] w-[230px] h-[40px]'>Подивитися відгуки</button>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div className='font-title text-[26px] font-bold'>
                ВІДГУКИ
            </div>
            <div className=' text-[20px] font-bold my-3'>
                КЛІЄНТИ ПРО НАС
            </div>
            <div className='w-[1210px] h-[200px] bg-[#12120e] text-white flex p-5'>
                <div className='flex flex-col items-center'>
                    <img className='w-[177px] h-[146px] ' src="" alt="" />
                    <div className='font-bold'>
                        Autor
                    </div>
                </div>
                <div className=' p-5 ml-5'>
                    <div className='text-[20px] font-bold'>
                        title 
                    </div>
                    <div>
                        Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту 
                    </div>
                </div>
            </div>
            <div className='flex gap-[10px] mt-[10px]'>
                <div className='w-[600px] h-[200px] bg-[#12120e] text-white flex p-2'>
                    <div className='flex flex-col items-center'>
                        <div className='w-[177px] h-[146px] '>
                            <img src="" alt="" />
                        </div>
                        <div className='font-bold'>
                            Autor
                        </div>
                    </div>
                    <div className=' p-5 ml-5'>
                        <div className='text-[20px] font-bold'>
                            title 
                        </div>
                        <div>
                            Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту 
                        </div>
                    </div>
                </div>
                <div className='w-[600px] h-[200px] bg-[#12120e] text-white flex p-2'>
                    <div className='flex flex-col items-center'>
                        <div className='w-[177px] h-[146px] ' >
                            <img src="" alt="" />
                        </div>
                        <div className='font-bold'>
                            Autor
                        </div>
                    </div>
                    <div className=' p-5 ml-5'>
                        <div className='text-[20px] font-bold'>
                            title 
                        </div>
                        <div>
                            Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту 
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-white  flex justify-end mt-5 mr-[250px]'>
                <button className='w-[230px] h-[60px] bg-[#740706] rounded flex justify-center items-center mx-2'>
                    Відгуки в Google <img src={gogleMaps} className='w-[42px] h-[42px]' alt="" />
                </button>
                <button className='w-[230px] h-[60px] bg-[#740706] rounded flex justify-center items-center mx-2'>
                    Подивитися відгуки
                </button>
            </div>
        </div>
        <div className=' flex '>
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
                    <textarea rows={30} className='w-[420px] h-[150px] border-4 border-solid border-[#12120e] rounded' placeholder='Коментар'></textarea>
                </div>
                <button className='text-[19px] w-[420px] h-[60px] bg-[#740706] text-white rounded'>
                    Відправити
                </button>
            </form>
            <div> 
                <img className='ml-[150px]' src={Baner2} alt="" />
            </div>
        </div>
        <div className='flex'>
            <div className='w-[450px] ml-32'>
                <div className='w-[160px] h-[60px]'>
                    <img  src={Copart} alt="" />
                </div>
                <div className='text-[23px] font-bold'>
                    Copart
                </div>
                <div>
                Приклад тексту   Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту Приклад тексту
                </div>
            </div>
            <form className='w-[533px]  bg-[#f1f1f6] flex flex-col items-center'>
                <div className='text-[22px] font-bold mt-[45px]'>
                    Підібрати авто на аукціоні Copart
                </div>
                <div className='flex gap-[35px] mt-5'>
                    <div>
                        <div className='text-[17px]'>
                            Бюджет Від
                        </div>
                        <Select className='w-[220px] h-[60px]' placeholder="Бюджет Від"></Select>
                    </div>
                    <div>
                        <div className='text-[17px]'>
                            Бюджет До
                        </div>
                        <Select className='w-[220px] h-[60px]' placeholder="Бюджет До"></Select>
                    </div>
                </div>
                <div className='my-5'>
                    <div>
                        Телефон
                    </div>
                    <input className='w-[475px] h-[60px] border-4 border-solid border-[#12120e]' placeholder='+380 ХХ ХХ ХХ ХХХ' type="text" />
                </div>
                <div>
                    <div className='text-[17px]'>
                        Тип автомобіля
                    </div>
                    <Select className='w-[475px] h-[60px]' placeholder="Пікап"></Select>
                </div>
                <div className='my-5'>
                    <div>
                        Ваше ім’я
                    </div>
                    <input className='w-[475px] h-[60px] border-4 border-solid border-[#12120e]' placeholder='Ім’я Прізвище' type="text" />
                </div>
                <button className='bg-[#740706] w-[475px] h-[55px] text-white'>
                    Замовити підбір
                </button>
            </form>
        </div>
        <div className='w-screen -ml-28 bg-[#12120e] h-[150px] text-white flex items-center'>
            <div className='mx-28 flex'>
                <div>
                    <div className='text-[22px] font-bold '>
                        ПІДПИСУЙТЕСЬ!
                    </div>
                    <div className='text-[18px]'>
                        Та дізнавайтеся перші про вигідні пропозиції
                    </div>
                </div>
                <div className='flex ml-96'>
                    <input className='box-border p-4 w-[320px] h-[54px] bg-[#12120e] border-[3px] border-solid border-[#f1f1f6]' placeholder='Введіть ваш Email' type="text" />
                    <button className='h-[54px] bg-[#730706] w-[220px]'>
                        Підписатися
                    </button>
                </div>
            </div>
        </div>
        <div>
            <div className='text-[26px] font-bold font-title'>
                КОНТАКТИ
            </div>
            <div className='flex gap-12 my-10'>
                <div className='flex gap-[10px] text-[18px] font-bold'>
                    <img className='w-[35px] h-[35px]' src={PhoneBlack} alt="" />
                    <div>
                        Телефон:
                    </div>
                    <div>
                        +38011122233
                    </div>
                </div>
                <div className='flex gap-[10px] text-[18px] font-bold'>
                    <img className='w-[35px] h-[35px]' src={EmailBlack} alt="" />
                    <div>
                        Email:
                    </div>
                    <div>
                        .com
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}
