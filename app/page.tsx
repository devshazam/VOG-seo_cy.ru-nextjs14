import Image from "next/image";
import MainBanner from "./components/MainBanner";

export default function Home() {
  return (
    <>

    <MainBanner />  

    <div className="b-solution-fancy b-solution-fancy_det">

        <div className="container">
            <div className="b-editor" >
                <div className="b-gray">
                    <div className="b-want-guarantee">
                        <div className="want-guarantee__inner">
                            <h2>SEO-First - digital-агентство<br /> с обширным опытом SEO-продвижения</h2>
                            <div className="want-guarantee__text">Нашим главным преимуществом является направленность на поисковую оптимизацию. Мы работаем на результат. Если вам нужен надежный помощник в бурном и постоянно меняющимся океане digital продвижения по выгодной цене, то вы нашли его. С нами вы всегда на гребне новых течений.</div>
                        </div>
                    </div> 
                    <div className="b-guarantee">
                        <div className="guarantee__inner">
                            <h2>Мы гарантируем качество наших работ или возвращаем деньги!</h2>
                            <div className="guarantee__items">
                                <div className="guarantee__item">
                                    <div className="guarantee__imgbox"><img alt="Гарантия сроков"
                                            src="/files/110/garant1.png" /></div>
                                    <div className="guarantee__name">Гарантия сроков</div>
                                    <div className="guarantee__desc">В случае нарушения сроков пересчитаем стоимость
                                        услуг.</div>
                                </div>
                                <div className="guarantee__item">
                                    <div className="guarantee__imgbox"><img alt="Гарантия сервиса"
                                            src="/files/110/garant2.png" /></div>
                                    <div className="guarantee__name">Гарантия сервиса</div>
                                    <div className="guarantee__desc">Мы гарантируем, что все ваши вопросы будут разрешены надлежащим образом и в срок.</div>
                                </div>
                                <div className="guarantee__item">
                                    <div className="guarantee__imgbox"><img alt="Гарантия результата"
                                            src="/files/110/garant3.png" /></div>
                                    <div className="guarantee__name">Гарантия результата</div>
                                    <div className="guarantee__desc">Если мы не достигнем  поставленных результатов - вернем деньги в полном объеме.</div>
                                </div>
                                <div className="guarantee__item">
                                    <div className="guarantee__imgbox"><img alt="Гарантия стоимости"
                                            src="/files/110/garant4.png" /></div>
                                    <div className="guarantee__name">Гарантия стоимости</div>
                                    <div className="guarantee__desc">Мы гарантируем лучшие цены на рынке. Если вы найдете цену ниже - вернем разницу..</div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div className="b-text-block">
                        <div className="b-places-imgs">
                            <div className="places-imgs__title">НАШИ НАГРАДЫ</div>
                            <div className="places-imgs__wrapper">
                                <div className="places-imgs__item">
                                    <div className="places-imgs__img-wrapper"><a
                                            href="#" className="disabled"  rel="nofollow"><img
                                                alt="Золотой сайт 2022" loading="lazy"
                                                src="/files/1/sert1.png" /> </a></div>
                                    <div className="places-imgs__text">
                                        <p className="places-imgs__heading">Золотой партнер</p>
                                        <p className="places-imgs__bottom-text">Партнер 1С битрикс</p>
                                    </div>
                                </div>
                                <div className="places-imgs__item">
                                    <div className="places-imgs__img-wrapper"><a
                                            href="#" className="disabled"  rel="nofollow"><img
                                                alt="Бизнес успех" loading="lazy"
                                                src="/files/1/sert.png" /> </a></div>
                                    <div className="places-imgs__text">
                                        <p className="places-imgs__heading">Золотой партнер</p>
                                        <p className="places-imgs__bottom-text">1С Bitrix <br />
                                            Коробочная версия</p>
                                    </div>
                                </div>
                                <div className="places-imgs__item">
                                    <div className="places-imgs__img-wrapper"><a
                                            href="#" className="disabled"  rel="nofollow"><img
                                                alt="Золотой сайт 2021" loading="lazy"
                                                src="/files/1/sert2.png" /> </a></div>
                                    <div className="places-imgs__text">
                                        <p className="places-imgs__heading">Золотой партнер</p>
                                        <p className="places-imgs__bottom-text">1С Bitrix <br />
                                            Магазин на 1с битрикс - АСПРО</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h2 style={{textAlign: 'center'}}>Цены на самые популярные услуги нашей компании:
                </h2>
                <div className="b-types-of-site">
                    <div className="types-of-site__item">
                        <div className="types-of-site__img"><a
                                href="#" className="disabled"  rel="nofollow"><img
                                    src="/files/110/type-2.png" /></a></div>
                        <div className="types-of-site__title"><a href="#" className="disabled"  rel="nofollow">Разработка сайтов</a></div>
                        <div className="types-of-site__price">от&nbsp;<span>12&nbsp;000&nbsp;₽</span></div>
                    
                    </div>
                    <div className="types-of-site__item">
                        <div className="types-of-site__img"><a
                                href="#" className="disabled"  rel="nofollow"><img
                                    src="/files/110/type-1.png" /></a></div>
                        <div className="types-of-site__title"><a href="#" className="disabled"  rel="nofollow">Доработка
                                сайтов</a></div>
                        <div className="types-of-site__price">от&nbsp;<span>6&nbsp;000&nbsp;₽</span></div>
                    
                    </div>
                    <div className="types-of-site__item">
                        <div className="types-of-site__img"><a
                                href="#" className="disabled"  rel="nofollow"><img
                                    src="/files/110/type-3.png" /></a></div>
                        <div className="types-of-site__title"><a
                                href="#" className="disabled"  rel="nofollow">Digital-стратегия</a>
                        </div>
                        <div className="types-of-site__price">от&nbsp;<span>15&nbsp;000&nbsp;₽</span></div>
                    
                    </div>
                    <div className="types-of-site__item">
                        <div className="types-of-site__img"><a href="#" className="disabled"  rel="nofollow"><img
                                    src="/files/110/type-4.png" /></a></div>
                        <div className="types-of-site__title"><a href="#" className="disabled"  rel="nofollow">SEO-продвижение</a>
                        </div>
                        <div className="types-of-site__price">от&nbsp;<span>19 000&nbsp;₽</span></div>
            
                    </div>
                    <div className="types-of-site__item">
                        <div className="types-of-site__img"><a href="#" className="disabled"  rel="nofollow"><img
                                    src="/files/110/type-5.png" /></a></div>
                        <div className="types-of-site__title"><a href="#" className="disabled"  rel="nofollow">Реклама</a></div>
                        <div className="types-of-site__price">от&nbsp;<span>15&nbsp;000&nbsp;₽</span></div>

                    </div>
                </div>
                <div className="b-conversion">
                    <div className="conversion__item">
                        <div className="conversion__title">
                            <div className="conversion__txt">Digital-стратегия</div>
                            <div className="conversion__num">&nbsp;</div>
                        </div>
                        <div className="conversion__content">
                            <ul>
                                <li>Для успешного старта в онлайн пространстве вам нужна стратегия. SEO-FIRST подготовит для вашего бизнеса проработанную стратегию, которая позволит вам оценить риски и настроиться на результат.</li>
                                <li>Наши специалисты изучат ваш бизнес, конкурентов и потребности,
                                    спрогнозируют сроки достижения результатов, требуемые вложения и пошагово распишут план работ для достижения поставленных целей.</li>
                                <li>В итоге вы получите digital-стратегию продвижения в интернете с оценкой рисков и прогнозами сроков достижения результатов.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="conversion__item">
                        <div className="conversion__title">
                            <div className="conversion__txt">Разработка сайтов</div>
                            <div className="conversion__num">&nbsp;</div>
                        </div>
                        <div className="conversion__content">
                            <ul>
                                <li>Сайт это в первую очередь инструмент продвижения в интернете, поэтому в каждом случае, опираясь на желаемый результат, мы прорабатываем сайт исходя из алгоритма привлечения заказов.
                                </li>
                                <li>В первую очередь мы ориентируемся на SEO оптимизацию сайтов, поэтому все наши сайты имеют самый огромный потенциал для SEO продвижения.</li>
                                <li>Все наши сайты разработаны с помощью самых востребованных технологий - это гарантирует легкую дальнейшую поддержку и интеграцию любых сторонних модулей.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="conversion__item">
                        <div className="conversion__title">
                            <div className="conversion__txt">SEO продвижение</div>
                            <div className="conversion__num">&nbsp;</div>
                        </div>
                        <div className="conversion__content">
                            <ul>
                                <li>Мы накопили огромный опыт SEO продвижения со дня основания компании в 2009 году, который мы используем в нашей работе. Наилучшим образом наши компетенции иллюстрирует обширное портфолио.</li>
                                <li>Мы работаем со всеми поисковыми системами, но в первую очередь ориентируемся на Яндекс и Google. Также мы проводим продвижение по всей России, но в основном работаем на Московский регион. Весь накопленный опыт нашей компании в распоряжении наших клиентов.</li>
                                <li>SEO продвижение в первую очередь направлено на достижение высокого органического, бесплатного и наиболее релевантного трафика на страницы сайта, что резко повышает заказы с сайта.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="b-portfolio-carousel">
                <div className="portfolio-carousel__head"> <span className="portfolio-carousel__head-text-1">Наши лучшие работы</span> </div>
            

            </div>
        </div>

        <div className="container" id="otzyvy">
            <div className="b-guestbox">
                <div className="guestbox__msgtext"></div>
                <div className="grid__row">
                    <div className="col-4-12 tablet-col-6-12">
                        <div className="guestbox__item guestbox__item_first">
                            <div className="guestbox__odometer"> <span id="odometer" className="odometer">97</span><span
                                    className="guestbox__odometer-percent">%</span> </div>
                            <p>клиентов довольны</p>
                        </div>
                    </div> <span id="js-ajax_reviewlist">
                        <div className="col-4-12 tablet-col-6-12">
                            <div className="guestbox__item">
                                <div className="guestbox__head">
                                    <div className="guestbox__icon"><img src="/files/110/guestbox-icon.png" alt="продвижение сайтов" />
                                    </div>
                                    <div className="guestbox__date">15.01.2023</div>
                                    <div className="guestbox__website"> <span>maincargo.ru</span> </div>
                                    <div className="guestbox__popup" title="Услуга"> Продвижение </div>
                                </div>
                                <div className="guestbox__name"> </div>
                                <div className="guestbox__rating">
                                    <div className="b-ratbox">
                                        <div className="ratbox__item ratbox__itemon"></div>
                                        <div className="ratbox__item ratbox__itemon"></div>
                                        <div className="ratbox__item ratbox__itemon"></div>
                                        <div className="ratbox__item ratbox__itemon"></div>
                                        <div className="ratbox__item ratbox__itemon"></div>
                                    </div>
                                </div>
                                <div className="b-editor guestbox__text js-review" style={{maxHeight: 'none'}}>
                                    <p>В компании &quot;SEO-FIRST&quot; мы заказывали СЕО продвижение и доработку сайта, всего за 6 месяцев мы заняли топовые позиции в поисковой выдаче города Москвы, в основном это первые страницы по поисковым фразам связанным с грузоперевозками. Данное продвижение сильно сказалось на органическом трафике из поисковых систем, так что в данный момент мы пользуемся потоком новых лидов бесплатно.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4-12 tablet-col-6-12">
                            <div className="guestbox__item">
                                <div className="guestbox__head">
                                    <div className="guestbox__icon"><img src="/files/110/guestbox-icon.png" alt="разработка сайтов" />
                                    </div>
                                    <div className="guestbox__date">13.02.2023</div>
                                    <div className="guestbox__website"> <span>hotel-molodezhka.ru</span> </div>
                                    <div className="guestbox__popup" title="Услуга">Разработка сайта</div>
                                </div>
                                <div className="guestbox__name"> <span>Зарина</span> </div>
                                <div className="guestbox__rating">
                                    <div className="b-ratbox">
                                        <div className="ratbox__item ratbox__itemon"></div>
                                        <div className="ratbox__item ratbox__itemon"></div>
                                        <div className="ratbox__item ratbox__itemon"></div>
                                        <div className="ratbox__item ratbox__itemon"></div>
                                        <div className="ratbox__item ratbox__itemon"></div>
                                    </div>
                                </div>
                                <div className="b-editor guestbox__text js-review" style={{maxHeight: 'none'}}>
                                    <p>Заказали разработку сайта для новой гостиницы в Москве у компании  &quot;SEO-FIRST&quot;, перед выбором компании проверили рейтинг и портфолио, нам понравилось. Работу сделали без задержек, а так ж, что важно, не было предложений увеличить смету. Что заказали - то и получили! Сайт очень функционален и нравится нашим клиентам, а главное - сайт конвертирует посетителей в заказы! Ребята молодцы!</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4-12 tablet-col-6-12">
                            <div className="guestbox__item">
                                <div className="guestbox__head">
                                    <div className="guestbox__icon"><img src="/files/110/guestbox-icon.png" alt="Продвижение сайтов" />
                                    </div>
                                    <div className="guestbox__date">22.03.2023</div>
                                    <div className="guestbox__website"> <span>sutki178.ru</span> </div>
                                    <div className="guestbox__popup" title="Услуга">Продвижение</div>
                                </div>
                                <div className="guestbox__name"></div>
                                <div className="guestbox__rating">
                                    <div className="b-ratbox">
                                        <div className="ratbox__item ratbox__itemon"></div>
                                        <div className="ratbox__item ratbox__itemon"></div>
                                        <div className="ratbox__item ratbox__itemon"></div>
                                        <div className="ratbox__item ratbox__itemon"></div>
                                        <div className="ratbox__item ratbox__itemon"></div>
                                    </div>
                                </div>
                                <div className="b-editor guestbox__text js-review" style={{maxHeight: 'none'}}>
                                    <p>Была поставлена задача: разработать рекламную компанию ЯндексДирект, которая предполагала следующие шаги: согласование семантического ядра рекламной компании, подбор рекламных предложений для каждой группы запросов. Все шаги были выполнены в срок, но что самое главное, все корректировки были внесенны быстро. Итогами работы компании стали поток заказов, а затраты на работу рекламной компании были в рамках 10% от прибыли с заказов.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4-12 tablet-col-6-12">
                            <div className="guestbox__item">
                                <div className="guestbox__head">
                                    <div className="guestbox__icon"><img src="/files/110/guestbox-icon.png" alt="Реклама сайтов" />
                                    </div>
                                    <div className="guestbox__date">15.01.2023</div>
                                    <div className="guestbox__website"> <span>stal-samara.ru</span> </div>
                                    <div className="guestbox__popup" title="Услуга"> Продвижение </div>
                                </div>
                                <div className="guestbox__name">  <span>Дмитрий</span> </div>
                                <div className="guestbox__rating">
                                    <div className="b-ratbox">
                                        <div className="ratbox__item ratbox__itemon"></div>
                                        <div className="ratbox__item ratbox__itemon"></div>
                                        <div className="ratbox__item ratbox__itemon"></div>
                                        <div className="ratbox__item ratbox__itemon"></div>
                                        <div className="ratbox__item ratbox__itemon"></div>
                                    </div>
                                </div>
                                <div className="b-editor guestbox__text js-review" style={{maxHeight: 'none'}}>
                                    <p>Мы долгое время пытались самостоятельно продвигаться в поисковых системах с помощью найма СЕО специалистов, но данный способ продвижения застрял в ТОП 50 поисковой выдачи. И только когда мы обратились в &quot;SEO-FIRST&quot; мы стремительно начали набирать высокие места. Если вы действительно хотите занять ТОП поисковой выдачи, вложитесь в надежную компанию, ароме того у них есть гарантии.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4-12 tablet-col-6-12">
                            <div className="guestbox__item">
                                <div className="guestbox__head">
                                    <div className="guestbox__icon"><img src="/files/110/guestbox-icon.png" alt="Продвижение сайтов" />
                                    </div>
                                    <div className="guestbox__date">11.01.2023</div>
                                    <div className="guestbox__website"> <span>proflist-saratov.ru</span> </div>
                                    <div className="guestbox__popup" title="Услуга"> Продвижение </div>
                                </div>
                                <div className="guestbox__name"> </div>
                                <div className="guestbox__rating">
                                    <div className="b-ratbox">
                                        <div className="ratbox__item ratbox__itemon"></div>
                                        <div className="ratbox__item ratbox__itemon"></div>
                                        <div className="ratbox__item ratbox__itemon"></div>
                                        <div className="ratbox__item ratbox__itemon"></div>
                                        <div className="ratbox__item ratbox__itemon"></div>
                                    </div>
                                </div>
                                <div className="b-editor guestbox__text js-review" style={{maxHeight: 'none'}}>
                                    <p>Главное результат на мой взгляд! В &quot;SEO-FIRST&quot; очень щепетильное отношение к результативности, если клиент не получает гарантированного результата - они вернут деньги. Мне нравится такой подход, нет поводов для беспокойства. Поэтому могу посоветовать данную компанию для сотрудничества!</p>
                                </div>
                            </div>
                        </div>
                    </span>
                </div>
            </div>
        </div>

        <div className="container container--large">
            <div>
                <div className="container">
                    <div className="b-achievements">
                        <h2>Наши достижения</h2>
                        <div className="achievements__items">
                            <div className="achievements__item">
                                <div className="achievements__top"><span className="achievements__num">46</span>
                                    <span>место</span></div>
                                <div className="achievements__name">Рейтинг маркетинговых агентсв</div>
                            </div>
                            <div className="achievements__item">
                                <div className="achievements__top"><span className="achievements__num">35</span>
                                    <span>место</span></div>
                                <div className="achievements__name">Рейтинг разработчиков
                                    <br /> сайтов в России</div>
                            </div>
                            <div className="achievements__item">
                                <div className="achievements__top"><span className="achievements__num">62</span>
                                    <span>место</span></div>
                                <div className="achievements__name">Рейтинг SEO-компаний<br /> в России</div>
                            </div>
                            <div className="achievements__item">
                                <div className="achievements__top"><span className="achievements__num">58</span>
                                    <span>место</span></div>
                                <div className="achievements__name">Рейтинг разработчиков сайтов в России</div>
                            </div>
                        </div>
                    </div>
                </div>
        
            </div>
        </div>

        <div className="container">
            <div>
                
                <div className="container">
                    <div className="b-services">
                        <div className="services__inner">
                            <div className="grid__row">
                                <div className="col-1-1">
                                    <div className="services__head">
                                        <h2>Наши конкурентные преимущества</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="grid__row">
                                <div className="col-1-2">
                                    <div className="services__item">
                                        <div className="services__img"><img alt="Создание сайта"
                                                src="/files/110/services-2.png" /></div>
                                        <div className="services__text">
                                            <div className="services__title">Работа без финансовых рисков </div>
                                            <p>В первую очередь мы продаем качественные сайты, решающие поставленные бизнес задачи и это наш бизнес. Если мы не сможем достичь поставленных целей или решить необходимые бизнес задачи, то мы вернем деньги в полном объеме. Мы снимаем финансовые риски с наших клиентов.
                                                </p>
                                        </div>
                                    </div>
                                    <div className="services__item">
                                        <div className="services__img"><img alt="Разработка web-сайта под ключ"
                                                src="/files/110/services-3.png" /></div>
                                        <div className="services__text">
                                            <div className="services__title">Стартовая SEO оптимизация</div>
                                            <p>Наша компания имеет большой опыт SEO оптимизации с 2009 года. Разрабатывая все наши сайты мы вкладываем в них весь наш опыт с тем, что-бы в любой момент можно было реализовать все самые современные подходы SEO оптимизации. Таким образом покупая сайт в нашей компании вы получаете мощный инструмент продвижения.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-1-2">
                                    <div className="services__item">
                                        <div className="services__img"><img alt="Базовая SEO-оптимизация"
                                                src="/files/110/services-4.png" /></div>
                                        <div className="services__text">
                                            <div className="services__title">Большой опыт работы с 2009 г.</div>
                                            <p>Мы работаем как SEO-агентство с 2009 года, все наши проекты за прошлый год можно посмотреть по ссылке &quot;Портфолио 2022&quot;, расположенной в шапке сайта. Мы продаем не только сайты и их продвижение, но и наш бесценный опыт. Наш опыт дает нам уверенность давать гарантию успеха нашим клиентам.

                                            </p>
                                        </div>
                                    </div>
                                    <div className="services__item">
                                        <div className="services__img"><img alt="Готовый сайт в разумные сроки"
                                                src="/files/110/services-5.png" /></div>
                                        <div className="services__text">
                                            <div className="services__title">Постоянная борьба за актуальность</div>
                                            <p>Интернет пространство постоянно изменяется и совершенствуется и что-бы быть актуальными и эффективными, мы постоянно обучаемся и совершенствуем наши методики подходы к работе. Мы рады гарантировать передовые технологии для реализации целей и задач наших киентов, мы гарантироем актуальность и эффектисность.

                                            </p>
                                        </div>
                                    </div>
                                </div>
                        
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}
