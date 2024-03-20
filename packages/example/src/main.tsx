import { MilkdownProvider } from '@milkdown/react';
import { ProsemirrorAdapterProvider } from '@prosemirror-adapter/react';
import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './App.tsx';
import './index.css';
import '@milkdown/theme-nord/style.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MilkdownProvider>
      <ProsemirrorAdapterProvider>
        <App />
      </ProsemirrorAdapterProvider>
    </MilkdownProvider>
  </React.StrictMode>,
);
