import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store/store";
import Abonement from "./page/abonement/Abonement";
import Footer from "../../../components/footer/Footer";

const Payment = () => {
    return (
        <div className='wrapper'>
                <Provider store={store}>
                    <Abonement/>
                     <Footer/>
                </Provider>
        </div>
    );
};

export default Payment;