import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import CartItem from "../components/CartItem";

const Cart = () => {
  
  const productData = useSelector((state) => state.shop.productData);
  const userInfo = useSelector((state) => state.shop.userInfo);
  const [totalAmt, setTotalAmt] = useState();
  const [payNow, setPayNow] = useState(false);
  
  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    
    setTotalAmt(price);
  }, [productData]);
  
  useEffect(() => {
    if (userInfo && totalAmt > 0) {
      setPayNow(true);
    }
  }, [userInfo, totalAmt])
  
  // === Test payment offline ===
  const handleTest = () => {
    if(!userInfo){
      setPayNow(true);
    }
  }
  // === End test payment offline ===
  
  // === Disable backend === 
  // const payment = async (token) => {
  //   await axios.post("http://localhost:8000/pay", {
  //     amout: totalAmt * 100,
  //     token: token,
  //   });
  // };

  return (
    <div>
      <img
        className="w-full h-[202px] object-cover"
        src="https://images.pexels.com/photos/1435752/pexels-photo-1435752.jpeg?auto=compress=tinyrgb&w=1260&h=750&dpr=1"
        alt="img water"
      />
      <div className="w-[90%] mx-auto py-20 flex">
        <CartItem />
        <div className="w-1/3 h-full bg-[#fafafa] py-6 px-4">
          <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
            <h2 className="text-2x1 font-medium">Panier totals</h2>
            <p className="flex items-center gap-4 text-base">
              Sous-total
              <span className="font-titleFont font-bold text-lg">
                {totalAmt?.toFixed(2)} €
              </span>
            </p>
            <p className="flex items-center gap-4 text-base">
              Frais de livraison
              <span className="flex items-start gap-4 text-base">Gratuit</span>
            </p>
          </div>
          <div>
            <p className="font-titleFont font-semibold flex justify-between mt-6">
              Total
              <span className="text-xl font-bold">
                {totalAmt?.toFixed(2)} €
              </span>
            </p>
            <span className={userInfo ? "hidden" : "mt-4 block text-red-500 font-bold"}>Connectez-vous pour accéder au paiement</span>
            {
              payNow && totalAmt ? (
                <>
                <div className="w-full mt-6 flex items-center justify-center">
                  <StripeCheckout
                    stripeKey="pk_test_51N54JHEZFgsxN1Q4dddinn8ng7uUcciSwxQI6ZwNNsLMrbfBK2FF3VFjqrIGVH4NW1MS9ih21fVgKN9b0FiXWcrh00JsSPVfVw"
                    name="MonShop"
                    amount={totalAmt * 100}
                    label="Payer"
                    currency="EUR"
                    description={`Montant total à payer ${totalAmt?.toFixed(2)} €`}
                    //=== Disable backend ===
                    // token={payment}
                    email={userInfo ? userInfo.email : "unmailpourtester@test.fr"}
                  />
                </div>
                  <div className="item-center justify-center mt-2">
                    <p className="text-lg font-bold">Info CB test :</p>
                    <p className="italic font-semibold text-blue-400">Numéro: 4242 4242 4242 4242</p>
                    <p className="italic font-semibold text-blue-400">Date: 12/34</p>
                    <p className="italic font-semibold text-blue-400">Cryptogramme: 123</p>
                  </div>
                  </>
              ) : (
                <span className={(!userInfo) || (totalAmt > 0 ) ? "hidden" : "mt-4 block text-red-500"}>Votre panier est vide</span>
              )
            }
          </div>
          {
            userInfo ? ("") : 
            (
              <div className="mt-6">
              <p className="font-semibold text-green-500 italic">Tester le paiement (hors connexion)</p>
              <div className="flex flex-col">
                <button 
                  className="w-[100px] mt-2 py-2 px-4 bg-green-600 text-white font-semibold tracking-wide rounded-md hover:bg-green-800 duration-300" 
                  onClick={handleTest}>
                    Tester
                </button>
              </div>
            </div>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Cart;
