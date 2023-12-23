
// import './App';
import Header from "./Header";
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Chackout";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { useEffect } from "react";
import { auth } from "./Firebase";
import Payment from "./Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Orders from "./Orders";

const promise = loadStripe(
 "pk_test_51OQcKSGKzYL00TDpcRCjJrdI4RBFBMtGuGFgnRMkqNXruUc1SOkDK0pY5vdYcdAH67zCGUTDzKzf4lzwxJtOSR1c006cGJVMEJ"
  );

function App() {
  const [{ }, dispatch] = useStateValue();
  useEffect(() => {
   
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS", authUser);

      if (authUser) {
        
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {

        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);



  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
          <Route
            path="/orders"
            element={
              <>
                <Header />
                <Orders />
                
              </>
            }
          />
       
          <Route
            path="/payment"
            element={
              <Elements stripe={promise}>
                 <Header />
                <Payment />
              </Elements>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;  