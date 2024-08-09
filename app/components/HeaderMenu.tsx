import React from 'react';

const HeaderMenu = () => {
    return (
            <>
                    <div className="container">
                        <div className="b-sandwich js-sidebar-show show-on-tablet show-on-mobile"> <img
                                src="/files/110/sandwich.png" alt="" /> </div>
                        <div className="b-pilot">
                            <div className="b-logo " ><a href="/"><img className="logo__image"
                                        src="/files/1/logo.png" /></a> </div>
                            <div className="pilot__1 hide-on-tablet hide-on-mobile">
                                <p className="pilot__btn hide-on-mobile"><a className="header_button callback"
                                        href="#form">Заказать услуги</a></p>
                            </div>
                            <div className="pilot__2 hide-on-tablet hide-on-mobile">
                                <p className="pilot__icons hide-on-tablet hide-on-mobile"><a
                                          href="tel:+79956221475"><img src="/icons8-whatsapp-100.png" />Служба поддержки</a></p>
                            </div>
                            <div className="pilot__3 hide-on-tablet hide-on-mobile">
                                <div className="b-head-contacts">
                                    <div className="head-contacts__phone" ><a   style={{fontSize: '21px'}} href="tel:+79956221475">8-995-622-14-75</a></div>
                                    
                                        <div className="head-contacts__email"><a className="disabled"
                                                >г. Волгоград | 9:00-21:00</a></div>
                                    
                                </div>
                            </div>
                            <div className="pilot__4 hide-on-tablet hide-on-mobile">
                            </div>
                            <div className="pilot__5 hide-on-tablet hide-on-mobile">
                                <div className="pilot__sale">
                                    <p><a href="#" id="accia">Акция</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="js-fixed-menu2">
                        <div className="container container-nopad sevice__fixed2__wrapper hide-on-tablet hide-on-mobile">
                            <div className="b-menu context" >
                                <div className="menu__inner">
                                    <ul className="level-1" >
                                        <li className="item-1"> <a href="#" className="disabled"  rel="nofollow"> 
                                                Сайты </a>
                                            <div className="item-1-sub js-submenu">
                                                <div className="b-sub-menu">
                                                    <div className="sub-menu__wrapper">
                                                        <div className="sub-menu__left">
                                                            <div className="sub-menu__col">

                                                                <div className="sub-menu__title"><a
                                                                        href="/offer/razrabotka-saitov/" >Разработка сайтов </a></div>
                                                                <div className="sub-menu__item"><a
                                                                    href="/offer/landing-page/">Лендинг (Landing page)
                                                                </a></div>
                                                                <div className="sub-menu__item"><a
                                                                        href="/offer/site-vizitka/">Сайт - Визитка
                                                                    </a></div>
                                                                
                                                                <div className="sub-menu__item"><a
                                                                    href="/offer/site-katalog/">Сайт - Каталог
                                                                </a></div>
                                                                <div className="sub-menu__item"><a
                                                                        href="/offer/site-magazin/">Интернет - Магазин
                                                                    </a></div>
                                                                <div className="sub-menu__item"><a
                                                                href="/offer/dorabotka/">Доработка сайтов</a></div>
                                                                
                                                                <div className="sub-menu__item"><a
                                                                href="/offer/telebot/">Telegram Bot</a></div>
                                                
                                                                
                                                            </div>

                                                        </div>
                                                        <div className="sub-menu__right hide-on-tablet hide-on-mobile">
                                                            <div className="sub-menu__banner"><a className="sub-menu__banner-link disabled" rel="nofollow">&nbsp;</a>
                                                                <div className="sub-menu__banner-inner">
                                                                    <div className="sub-menu__banner-pic"><img alt=""
                                                                            src="/files/110/banermen.jpg" /></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="item-1"> <a  href="#" className="disabled" rel="nofollow"> 
                                            Продвижение </a>
                                            <div className="item-1-sub js-submenu">
                                                <div className="b-sub-menu">
                                                    <div className="sub-menu__wrapper">
                                                        <div className="sub-menu__left">


                                                            <div className="sub-menu__col">
                                                                <div className="sub-menu__title"><a
                                                                        href="/offer/poiskovoe-prodvizenie/" >SEO-продвижение</a>
                                                                </div>
                                                                <div className="sub-menu__item"><a
                                                                    href="/offer/seo-prodvizenie-yandex/">SEO в Яндексе
                                                                </a></div>
                                                                <div className="sub-menu__item"><a
                                                                    href="/offer/seo-prodvizenie-google/">SEO в Google
                                                                </a></div>
                                                                <div className="sub-menu__item"><a
                                                                        href="/offer/digital-reklama/">Digital Реклама</a></div>
                                                                <div className="sub-menu__item"><a
                                                                        href="/offer/yandex-direct/">Яндекс Директ
                                                                    </a></div>
                                                                
                                                            </div>
                                                        
                                                        </div>
                                                        <div className="sub-menu__right hide-on-tablet hide-on-mobile">
                                                            <div className="sub-menu__banner"><a className="sub-menu__banner-link disabled" rel="nofollow">&nbsp;</a>
                                                                <div className="sub-menu__banner-inner">
                                                                    <div className="sub-menu__banner-pic"><img alt=""
                                                                            src="/files/110/banermen.jpg" /></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        {/* <li className="item-1"> <a href="#" className="disabled" rel="nofollow"> 
                                                Реклама </a>
                                            <div className="item-1-sub js-submenu">
                                                <div className="b-sub-menu">
                                                    <div className="sub-menu__wrapper">
                                                        <div className="sub-menu__left">


                                                            <div className="sub-menu__col">
                                                                <div className="sub-menu__title"><a
                                                                        href="/offer/digital-reklama/">Digital Реклама</a></div>
                                                                <div className="sub-menu__item"><a
                                                                        href="/offer/yandex-direct/">Яндекс Директ
                                                                    </a></div>
                                                                
                                                            </div>
                                                        
                                                        </div>
                                                        <div className="sub-menu__right hide-on-tablet hide-on-mobile">
                                                            <div className="sub-menu__banner"><a className="sub-menu__banner-link disabled"  rel="nofollow">&nbsp;</a>
                                                                <div className="sub-menu__banner-inner">
                                                                    <div className="sub-menu__banner-pic"><img alt=""
                                                                            src="/files/110/banermen.jpg" /></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li> */}
                                        <li className="item-1"> <a href="#" className="disabled"  rel="nofollow"> 
                                                Поддержка </a>
                                            <div className="item-1-sub js-submenu">
                                                <div className="b-sub-menu">
                                                    <div className="sub-menu__wrapper">
                                                        <div className="sub-menu__left">
                                                            <div className="sub-menu__col">


                                                                <div className="sub-menu__title">
                                                                    <a href="/offer/podderzka/">Техподдержка</a>
                                                                </div>
                                                                <div className="sub-menu__item">
                                                                    <a href="/offer/dorabotka/">Доработка сайтов</a>
                                                                </div>
                                                            </div>
                                                        
                                                        </div>
                                                        <div className="sub-menu__right hide-on-tablet hide-on-mobile">
                                                            <div className="sub-menu__banner"><a className="sub-menu__banner-link disabled" rel="nofollow">&nbsp;</a>
                                                                <div className="sub-menu__banner-inner">
                                                                    <div className="sub-menu__banner-pic"><img alt=""
                                                                            src="/files/110/banermen.jpg" /></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="item-1"> <a href="#" className="disabled"  rel="nofollow"> 
                                                Полиграфия</a>
                                            <div className="item-1-sub js-submenu">
                                                <div className="b-sub-menu">
                                                    <div className="sub-menu__wrapper">
                                                        <div className="sub-menu__left">
                                                            <div className="sub-menu__col">


                                                                <div className="sub-menu__title"><a href="https://kopi34.ru/" target="_blank">&quot;KopiPrint&quot;🔗</a>
                                                                </div>
                                                                <div className="sub-menu__item"><a
                                                                        href="https://kopi34.ru/produce/vizitki"  target="_blank">Визитки 🔗</a></div>
                                                                <div className="sub-menu__item"><a
                                                                        href="https://kopi34.ru/produce/banner"  target="_blank">Баннеры 🔗</a></div>
                                                                <div className="sub-menu__item"><a
                                                                        href="https://kopi34.ru/produce/samokleyka"  target="_blank">Самоклейки 🔗</a></div>
                                                                <div className="sub-menu__item"><a
                                                                        href="https://kopi34.ru/produce/baget"  target="_blank">Багеты 🔗</a></div>
                                                                <div className="sub-menu__item"><a href="https://kopi34.ru/produce/posterka"  target="_blank">Постерка 🔗</a></div>
                                                                <div className="sub-menu__item"><a href="https://kopi34.ru/produce/holsty"  target="_blank">Холсты 🔗</a></div>
                                                            </div>
                                                        
                                                        </div>
                                                        <div className="sub-menu__right hide-on-tablet hide-on-mobile">
                                                            <div className="sub-menu__banner"><a className="sub-menu__banner-link disabled"  rel="nofollow">&nbsp;</a>
                                                                <div className="sub-menu__banner-inner">
                                                                    <div className="sub-menu__banner-pic"><img alt=""
                                                                            src="/files/110/ban21.jpg" /></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="b-header" >
                                <div className="b-sevice">
                                    <ul className="level-1" >
                                        
                                        <li className="item-1"><span><a href="https://kopi34.ru/" target="_blank">

                                                    Полиграфия🔗</a></span> </li>
                                                    
                                        <li className="item-1"><span><a href="/portfolio" >
                                                    Портфолио</a></span> </li>
                                        <li className="item-1"><span><a href="/#otzyvy">
                                                    Отзывы</a></span> </li>
                                        <li className="item-1"><span><a href="/contacts/">
                                                    Контакты</a></span> </li>
                                    </ul>
                                </div>
                            </div>
                            <p className="pilot__btn hide-on-mobile "><a  className="callback"
                                     href="#form" >Заказать услуги</a></p>
                        </div>
                    </div>
                    <div className="container container-nopad">
                        <div className="b-picture2"  ></div>
                    </div>
            </>
    );
};

export default HeaderMenu;