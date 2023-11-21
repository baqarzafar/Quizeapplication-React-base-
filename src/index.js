import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Quizeapp from './quize';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
<Quizeapp></Quizeapp>
  </React.StrictMode>
);

reportWebVitals();
