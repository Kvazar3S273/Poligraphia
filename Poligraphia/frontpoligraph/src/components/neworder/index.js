import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const NewOrder = () => {
    return (
        <div className="App-header">
                <h1 className="mt-3 mb-3">Виберіть вид поліграфії</h1>

            <div className="container">

                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <Link to="/neworder" className="text-decoration-none">
                            <img src="../images/vizitka.png" className="rounded img-thumbnail" alt="" width="200"  />
                            <h4 className="App-link">Візитки</h4>
                        </Link>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <Link to="/neworder" className="text-decoration-none">
                            <img src="../images/flyer.png" className="rounded img-thumbnail" alt="" width="200" />
                            <h4 className="App-link">Листівки</h4>
                        </Link>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <Link to="/neworder" className="text-decoration-none">
                            <img src="../images/calendarik.png" className="rounded img-thumbnail" alt="" width="200" />
                            <h4 className="App-link">Календарики</h4>
                        </Link>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <Link to="/neworder" className="text-decoration-none">
                            <img src="../images/birka.png" className="rounded img-thumbnail" alt="" width="200" />
                            <h4 className="App-link">Бірки</h4>
                        </Link>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <Link to="/neworder" className="text-decoration-none">
                            <img src="../images/naklejka.png" className="rounded img-thumbnail" alt="" width="200" />
                            <h4 className="App-link">Наклейки</h4>
                        </Link>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <Link to="/neworder" className="text-decoration-none">
                            <img src="../images/henger.png" className="rounded img-thumbnail" alt="" width="200" />
                            <h4 className="App-link">Хенгери</h4>
                        </Link>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <Link to="/neworder" className="text-decoration-none">
                            <img src="../images/oracal.png" className="rounded img-thumbnail" alt="" width="200" />
                            <h4 className="App-link">Самоклейка</h4>
                        </Link>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <Link to="/neworder" className="text-decoration-none">
                            <img src="../images/broshura.png" className="rounded img-thumbnail" alt="" width="200" />
                            <h4 className="App-link">Брошури</h4>
                        </Link>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <Link to="/neworder" className="text-decoration-none">
                            <img src="../images/menu.png" className="rounded img-thumbnail" alt="" width="200" />
                            <h4 className="App-link">Меню</h4>
                        </Link>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <Link to="/neworder" className="text-decoration-none">
                            <img src="../images/card.png" className="rounded img-thumbnail" alt="" width="200" />
                            <h4 className="App-link">Пластикові картки</h4>
                        </Link>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <Link to="/neworder" className="text-decoration-none">
                            <img src="../images/bloknot.png" className="rounded img-thumbnail" alt="" width="200" />
                            <h4 className="App-link">Блокноти</h4>
                        </Link>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <Link to="/neworder" className="text-decoration-none">
                            <img src="../images/blank.png" className="rounded img-thumbnail" alt="" width="200" />
                            <h4 className="App-link">Бланки</h4>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewOrder