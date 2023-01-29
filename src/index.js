import React from 'react';
import ReactDOM from 'react-dom/client';
import * as Aulas from './aulas';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Aulas.Aula4 />
  </React.StrictMode>
);
