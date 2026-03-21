//Header ou footer comme outlet
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <br />
      <br />
      <Footer />
    </>
  );
  //header -> nav
}

export default App;
