import HeroesList from "./components/HeroesList";
import Header from "./components/Header";

function App() {
  
    return (
      <div className="flex flex-col bg-blue-500">
        <Header/>
        <HeroesList/>
      </div>
    );
  }

export default App;
