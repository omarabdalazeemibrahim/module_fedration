import React from "react";

import "./App.css";
const Header2 = React.lazy(() => import("shared/Header2"));
const Header = React.lazy(() => import("shared/Header"));
const Footer = React.lazy(() => import("shared/Footer"));
const PropsFile = React.lazy(() => import("shared/PropsFile"));

function App() {
  return (
    <>
      <Header />
      <Header2 />
      <PropsFile value={20} />
      <Footer />
    </>
  );
}

export default App;
