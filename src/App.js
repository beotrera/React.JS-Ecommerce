import Navbar from './components/NavBar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home'
import Personalize from './components/Personalize/Personalize'
import Contact from './components/Contact/Contact'
import Size from './components/Size/Size'
import ItemListContainer from './components/ItemList/ItemLisContainer'
import ItemDetailContainer from './components/ItemDetail/ItemDetailsContainer'
import Cart  from "./components/Cart/Cart"
import CheckOut from './components/Cart/CheckOut'
import Check from "./components/Cart/Check"
import  PopUp from "./components/PopUp/PopUP"
import  {BrowserRouter,Switch,Route} from "react-router-dom"
import CartProvider from "./context/CartProvider";


function App (){

  return (
    <CartProvider>
      <BrowserRouter className="App">
        <Navbar />
        <PopUp />
        <Switch>
          <Route  path="/item/:id?">
            <ItemDetailContainer />
          </Route>
          <Route  path="/category/:id?">
            <ItemListContainer />
          </Route>
          <Route  path="/check/:id?">
            <Check />
          </Route>
          <Route  path="/products">
            <ItemListContainer />
          </Route>
          <Route  path="/size">
            <Size />
          </Route>
          <Route  path="/contact">
            <Contact />
          </Route>
          <Route  path="/cart">
            <Cart />
          </Route>
          <Route  path="/personalize">
            <Personalize />
          </Route>
          <Route  path="/checkout">
            <CheckOut />
          </Route>
          <Route  exact path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
