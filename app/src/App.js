import "./App.css";
import { RegistrationForm } from "./components/reg/Register2";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Context from "./components/content/Context";
import React, { useState } from "react";
import MainPage from "./pages/MainPage/MainPage";
import Payment from "./pages/Payment/PayMent/payment";
import PortfolioPage from "./pages/Profile/pages/portfolioPage/PortfolioPage";
import Modal from "./components/reg/Register";
import TreinBlock from "./pages/TreinBlock/treinBlock";

function App() {
  const [renderEl, setRender] = useState(false);
  const [modalCheck, setModalChek] = useState(false);
  const [modalCheck2, setModalChek2] = useState(false);

  function Rend() {
    if (renderEl == false) {
      return <Modal />;
    } else {
      return;
      <RegistrationForm />;
    }
  }

  const objRend = {
    renderEl: renderEl,
    setRender: setRender,
    modalCheck: modalCheck,
    setModalChek: setModalChek,
    modalCheck2: modalCheck2,
    setModalChek2: setModalChek2,
  };

  return (
    <Context.Provider value={objRend}>
      <BrowserRouter>
        <Routes>
           <Route path={'/'} element={<MainPage/>}/>
           <Route path={'/tren'} element={<TreinBlock/>}/>
           <Route path={'/portfolio'} element={<PortfolioPage/>}/>
           <Route path={'/payment'} element={<Payment/>}/>
          {/*<PortfolioPage />*/}
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
