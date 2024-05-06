import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Login from './components/Login.tsx';

// async function mockRender() {
//   const { worker } = await import('./mocks/browser.ts');
//   return worker.start();
// }

// mockRender().then(() => {
//   ReactDOM.createRoot(document.getElementById("root")!).render(
//     <React.StrictMode>
//       <Login />
//       {/* <App /> */}
//     </React.StrictMode>
//   );
// });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Login />
    {/* <App /> */}
  </React.StrictMode>
);