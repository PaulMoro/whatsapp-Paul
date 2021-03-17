import React from "react";
import '../assets/styleGlobal/App.scss';

/* components */
import Climate from '../components/climate';
import Carrusel from '../components/carrusel';
import Chat from '../components/chats';


const App = () => (
  <>
    <div className="main">
      <Carrusel />
      <Chat />
    </div>
    <Climate />
  </>
)

export default App;
