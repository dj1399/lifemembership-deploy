import logo from './logo.svg';
import './App.css';
import Lifemembership from "./Lifemembership/lifemembership";
import Search from "./Lifemembership/Search";
import Footer from "./Lifemembership/Footer";
function App() {
  return (
    <div className="App">
      <Lifemembership/>
       <Search/>
       <Footer/>
    </div>
  );
}

export default App;
