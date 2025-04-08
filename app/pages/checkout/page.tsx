'use client';
import CartItemSmall from '@/app/components/cart/CartItemSmall';
import { cartContext } from '@/app/context/cartContext';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import {Modal} from '@/app/components/Modal';
import { useRouter } from 'next/navigation';
import { Product, Size, Variant } from '@/app/interfaces/interfaces';
import Loading from '@/app/components/Loading';

const CheckoutPage = () => {
  const router = useRouter()
  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [shippingZones, setShippingZones] = useState<ShippingZone[]>([]);
  const { cart, setCart } = useContext(cartContext);
  const [state, setState] = useState('');
  const [shipping, setShipping] = useState(70);
  const [states, setStates] = useState<{ name: string, shipping_zone: number }[]>([]);

  // Form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');
  const [buttonText, setButtonText] = useState('');
  const [loading,setLoading]=useState(false)
  const [buttonFunction,setButtonFunction] =useState<() => void>() // State
  const [errors, setErrors] = useState<string[]>([]);  // To store validation errors
  const [modalVisible, setModalVisible] = useState(false); // State for modal visibility
  const [modalMessage, setModalMessage] = useState(''); // State for modal message

  // Calculate subtotal and total
  const calculateTotals = () => {
    const calculatedSubTotal = cart.reduce(
      (acc, cartItem) => acc + cartItem.price * cartItem.quantity,
      0
    );
    setSubTotal(calculatedSubTotal);
  };

  const checkStock = async () => {
    console.log("Cart contents:", cart);
if (cart.length === 0) {
  setModalVisible(true)
  setModalMessage('Your cart is empty. Please add items to your cart before proceeding to checkout.');
  setButtonText('Redirect To Home Page')
  setButtonFunction(() => () => {
    router.push('/');
  });
  // if (cart.length === 0) {
  //   router.push('/'); 
  // }
  console.log("Cart is empty, skipping stock check.");
  return;
}
    try {
      const stockChecks = cart.map(async (item) => {
        console.log("called")
        console.log('productID'+item.productId)
        const response = await axios.get(`/api/products?productID=${item.productId}`);
        const  product  = response.data.data as Product;
        const variant = product.variations.find((s: Variant) => s.color === item.color);
        const size = variant?.sizes.find((s: Size) => s.name === item.size);

        if (size?.stock === 0) {
          setCart((prevCart) => prevCart.filter((cartItem) => cartItem.productId !== item.productId));
          setButtonText('Continue')
          setButtonFunction(() => () => {
            setModalVisible(false);
          });    
                throw new Error(`Sorry but ${item.productName} is out of stock.`);

        }
        if (size && size.stock < item.quantity) {
          setCart((prevCart) =>
            prevCart.map((cartItem) =>
              cartItem.productId === item.productId
                ? { ...cartItem, quantity: size.stock }
                : cartItem
            )
          );
          setButtonText("Continue");
          setButtonFunction(() => () => {
            setModalVisible(false);
          });
          throw new Error(`The quantity of ${item.productName} exceeds the available stock. We've adjusted it to ${size.stock}.`);
        }
      });

      // Wait for all stock checks to complete
      await Promise.all(stockChecks);
    } catch (error: any) {
      setModalMessage(error.message);
      setModalVisible(true);
      return false;
    }
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
    checkStock();

    calculateTotals();

  }, [cart]);

  useEffect(() => {
    const stata = states.find(s => s.name === state);
    const shippingZone = shippingZones.find(z => z.zone_id === stata?.shipping_zone);

    if (shippingZone) {
      setShipping(shippingZone.zone_rate);
      setTotal(shippingZone.zone_rate + subTotal);
    } else {
      setShipping(70);
    }
  }, [state, shippingZones, subTotal]);

  // Validation function
  const validateInputs = () => {
    const validationErrors: string[] = [];

    if (!name.trim()) validationErrors.push('Name is required.');
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) validationErrors.push('Valid email is required.');
    if (!phone.trim() || !/^\d{10,15}$/.test(phone)) validationErrors.push('Valid phone number is required.');
    if (!address.trim()) validationErrors.push('Address is required.');
    if (cart.length === 0) validationErrors.push('Cart is empty.');

    setErrors(validationErrors);
    return validationErrors.length === 0;
  };

  // Handle form submission
  const handleConfirmOrder = async () => {

    if (!validateInputs()) return;
    setLoading(true)
    const orderData = {
      name,
      email,
      phone,
      address,
      notes,
      state,
      shipping,
      total,
      cart,
      subTotal,
    };
    try {
      const isStockAvailable = await checkStock();
      const response = await axios.post('/api/orders', orderData);
      if (response.status === 200) {
        setLoading(false);
        setModalMessage('Your Order placed successfully!');
        setModalVisible(true);
        setCart([]); // Clear cart and reset form
        // ...
      }
    } catch (error: any) {
      if (error.response?.status === 400 && error.response.data?.updatedCart) {
        // Cart was modified — notify and update
        setCart(error.response.data.updatedCart);
        setModalMessage(error.response.data.messages.join("\n"));
        setButtonText("Review and Confirm Again");
        setButtonFunction(() => () => {
          setModalVisible(false);
        });
        setModalVisible(true);
      } else {
        setModalMessage('An error occurred while placing the order.');
        setModalVisible(true);
      }
    }
    
  };
  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <div className="pt-14 bg-pink0">
            {modalVisible && <Modal message={modalMessage} buttonText={buttonText} buttonFunction={()=>{buttonFunction}} onClose={closeModal} />} {/* Modal component */}
              {loading && <Loading/>}

      <div className="max-lg:max-w-xl mx-auto w-full">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 max-lg:order-1 p-6 !pr-0 max-w-4xl mx-auto w-full">
            <div className="text-center max-lg:hidden">
              <h2 className="text-3xl font-bold text-primary inline-block border-b-2 border-secondary">Checkout</h2>
            </div>

            <form className="lg:mt-16" onSubmit={(e) => e.preventDefault()}>
              <div>
                <h2 className="text-xl font-bold text-primary">Shipping info</h2>

                <div className="grid sm:grid-cols-2 gap-8 mt-8">
                  <div>
                    <input type="text" placeholder="Name" value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="px-2 pb-2 bg-pink1 border-pink3 text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none" />
                  </div>
                  <div>
                    <select value={state} onChange={(e) => setState(e.target.value)}
                      className="px-2 pb-2 bg-pink1 border-pink3 text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none">
                      {states.map((state, index) => (
                        <option key={index} value={state.name}>{state.name}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <input type="email" placeholder="Email" value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="px-2 pb-2 bg-pink1 border-pink3 text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none" />
                  </div>
                  <div>
                    <input type="text" placeholder="Phone" value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="px-2 pb-2 bg-pink1 border-pink3 text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none" />
                  </div>
                  <div>
                    <input type="text" placeholder="Address" value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="px-2 pb-2 bg-pink1 border-pink3 text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none" />
                  </div>
                  <div>
                    <input type="text" placeholder="Notes" value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="px-2 pb-2 bg-pink1 border-pink3 text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none" />
                  </div>
                </div>

                {/* Error messages */}
                {errors.length > 0 && (
                  <div className="mt-4 text-red-500 text-sm">
                    <ul className="list-disc ml-5">
                      {errors.map((err, idx) => (
                        <li key={idx}>{err}</li>
                      ))}
                    </ul>
                  </div>
                )}

              </div>
              <div className="flex flex-wrap gap-4 mt-8">
                <button type="button" onClick={handleConfirmOrder}
                  className={`bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 hover:bg-gradient-to-l hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-700 ease-in-out bg-[length:100%_100%] hover:bg-[length:200%_100%] min-w-[150px] px-6 py-3.5 text-sm md:text-lg  text-white rounded-lg`}>
                  Confirm Order
                </button>
              </div>
            </form>
          </div>

          <div className="bg-pink1  lg:h-screen lg:sticky lg:top-0 lg:max-w-[430px] w-full lg:ml-auto">
            <div className="relative h-full">
              <div className="p-6 md:pb-12 overflow-y-scroll max-lg:max-h-[450px] lg:h-[calc(100vh-50px)]">
                <h2 className="text-xl font-bold text-primary">Order Summary</h2>

                <div className="space-y-6 mt-4">
                  {cart.map((cartona, index) => (
                    <CartItemSmall item={cartona} wishListBool={false} key={index} />
                  ))}
                </div>
              </div>

              <div className="lg:absolute border-t-2 bg-pink1 border-pink3 px-2 md:px-6 lg:left-0 lg:bottom-0  w-full p-4">
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
