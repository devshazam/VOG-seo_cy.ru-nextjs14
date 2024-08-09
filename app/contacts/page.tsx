import React from 'react';
import Image from 'next/image';
import { Button } from 'antd';


export default function Contacts(){
    return (
            <>
                <div className="container">
                <div className="b-title b-title--2" style={{background: `url(/files/3/4.jpg) 50% 0 no-repeat`}}>
                        <h1>Контакты:</h1>
                    </div>
                </div>  

                <div className="b-solution-fancy b-solution-fancy_det">
                    <div className="container">
                        <div className="grid__row">
                            <div className="col-1-1">
                                <div className="b-headblock2 b-headblock2--mag">
                                    <div className="headblock2__inner headblock2__inners" itemScope itemType="http://schema.org/Organization">
                                    <h3><span itemProp="name">SEO-First 2009 ☢️ разработка сайтов с гарантией!</span></h3>
                                        <div className="headblock2__content"  itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
                                            <p className='marb'><b>Мультиканальный телефон:</b><br></br>🎙️ +7 (995) 622-14-75</p>
                                            <p itemProp="description" className='marb'><b>Наш адрес:</b><br/> 
                                            <span itemProp="addressLocality">🎯 г. Волгоград, </span>
                                            <span itemProp="streetAddress">ул. Петропавловская д. 87</span></p>
                                            <p className='marb'><b>Режим работы:</b><br></br>🕐 Пн - Пт с 09:00 до 19:00</p>
                                        </div>
                                        <div className="headblock2__tarif">
                                                <Button    style={{backgroundColor: '#ffd913', color: '#000'}} className='mb-3'> 
                                                    <a title={"Telegramm"} href={"https://t.me/+79956221475"} target="_blank" className='phone-ya'>
                                                            <Image src={"/telegramm.png"} width='44' height='44' alt='phone' style={{display: 'inline-block'}} />{" "}Написать в Telegram
                                                    </a>
                                                    </Button>{" "}
                                                <Button     style={{backgroundColor: '#ffd913', color: '#000'}}  className='mb-3'>
                                                    <a title={"Whatsapp"} href={"https://wa.me/+79956221475"} target="_blank" className='phone-ya'>
                                                            <Image src={"/whatsapp.png"} width='48' height='48' alt='phone' style={{display: 'inline-block'}} />{" "}Написать в Whatsapp
                                                    </a>
                                                
                                                </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    );
};

