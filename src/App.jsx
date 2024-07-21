import Header from "./components/Header";
import Meals from "./components/Meals";
import { CartContextProvider } from "./store/CartContext";
import { UserProgressContext } from "./store/userProgressContext";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
function App() {
  return (
    <>
    <UserProgressContext>
      <CartContextProvider>
      <Header />
      <Meals />
      <Cart />
      <Checkout />
      </CartContextProvider>
    </UserProgressContext>

    </>
  );
}

export default App;
