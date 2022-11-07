import React from "react";

import "./App.css";
const Header2 = React.lazy(() => import("shared/Header2"));
const Header = React.lazy(() => import("shared/Header"));
const Footer = React.lazy(() => import("shared/Footer"));

function App() {
  return (
    <>
      <Header />
      <Header2 />
      <Footer />
    </>
  );
}

export default App;
