import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";


function App() {
  
  return (
   <>
   <Navbar logo="My First App" about="About Us"/>
    <div className="container my-3">
    
      <Textform heading="Fill Below" place="Enter text here....."/>
      <About/>
    </div>
   </>
  );
}

export default App;
