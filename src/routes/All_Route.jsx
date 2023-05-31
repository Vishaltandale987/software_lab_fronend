import React from 'react'
import Home from '../pages/Home Page/Home'
import { Route, Routes } from "react-router-dom";
import Men from '../pages/Men Page/Men';
import Women from '../pages/Women Page/Women';
import Man_single_page from '../pages/Men Page/Man_single_page';

function All_Route() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/man" element={<Men />}></Route>
      <Route path="/manSinglePage" element={<Man_single_page />}></Route>

      <Route path="/women" element={<Women />}></Route>
      </Routes>
    </div>
  )
}

export default All_Route
