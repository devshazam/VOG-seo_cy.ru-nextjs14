import React from 'react';

const BackBanner = () => {
    return (
            <div className="grey-back">
                <div  className="main-banner-1" >
                    <div className="form__inner">
                        <div className="grid__row">
                            <div className="col-1-1">
                                <div className="services__head">
                                    <h2>Акция месяца!</h2>
                                </div>
                            </div>
                        </div>
                        <div className="grid__row">
                            <div className="col-1-2">
                                <div className="sub-menu__banner-inner">
                                                    <div className="sub-menu__banner-pic"><img alt=""
                                                            src="/files/110/banermen.jpg" /></div>
                                </div>
                            </div>
                            <div className="col-1-2">
                                <div className="services__item">
                                    <div className="services__text">
                                        <div className="services__title"><h3>Акция: &quot;Cкидка 10% при заказе разработки сайта!&quot;</h3></div>
                                        <p>Описание: При заказе разработки любого сайта в нашей компании от лендинга до корпоративного портала - мы предоставим вам скидку в 10% которую вы сможете потратить на оплату услуг хостинга и телефонию или будущие заказы у нас! В акции участвуют все клиенты и партнеры.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default BackBanner;