import Footer from "./customer/components/Footer/Footer";
import Navigation from "./customer/components/Navigation/Navigation";
import HomePage from "./customer/pages/HomePage/HomePage";

function App() {
  return (
    <div className="">
      <Navigation/>
      <div className="">
        <HomePage/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
