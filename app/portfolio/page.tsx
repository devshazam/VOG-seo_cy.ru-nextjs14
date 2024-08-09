'use client'
import React from 'react';
import Image from 'next/image';
import { Row, Col, Badge, Card, Button,  } from 'antd';
import Link from 'next/link';
const { Meta } = Card;

export default function Portfolio(){
    return (
            <>
            <div className="container" >
            <Row gutter={[16, 16]}>
                 <Col  span={24} md={8} >
                        <Link href={`https://t.me/kopi34_bot`} target='_blank'>
                            <Badge.Ribbon color="red" text={`Телеграм Бот`}>
                                <Card hoverable cover={<img alt="example" src="/6524335b2b0f5e0036f73b8c-Telegram Bots in DeFI.jpg" />} >
                                    <Meta title={`Телеграм бот: @kopi34_bot`} description='Бот - магазин, он способен продавать товары и оповещать о статусе заказа!' />
                                </Card>
                            </Badge.Ribbon>
                        </Link>
                    </Col>
                    <Col  span={24} md={8} >
                        <Link href={`https://luristy.ru/`} target='_blank'>
                            <Badge.Ribbon color="violet" text={`Сайт Визитка`}>
                                <Card hoverable cover={<img alt="example" src="/luristy.ru_.png" />} >
                                    <Meta title={`Сайт - Визитка: luristy.ru`} description='Красивый сайт визитка выполнен в современном стиле с применением анимации' />
                                </Card>
                            </Badge.Ribbon>
                        </Link>
                    </Col>
                    <Col  span={24} md={8} >
                        <Link href={`https://kopi34.ru/`} target='_blank'>
                            <Badge.Ribbon color="green" text={`Сайт Магазин`}>
                                <Card hoverable cover={<img alt="example" src="/kopi34.ru_ (1).png" />} >
                                    <Meta title={`Сайт - Магазин: kopi34.ru`} description='Многофункциональный сайт - магазин с калькуляцией стоимости заказа' />
                                </Card>
                            </Badge.Ribbon>
                        </Link>
                    </Col>

                    <Col  span={24} md={8} >
                        <Link href={`https://split34service.ru/`} target='_blank'>
                            <Badge.Ribbon color="yellow" text={`Промо Сайт`}>
                                <Card hoverable cover={<img alt="example" src="/split34service.ru_.jpg" />} >
                                    <Meta title={`Промо Сайт: split34service.ru`} description='Доступный промо - сайт с калькуляцией стоимости заказа' />
                                </Card>
                            </Badge.Ribbon>
                        </Link>
                    </Col>
                    <Col  span={24} md={8} >
                        <Link href={`#`} target='_blank'>
                            <Badge.Ribbon color="orange" text={`Arduino bot`}>
                                <Card hoverable cover={<img alt="example" src="/b29ac726-e573-4f00-8277-cc078701fc98.jpg" />} >
                                    <Meta title={`Поливочная система - робот`} description='Автоматическая, роботизированная поливочная система' />
                                </Card>
                            </Badge.Ribbon>
                        </Link>
                    </Col>
                    <Col  span={24} md={8} >
                        <Link href={`https://legenda-dom.ru`} target='_blank'>
                            <Badge.Ribbon color="violet" text={`Сайт Визитка`}> 
                                <Card hoverable cover={<img alt="example" src="/legenda-dom.ru_.jpg" />} >
                                    <Meta title={`Сайт - Визитка: legenda-dom.ru`} description='Элегантный сайт - визитка с видеофоном' />
                                </Card>
                            </Badge.Ribbon>
                        </Link>
                    </Col>
                    
                    <Col  span={24} md={8} >
                        <Link href={`https://github.com/devshazam/telegram_bot-django`} target='_blank'>
                            <Badge.Ribbon color="red" text={`Телеграм Бот`}>
                                <Card hoverable cover={<img alt="example" src="/6524335b2b0f5e0036f73b8c-Telegram Bots in DeFI.jpg" />} >
                                    <Meta title={`Закрытый Телеграм Бот`} description='Бот - генератор документов (акт, договор) для автоматизации выставления счетов' />
                                </Card>
                            </Badge.Ribbon>
                        </Link>
                    </Col>

                    <Col  span={24} md={8} >
                        <Link href={`https://uniformaonline.ru/`} target='_blank'>
                            <Badge.Ribbon color="green" text={`Сайт Магазин`}>
                                <Card hoverable cover={<img alt="example" src="/uniformaonline.ru_.jpg" />} >
                                    <Meta title={`Сайт - Магазин: uniformaonline.ru`} description='Сайт - магазин одежды с онлайн оплатой' />
                                </Card>
                            </Badge.Ribbon>
                        </Link>
                    </Col>


                    <Col  span={24} md={8} >
                        <Link href={`https://dostupsreda.ru`} target='_blank'>
                            <Badge.Ribbon color="violet" text={`Сайт Визитка`}> 
                                <Card hoverable cover={<img alt="example" src="/dostupsreda.ru_.jpg" />} >
                                    <Meta title={`Сайт - Визитка: dostupsreda.ru`} description='Приятный сайт визитка с мягким дизайном' />
                                </Card>
                            </Badge.Ribbon>
                        </Link>
                    </Col>

                    <Col  span={24} md={8} >
                        <Link href={`https://patterneasy.com`} target='_blank'>
                            <Badge.Ribbon color="green" text={`Сайт Магазин`}>
                                <Card hoverable cover={<img alt="example" src="/patterneasy.com_.jpg" />} >
                                    <Meta title={`Сайт - Магазин: patterneasy.com`} description='Сайт - Магазин выкроек на паттернах' />
                                </Card>
                            </Badge.Ribbon>
                        </Link>
                    </Col>

                    <Col  span={24} md={8} >
                        <Link href={`https://re.kufar.by/`} target='_blank'>
                            <Badge.Ribbon color="blue" text={`Сайт Объявлений`}>
                                <Card hoverable cover={<img alt="example" src="/re.kufar.by_.jpg" />} >
                                    <Meta title={`Сайт - Объявлений: re.kufar.by`} description='Иностранный сайт - магазин' />
                                </Card>
                            </Badge.Ribbon>
                        </Link>
                    </Col>


                    <Col  span={24} md={8} >
                        <Link href={`https://flacon-magazine.com`} target='_blank'>
                            <Badge.Ribbon color="green" text={`Сайт Магазин`}>
                                <Card hoverable cover={<img alt="example" src="/flacon-magazine.com_ копия.jpg" />} >
                                    <Meta title={`Сайт - Магазин: flacon-magazine.com`} description='Сайт - Магазин о тенденциях современной моды' />
                                </Card>
                            </Badge.Ribbon>
                        </Link>
                    </Col>
                    
                    <Col  span={24} md={8} >
                        <Link href={`https://github.com/devshazam/telegram_bot-django`} target='_blank'>
                            <Badge.Ribbon color="red" text={`Телеграм Бот`}>
                                <Card hoverable cover={<img alt="example" src="/6524335b2b0f5e0036f73b8c-Telegram Bots in DeFI.jpg" />} >
                                    <Meta title={`Закрытый Телеграм Бот`} description='Бот - генератор документов (акт, договор) для автоматизации выставления счетов' />
                                </Card>
                            </Badge.Ribbon>
                        </Link>
                    </Col>
                </Row>
            </div>
        </>
    );
};

