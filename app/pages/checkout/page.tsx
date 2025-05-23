'use client';
import CartItemSmall from '@/app/components/cart/CartItemSmall';
import { cartContext } from '@/app/context/cartContext';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Modal } from '@/app/components/Modal';
import { useRouter } from 'next/navigation';
import { Product, Size, Variant } from '@/app/interfaces/interfaces';
import Loading from '@/app/components/Loading';
import DiscountSection from '@/app/components/checkout/DiscountSection';
import { Discount, DiscountCalculationType } from '@/app/types/discount';

interface ShippingZone {
  _id: string;
  zone_rate: number;
}

const CheckoutPage = () => {
  const router = useRouter();
  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [shippingZones, setShippingZones] = useState<ShippingZone[]>([]);
  const { cart, setCart } = useContext(cartContext);
  const [state, setState] = useState('');
  const [shipping, setShipping] = useState(70);
  const [states, setStates] = useState<{ name: string; shipping_zone: string }[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');
  const [buttonText, setButtonText] = useState('');
  const [loading, setLoading] = useState(false);
  const [buttonFunction, setButtonFunction] = useState<() => void>(() => () => {});
  const [errors, setErrors] = useState<string[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState<Discount | null>(null);
  const [discountAmount, setDiscountAmount] = useState(0);

  const calculateTotals = () => {
    // Calculate subtotal first
    const calculatedSubTotal = cart.reduce(
      (acc, cartItem) => acc + cartItem.price * cartItem.quantity,
      0
    );
    setSubTotal(calculatedSubTotal);
    
    // Calculate discount amount
    let newDiscountAmount = 0;
    let effectiveShipping = shipping;

    if (appliedDiscount && appliedDiscount.value !== undefined) {
      if (appliedDiscount.calculationType === 'PERCENTAGE') {
        newDiscountAmount = Math.round((calculatedSubTotal * appliedDiscount.value) / 100);
        console.log('Percentage discount:', {
          subtotal: calculatedSubTotal,
          percentage: appliedDiscount.value,
          discountAmount: newDiscountAmount
        });
      } else if (appliedDiscount.calculationType === 'FIXED_AMOUNT') {
        newDiscountAmount = appliedDiscount.value;
        console.log('Fixed amount discount:', {
          subtotal: calculatedSubTotal,
          fixedAmount: appliedDiscount.value,
          discountAmount: newDiscountAmount
        });
      }
      else if (appliedDiscount.calculationType === 'FREE_SHIPPING'){
        effectiveShipping = 0;
        newDiscountAmount = shipping; // Set the discount amount to the original shipping cost
        console.log('Free shipping discount applied:', {
          originalShipping: shipping,
          effectiveShipping: 0,
          discountAmount: newDiscountAmount
        });
      }
    }

    setDiscountAmount(newDiscountAmount);
    
    // Calculate final total
    const finalTotal = calculatedSubTotal + effectiveShipping;
    console.log('Final calculation:', {
      subtotal: calculatedSubTotal,
      shipping: effectiveShipping,
      discountAmount: newDiscountAmount,
      finalTotal
    });
    setTotal(finalTotal);
  };

  const checkStock = async (): Promise<boolean> => {
    if (cart.length === 0) {
      setModalVisible(true);
      setModalMessage('Your cart is empty. Please add items to your cart before proceeding to checkout.');
      setButtonText('Redirect To Home Page');
      setButtonFunction(() => () => {
        router.push('/');
      });
      return false;
    }

    try {
      const stockChecks = cart.map(async (item) => {
        const response = await axios.get(`/api/products?productID=${item.productId}`);
        const product = response.data.data as Product;
        const variant = product.variations.find((s: Variant) => s.color === item.color);
        const size = variant?.sizes.find((s: Size) => s.name === item.size);

        if (!variant || !size) {
          throw new Error(`Product configuration not found: ${item.productName}`);
        }

        if (size.stock === 0) {
          setCart((prevCart) => prevCart.filter((cartItem) => cartItem.productId !== item.productId));
          setButtonText('Continue');
          setButtonFunction(() => () => {
            setModalVisible(false);
          });
          throw new Error(`Sorry but ${item.productName} is out of stock.`);
        }

        if (size.stock < item.quantity) {
          setCart((prevCart) =>
            prevCart.map((cartItem) =>
              cartItem.productId === item.productId
                ? { ...cartItem, quantity: size.stock }
                : cartItem
            )
          );
          setButtonText('Continue');
          setButtonFunction(() => () => {
            setModalVisible(false);
          });
          throw new Error(`The quantity of ${item.productName} exceeds the available stock. We've adjusted it to ${size.stock}.`);
        }
      });

      await Promise.all(stockChecks);
      return true;
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
    calculateTotals();
  }, [cart, appliedDiscount, shipping]);

  useEffect(() => {
    const stata = states.find((s) => s.name === state);
    const shippingZone = shippingZones.find((z) => z._id === stata?.shipping_zone);
    setShipping(shippingZone?.zone_rate || 70);
  }, [state, shippingZones]);

  const validateInputs = () => {
    const validationErrors: string[] = [];

    if (!name.trim()) validationErrors.push('Name is required.');
    // if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    //   validationErrors.push('Valid email is required.');
    if (!phone.trim() || !/^\d{10,15}$/.test(phone))
      validationErrors.push('Valid phone number is required.');
    if (!address.trim()) validationErrors.push('Address is required.');
    if (cart.length === 0) validationErrors.push('Cart is empty.');

    setErrors(validationErrors);
    return validationErrors.length === 0;
  };

  const handleDiscountApplied = (discount: Discount | null) => {
    // alert(discount?.calculationType)
    setAppliedDiscount(discount);
  };

  const handleConfirmOrder = async () => {
    if (!validateInputs()) return;

    setLoading(true);
    try {
      const isStockAvailable = await checkStock();
      if (!isStockAvailable) {
        setLoading(false);
        return;
      }

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
        discount: appliedDiscount ? {
          code: appliedDiscount.code,
          amount: appliedDiscount.value,
          type: appliedDiscount.calculationType
        } : null
      };

      const response = await axios.post('/api/orders', orderData);
      if (response.status === 200) {
        setLoading(false);
        setModalMessage('Your Order placed successfully!');
        setButtonText('Continue Shopping');
        setButtonFunction(() => () => {
          router.push('/');
        });
        setModalVisible(true);
        setCart([]);
        setName('');
        setEmail('');
        setPhone('');
        setAddress('');
        setNotes('');
      }
    } catch (error: any) {
      setLoading(false);
      if (error.response?.status === 400 && error.response.data?.error) {
        setModalMessage(error.response.data.error);
        setButtonText('Review Cart');
        setButtonFunction(() => () => {
          setModalVisible(false);
        });
        setModalVisible(true);
      } else {
        setModalMessage('An error occurred while placing the order. Please try again.');
        setButtonText('Try Again');
        setButtonFunction(() => () => {
          setModalVisible(false);
        });
        setModalVisible(true);
      }
    }
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div className="pt-32 bg-primaryLight">
      {modalVisible && (
        <Modal
          message={modalMessage}
          buttonText={buttonText}
          buttonFunction={buttonFunction}
          onClose={closeModal}
        />
      )}
      {loading && <Loading />}

      <div className="max-lg:max-w-xl mx-auto w-full">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 max-lg:order-1 p-6 !pr-0 max-w-4xl mx-auto w-full">
            <div className="text-center max-lg:hidden">
              <h2 className="text-3xl font-bold text-primary inline-block border-b-2 border-secondary">
                Checkout
              </h2>
            </div>

            <form className="lg:mt-16" onSubmit={(e) => e.preventDefault()}>
              <div>
                <h2 className="text-xl font-bold text-primary">Shipping info</h2>

                <div className="grid sm:grid-cols-2 gap-8 mt-8">
                  <div>
                    <input
                      type="text"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="px-2 pb-2 bg-primaryLight rounded-2xl border-pink3 text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none"
                    />
                  </div>
                  <div>
                    <select
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      className="px-2 pb-2 bg-primaryLight rounded-2xl border-pink3 textrum text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none"
                    >
                      {states.map((state, index) => (
                        <option key={index} value={state.name}>
                          {state.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="px-2 pb-2 bg-primaryLight rounded-2xl border-pink3 text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="px-2 pb-2 bg-primaryLight rounded-2xl border-pink3 text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="px-2 pb-2 bg-primaryLight rounded-2xl border-pink3 text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Notes"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="px-2 pb-2 bg-primaryLight rounded-2xl border-pink3 text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none"
                    />
                  </div>
                </div>

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
                <button
                  type="button"
                  onClick={handleConfirmOrder}
                  className="bg-accent hover:bg-primary transition-all duration-500 ease-in-out bg-[length:100%_100%] hover:bg-[length:200%_100%] min-w-[150px] px-6 py-3.5 text-sm md:text-lg text-white rounded-2xl"
                >
                  Confirm Order
                </button>
              </div>
            </form>
          </div>

          <div className="lg:col-span-1 max-lg:order-2 p-6">
            <div className="border-l-2 border-primary p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold text-primary mb-6">Order Summary</h2>
              
              {/* Cart Items */}
              <div className="space-y-4 mb-6">
                {cart.map((item) => (
                  <CartItemSmall key={item.id} item={item} wishListBool={false} />
                ))}
              </div>

              {/* Discount Section */}
              <DiscountSection onDiscountApplied={handleDiscountApplied} />

              {/* Order Totals */}
              <div className="mt-6 space-y-2 text-black">
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span>{subTotal} LE</span>
                </div>
                {appliedDiscount && appliedDiscount.value !== undefined && (
                  <div className="flex justify-between text-sm text-green-600">
                    <span>Discount ({appliedDiscount.code})</span>
                    <span>
                      {appliedDiscount.calculationType === 'FREE_SHIPPING' 
                        ? `-${shipping} LE (Free Shipping)`
                        : `-${appliedDiscount.calculationType === 'PERCENTAGE' 
                          ? Math.round((subTotal * appliedDiscount.value) / 100)
                          : appliedDiscount.value} LE`}
                    </span>
                  </div>
                )}
                <div className="flex justify-between text-sm">
                  <span>Shipping</span>
                  <span>{appliedDiscount?.calculationType === 'FREE_SHIPPING' ? '0' : shipping} LE</span>
                </div>
                <div className="flex justify-between font-bold mt-4 pt-4 border-t">
                  <span>Total</span>
                  <span>{total} LE</span>
                </div>
              </div>

              {/* ... rest of the order summary ... */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;