import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/App.css';
import App from './App';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCircleInfo, faPhone, faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
library.add( faCircleInfo, faPhone, faEnvelope, faWhatsapp, faBars )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

