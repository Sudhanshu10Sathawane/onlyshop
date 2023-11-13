import ProductGrid from "./Components/Navbar/Grid/ProductGrid";
import Navbar from "./Components/Navbar/Navbar";
import { Product } from "./Data/Data";
function App() {
  return (
    <div id="app">
    <Navbar/>
    <ProductGrid products={Product}/>
      </div>
  );  
}

export default App;
