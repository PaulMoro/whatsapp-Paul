import React from 'react';
import ReactDOM from 'react-dom';

/* components */
import Climate from './components/climate';
import Carrusel from './components/carrusel';
import Chat from './components/chats'

ReactDOM.render(
    <>
      <div className="main">
        <Carrusel />
        <Chat />
      </div>
      <Climate />
    </>,
  document.getElementById('app')
);
