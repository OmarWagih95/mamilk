import { CartItem } from '@/app/interfaces/interfaces';

interface Discount {
  code: string;
  type: 'percentage' | 'fixed' | 'buyXGetY' | 'freeShipping';
  value: number;
  minCartValue?: number;
  maxDiscountAmount?: number;
  applicableProducts?: string[];
  applicableCollections?: string[];
}

interface DiscountResult {
  code: string;
  type: string;
  amount: number;
  description: string;
}

export class DiscountEvaluator {
  private cart: CartItem[];
  private cartTotal: number;
  private userId?: string;
  private isFirstTimeUser: boolean;

  constructor(
    cart: CartItem[],
    userId?: string,
    isFirstTimeUser: boolean = false
  ) {
    this.cart = cart;
    this.cartTotal = this.calculateCartTotal();
    this.userId = userId;
    this.isFirstTimeUser = isFirstTimeUser;
  }

  private calculateCartTotal(): number {
    return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  public evaluateDiscount(discount: Discount): DiscountResult | null {
    // Check minimum cart value
    if (discount.minCartValue && this.cartTotal < discount.minCartValue) {
      return null;
    }

    // Check product/collection eligibility
    if (discount.applicableProducts || discount.applicableCollections) {
      const eligibleItems = this.cart.filter(item => {
        if (discount.applicableProducts?.includes(item.productId)) {
          return true;
        }
        if (discount.applicableCollections?.some(collection => 
          item.collections?.includes(collection)
        )) {
          return true;
        }
        return false;
      });

      if (eligibleItems.length === 0) {
        return null;
      }
    }

    // Calculate discount amount
    let discountAmount = 0;
    let description = '';

    switch (discount.type) {
      case 'percentage':
        discountAmount = (this.cartTotal * discount.value) / 100;
        if (discount.maxDiscountAmount) {
          discountAmount = Math.min(discountAmount, discount.maxDiscountAmount);
        }
        description = `${discount.value}% off`;
        break;

      case 'fixed':
        discountAmount = discount.value;
        description = `${discount.value} LE off`;
        break;

      case 'freeShipping':
        // Implement shipping cost calculation based on your logic
        discountAmount = 0; // Replace with actual shipping cost
        description = 'Free Shipping';
        break;

      case 'buyXGetY':
        // Implement buy X get Y logic based on your requirements
        discountAmount = 0; // Replace with actual calculation
        description = 'Buy X Get Y';
        break;
    }

    return {
      code: discount.code,
      type: discount.type,
      amount: discountAmount,
      description,
    };
  }

  public evaluateMultipleDiscounts(discounts: Discount[]): DiscountResult[] {
    const results: DiscountResult[] = [];

    for (const discount of discounts) {
      const result = this.evaluateDiscount(discount);
      if (result) {
        results.push(result);
      }
    }

    // Sort by discount amount in descending order
    return results.sort((a, b) => b.amount - a.amount);
  }

  public getTotalDiscount(discountResults: DiscountResult[]): number {
    return discountResults.reduce((total, discount) => total + discount.amount, 0);
  }

  public getFinalTotal(discountResults: DiscountResult[]): number {
    const totalDiscount = this.getTotalDiscount(discountResults);
    return Math.max(0, this.cartTotal - totalDiscount);
  }
} 