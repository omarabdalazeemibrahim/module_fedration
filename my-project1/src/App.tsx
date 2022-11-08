import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Header2 from "./Header2";
import Footer from "./Footer";
import PropsFile from "./PropsFile";

function App() {
  return (
    <>
      <Header />
      <Header2 />
      <PropsFile value={5} />
      <Footer />
    </>
  );
}

export default App;
