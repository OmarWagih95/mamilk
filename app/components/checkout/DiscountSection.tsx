'use client';

import React, { useEffect, useState, useContext } from 'react';
import { cartContext } from '@/app/context/cartContext';
import { CartItem } from '@/app/interfaces/interfaces';
import { Discount, DiscountCalculationType } from '@/app/types/discount';

interface DiscountSectionProps {
  onDiscountApplied: (discount: Discount | null) => void;
}

const DiscountSection: React.FC<DiscountSectionProps> = ({ onDiscountApplied }) => {
  const [discountCode, setDiscountCode] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [activeDiscounts, setActiveDiscounts] = useState<Discount[]>([]);
  const { cart } = useContext(cartContext);

  useEffect(() => {
    fetchActiveDiscounts();
  }, [cart]);

  const fetchActiveDiscounts = async () => {
    try {
      const cartTotal = cart.reduce((total: number, item: CartItem) => total + (item.price * item.quantity), 0);
      const response = await fetch(`/api/active-discounts?cartTotal=${cartTotal}`);
      const data = await response.json();
      
      if (data.success && data.discounts.length > 0) {
        setActiveDiscounts(data.discounts);
        // Always apply the first available discount
        //3ayzen n5leeh y3ml apply l akbr discount 
        onDiscountApplied(data.discounts[0]);
      } else {
        setActiveDiscounts([]);
        onDiscountApplied(null);
      }
    } catch (error) {
      console.error('Error fetching active discounts:', error);
      setActiveDiscounts([]);
      onDiscountApplied(null);
    }
  };

  const handleApplyDiscount = async () => {
    if (!discountCode.trim()) {
      setError('Please enter a discount code');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/apply-discount', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cart,
          discountCode: discountCode.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to apply discount');
      }
      console.log("data.discount"+data.discount.calculationType);
      onDiscountApplied(data.discount);
      setDiscountCode('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to apply discount');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold text-primary mb-4">Discounts</h3>
      
      {/* Active Automatic Discounts */}
      {activeDiscounts.length > 0 && (
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-600 mb-2">Available Discounts:</h4>
          <div className="space-y-2">
            {activeDiscounts.map((discount, index) => (
              <div key={index} className="text-sm text-gray-600">
                • {discount.code}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Manual Discount Code Input */}
      <div className="flex gap-2">
        <input
          type="text"
          value={discountCode}
          onChange={(e) => setDiscountCode(e.target.value)}
          placeholder="Enter discount code"
          className="flex-1 px-2 py-2 border text-gray-600 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-accent"
        />
        <button
          onClick={handleApplyDiscount}
          disabled={loading}
          className="px-4 py-2 bg-accent text-white rounded hover:bg-primary disabled:opacity-50"
        >
          {loading ? 'Applying...' : 'Apply'}
        </button>
      </div>
      {error && (
        <p className="mt-2 text-red-500 text-sm">{error}</p>
      )}
    </div>
  );
};

export default DiscountSection; 