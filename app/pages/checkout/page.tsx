'use client';
import CartItemSmall from '@/app/components/cart/CartItemSmall';
import { cartContext } from '@/app/context/cartContext';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';

const CheckoutPage = () => {
  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [shippingZones, setShippingZones] = useState<ShippingZone[]>([]);
  const { cart, setCart } = useContext(cartContext);
  const [state, setState] = useState('');
  const [shipping, setShipping] = useState(70);
  const [states, setStates] = useState<{ name: string, shipping_zone: number }[]>([]);
  

  // Function to calculate subtotal and total
  const calculateTotals = () => {
    const calculatedSubTotal = cart.reduce(
      (acc, cartItem) => acc + cartItem.price * cartItem.quantity,
      0
    );
    setSubTotal(calculatedSubTotal);
  };

  useEffect(() => {
    const getStates = async () => {
      const response = await axios.get(`/api/states`);
      setStates(response.data);
      if (response.data.length > 0) {
        setState(response.data[0].name);
      }
    };
    getStates();

    const getShippingZones = async () => {
      const response = await axios.get('/api/shipping');
      setShippingZones(response.data);
    };
    getShippingZones();
  }, []);

  useEffect(() => {
    calculateTotals(); // Recalculate totals when cart changes
  }, [cart]);

  useEffect(() => {
    const stata = states.find(stata => stata.name === state);
    const shippingZone = shippingZones.find(zona => zona.zone_id === stata?.shipping_zone);

    if (shippingZone) {
      setShipping(shippingZone.zone_rate);
      setTotal(shippingZone.zone_rate+subTotal)
    } else {
      setShipping(70);
    }

    calculateTotals(); // Recalculate totals when shipping or state changes
  }, [state, shippingZones]);

  return (
    <div className="pt-14 bg-white">
      <div className="max-lg:max-w-xl mx-auto w-full">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 max-lg:order-1 p-6 !pr-0 max-w-4xl mx-auto w-full">
            <div className="text-center max-lg:hidden">
              <h2 className="text-3xl font-bold text-primary inline-block border-b-2 border-secondary">Checkout</h2>
            </div>

            <form className="lg:mt-16">
              <div>
                <h2 className="text-xl font-bold text-primary">Shipping info</h2>

                <div className="grid sm:grid-cols-2 gap-8 mt-8">
                  <div>
                    <input type="text" placeholder="Name"
                      className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none" />
                  </div>
                  <div>
                    <select 
                      onChange={(e) => setState(e.target.value)}
                      className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none">
                      {states.map((state, index) => (
                        <option key={index} value={state.name}>{state.name}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <input type="email" placeholder="Email"
                      className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none" />
                  </div>
                  <div>
                    <input type="number" placeholder="Phone"
                      className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none" />
                  </div>
                  <div>
                    <input type="text" placeholder="Address"
                      className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none" />
                  </div>
                  <div>
                    <input type="text" placeholder="Notes"
                      className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none" />
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 mt-8">
                <button type="button" className="min-w-[150px] px-6 py-3.5 text-sm bg-primary text-white rounded-lg hover:bg-secondary">Confirm Order</button>
              </div>
            </form>
          </div>

          <div className="bg-gray-100 lg:h-screen lg:sticky lg:top-0 lg:max-w-[430px] w-full lg:ml-auto">
            <div className="relative h-full">
              <div className="p-6 overflow-auto max-lg:max-h-[450px] lg:h-[calc(100vh-50px)]">
                <h2 className="text-xl font-bold text-primary">Order Summary</h2>

                <div className="space-y-6 mt-8">
                  {cart.map((cartona, index) => (
                    <CartItemSmall item={cartona} wishListBool={false} key={index} />
                  ))}
                </div>
              </div>

              <div className="lg:absolute lg:left-0 lg:bottom-0 bg-gray-200 w-full p-4">
                <h4 className="flex flex-wrap gap-4 text-sm text-secondary font-bold">Sub-Total <span className="ml-auto">{subTotal} LE</span></h4>
                <h4 className="flex flex-wrap gap-4 text-sm text-secondary font-bold">Shipping <span className="ml-auto">{shipping} LE</span></h4>
                <h4 className="flex flex-wrap gap-4 text-sm text-secondary font-bold">Total <span className="ml-auto">{total} LE</span></h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;