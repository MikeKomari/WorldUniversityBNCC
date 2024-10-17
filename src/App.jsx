import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Layout from "./layout/Layout";
import Detail from "./Pages/Detail/Detail";
import SearchAll from "./Pages/SearchAll/SearchAll";
import Error from "./Pages/Error/Error";
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchAll />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:country" element={<Detail />} />
        <Route path="/error" element={<Error />} />

        <Route path="*" element={<Navigate to="/error" />} />
      </Routes>
    </Layout>
  );
}

export default App;
