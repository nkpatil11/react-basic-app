
import { BrowserRouter, Routes } from 'react-router-dom';
import { NavBar } from './componants/navbar';
import { Route } from 'react-router-dom';
import { Home } from './componants/home';
import { AddProduct } from './componants/addProduct';
import { ProductsList } from './componants/productsList';

function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/add-product' element={<AddProduct />}></Route>
        <Route path='/products-list' element={<ProductsList />}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
