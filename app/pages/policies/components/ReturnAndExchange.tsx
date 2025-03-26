import React from 'react';

const ReturnAndExchange = ({selectedTab, setSelectedTab}: {selectedTab: string, setSelectedTab: React.Dispatch<React.SetStateAction<string>>}) => {
  return (
    <div className={`${selectedTab === "return-and-exchange" ? 'flex flex-col gap-4' : 'hidden'} h-auto w-full`}>
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-2xl">Return and Exchange Policy</h1>
        <p>At Mamilk, we strive to provide high-quality products to our customers. If you are not satisfied with your purchase, we are happy to offer a return and exchange policy, subject to the following terms and conditions.</p>

        <div>
          <h2 className="font-bold text-xl">1. Eligibility for Return and Exchange</h2>
          <ul className="list-disc pl-6">
            <li>Returns and exchanges are only accepted for products purchased directly from our platforms.</li>
            <li>You must request a return or exchange within 5 days from the date of receipt of the product. Shipping fees for the returned item will be charged.</li>
            <li>Products must be unused, unworn, and in their original packaging with all tags intact to be eligible for return or exchange.</li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold text-xl">2. How to Return or Exchange an Item</h2>
          <ul className="list-disc pl-6">
            <li>Contact our customer service team at <strong>Mamilk-cs@hotmail.com</strong> or WhatsApp <strong>002 0 108071 2423</strong> with your order number, reason for return/exchange, and details of the product.</li>
            <li>If the return is approved, you will receive a confirmation text and instructions on how to send the product back.</li>
            <li>Return shipping costs are the responsibility of the customer unless the return is due to an error on our part (e.g., damaged or incorrect items).</li>
            <li>Please pack the product securely in its original packaging to prevent damage during return shipping.</li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold text-xl">3. Refunds</h2>
          <ul className="list-disc pl-6">
            <li>Once we receive and inspect the returned item(s), we will notify you of the approval or rejection of your refund.</li>
            <li>If approved, a refund will be issued to the original payment method within 5 business days.</li>
            <li>Shipping charges are non-refundable, and return shipping costs will be deducted from your refund unless we made an error in fulfilling your order.</li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold text-xl">4. Exchanges</h2>
          <ul className="list-disc pl-6">
            <li>For exchanges of size, color, or product, contact customer service with exchange details.</li>
            <li>After receiving and inspecting the returned item, we will process the exchange. Additional charges may apply for higher-value items.</li>
            <li>Shipping costs for exchanged items are the customer’s responsibility unless the return is due to an error on our part.</li>
            <li>If the item you want to exchange is out of stock, we will notify you and offer a full refund or alternative options.</li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold text-xl">5. Damaged or Defective Items</h2>
          <ul className="list-disc pl-6">
            <li>If you receive a damaged or defective product, contact us immediately at <strong>Mamilk-cs@hotmail.com</strong> or WhatsApp <strong>002 0 108071 2423</strong>.</li>
            <li>We may request photos or other details about the issue before processing a return or exchange.</li>
            <li>If we determine that the product is defective, we will cover the return shipping costs and offer a full refund or replacement.</li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold text-xl">6. Contact Us</h2>
          <p>For any questions or assistance regarding our return and exchange policy, please reach out to us:</p>
          <ul className="list-disc pl-6">
            <li>Email: <strong>Mamilk-cs@hotmail.com</strong></li>
            <li>WhatsApp: <strong>002 0 108071 2423</strong></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ReturnAndExchange;
