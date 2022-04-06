import React from 'react';
import { createRoot } from 'react-dom/client'
import { GifProvider } from './context/GifContext';
import GifExpertApp from './GifExpertApp';
import './index.css';

createRoot(
  document.getElementById('root')
).render(
  <GifProvider>
    <GifExpertApp />
  </GifProvider>
)
