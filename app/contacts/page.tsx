import React from 'react';

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
                                    <div className="headblock2__inner" itemScope itemType="http://schema.org/Organization">
                                    <h3><span itemProp="name">SEO-First - Разработка сайтов с грарнтией</span></h3>
                                        <div className="headblock2__content"  itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
                                            <p itemProp="description">Наш адрес:<br/> 
                                            <span itemProp="addressLocality">г. Волгоград</span>
                                            <span itemProp="streetAddress">ул. Петропавловская д. 87</span> (центральный вход со стороны &quot;KopiPrint&quot;)
                                            <span itemProp="postalCode">400026</span>
                                            <br/> 
                                            Режим работы: Пн - Пт с 09:00 до 19:00<br/>
                                            Вотсап: +7 (995) 622-14-75<br/>
                                            Telegramm: +7 (995) 622-14-75<br/>
                                            Почта: <span itemProp="email">kopi34@yandex.ru</span>
                                            </p>
                                        </div>
                                        <div className="headblock2__tarif">
                                            <a href="tel:+79956221475"><span className="headblock2__price">тел.: <span itemProp="telephone">8-995-622-14-75</span></span></a>
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

