import React from 'react'

const ReturnAndExchange = ({selectedTab ,setSelectedTab}:{selectedTab:string,setSelectedTab:React.Dispatch<React.SetStateAction<string>> }) => {
  return (
    <div className={`${selectedTab === "return-and-exchange" ? 'flex flex-col gap-4' : 'hidden'} h-auto w-full`}>
    <div className="flex flex-col gap-4">
      <h1 className="font-bold text-2xl">Return and Exchange Policy</h1>
      <p>
        Welcome to ANCHUVA! We take pride in providing you with high-quality leather purses and exceptional customer service. 
        To ensure transparency and satisfaction, please carefully review our return and exchange policy.
      </p> 
  
      <div>
        <h2 className="font-bold text-xl">1. General Policy Overview</h2>
        <p>At ANCHUVA, returns and exchanges are available exclusively for purchases made within Egypt. We regret that we cannot accept returns or exchanges for international shipments at this time.</p>
        <p>For a return or exchange to be valid:</p>
        <ul className="list-disc pl-6">
          <li>The request must be initiated within 14 days of purchase.</li>
          <li>The product must be in its original, unused, and undamaged condition, including all original tags, packaging, and accessories.</li>
        </ul>
      </div>
  
      <div>
        <h2 className="font-bold text-xl">2. Eligibility for Returns</h2>
        <h3 className="font-semibold">Requirements for Returns</h3>
        <p>To qualify for a return:</p>
        <ul className="list-disc pl-6">
          <li>The leather purse must be free from signs of wear, scratches, stains, or other damage.</li>
          <li>Original packaging, tags, and accessories (e.g., dust bags, authentication cards) must be intact and included.</li>
          <li>Proof of purchase, such as a receipt or order confirmation, must be provided.</li>
        </ul>
        <h3 className="font-semibold">Items Not Eligible for Return</h3>
        <ul className="list-disc pl-6">
          <li>Customized or personalized items.</li>
          <li>Items purchased during a sale or clearance event.</li>
          <li>Products that fail to meet the outlined eligibility criteria.</li>
        </ul>
      </div>
  
      <div>
        <h2 className="font-bold text-xl">3. Exchange Policy</h2>
        <p>We are happy to facilitate exchanges for items of equal or greater value (subject to payment of the price difference). The same conditions for eligibility outlined in Section 2 apply to exchanges.</p>
        <h3 className="font-semibold">How to Exchange an Item</h3>
        <ol className="list-decimal pl-6">
          <li>Contact our customer service team within 14 days of purchase.</li>
          <li>Share your order number, proof of purchase, and the details of the item you wish to exchange.</li>
          <li>Ship the item back to us following instructions provided by our team.</li>
          <li>After inspection and approval, we will process the exchange.</li>
        </ol>
      </div>
  
      <div>
        <h2 className="font-bold text-xl">4. Return Process</h2>
        <h3 className="font-semibold">Step 1: Contact Us</h3>
        <ul className="list-disc pl-6">
          <li>Initiate your return by contacting us at INFO@ANCHUVA.COM or using our website’s contact form.</li>
          <li>Provide your order number, proof of purchase, and reason for return.</li>
        </ul>
        <h3 className="font-semibold">Step 2: Ship the Item</h3>
        <ul className="list-disc pl-6">
          <li>Once your return is approved, ship the item to the address provided by our team.</li>
          <li>The customer is responsible for return shipping costs unless the item is defective upon delivery.</li>
        </ul>
        <h3 className="font-semibold">Step 3: Inspection and Refund</h3>
        <ul className="list-disc pl-6">
          <li>Upon receiving your item, our team will inspect it to ensure compliance with our return criteria.</li>
          <li>If the return is approved, a refund will be processed to your original payment method within 7–10 business days.</li>
        </ul>
      </div>
  
      <div>
        <h2 className="font-bold text-xl">5. Additional Terms and Conditions</h2>
        <ul className="list-disc pl-6">
          <li>Returns and exchanges are strictly limited to purchases within Egypt.</li>
          <li>We reserve the right to reject returns or exchanges that do not meet the outlined criteria.</li>
          <li>Original shipping fees, customs charges, and taxes (if applicable) are non-refundable.</li>
          <li>ANCHUVA is not responsible for items lost or damaged during the return shipping process.</li>
        </ul>
      </div>
  
      <div>
        <h2 className="font-bold text-xl">6. Contact Us</h2>
        <p>For any questions or assistance regarding our return and exchange policy, please reach out to us:</p>
        <ul className="list-disc pl-6">
          <li>EMAIL: INFO@ANCHUVA,COM</li>
        </ul>
      </div>
  
      <p>Thank you for choosing ANCHUVA. We appreciate your trust and are committed to providing you with a superior shopping experience.</p>
    </div>
  </div>
  
  )
}

export default ReturnAndExchange