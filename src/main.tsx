// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import App from './App.tsx';
// import './index.css';

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// ✅ Import AOS and its CSS
import AOS from 'aos';
import 'aos/dist/aos.css';

// ✅ Initialize AOS
AOS.init({
  duration: 800,        // Animation duration in ms
  once: true,           // Whether animation should happen only once while scrolling down
  easing: 'ease-in-out', // Animation timing function
  mirror: false,
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
