import React, { useState } from 'react';
// import { useCart } from '../context/cartContext';
import { DiscountEvaluator } from '@/app/utils/discountEvaluator';

interface DiscountInputProps {
  onDiscountApplied: (discounts: any[]) => void;
}

const DiscountInput: React.FC<DiscountInputProps> = ({ onDiscountApplied }) => {
  const [discountCode, setDiscountCode] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
//   const { cart } = useCart();

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
        //   cart,
          discountCode: discountCode.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to apply discount');
      }

      onDiscountApplied([data.discount]);
      setDiscountCode('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to apply discount');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <div className="flex gap-2">
        <input
          type="text"
          value={discountCode}
          onChange={(e) => setDiscountCode(e.target.value)}
          placeholder="Enter discount code"
          className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-accent"
        />
        <button
          onClick={handleApplyDiscount}
          disabled={loading}
          className="px-6 py-2 bg-accent text-white rounded hover:bg-primary disabled:opacity-50"
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

export default DiscountInput; 