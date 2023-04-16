import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './screens/Home/Home';

import { createContext } from "react";

const SplitPaneContext = createContext();

export default SplitPaneContext;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
