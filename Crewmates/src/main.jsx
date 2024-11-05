import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import CaC from './pages/Cac.jsx';
import Home from './pages/Home.jsx';
import Gallery from './pages/Gallery.jsx';
import EditCrewMate from './pages/Edit.jsx';
import Details from './pages/Details.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />} >
          <Route index={true} path="Home" element={<Home />} />
          <Route index={true} path="gallery" element={<Gallery />} />
          <Route index={true} path="CaC" element={<CaC />} />
          <Route index={true} path="edit/:id" element={<EditCrewMate  />} />
          <Route index={true} path="crewmate/:id" element={<Details  />} />
          <Route index={true} path="*" element={<h1>Not Found</h1>} />
        </Route>
    </Routes>
  </BrowserRouter>
)
