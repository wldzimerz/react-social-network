import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ClickToComponent } from 'click-to-react-component';
import { BrowserRouter } from 'react-router-dom';
import { MainRouter } from 'src/router';
import 'src/styles/index.css';
import 'src/styles/tailwind.css';
import 'antd/dist/antd.min.css';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <ClickToComponent />
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>
  </StrictMode>,
);
