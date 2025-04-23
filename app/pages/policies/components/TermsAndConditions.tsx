import React from 'react'

const TermsAndConditions = ({selectedTab ,setSelectedTab}:{selectedTab:string,setSelectedTab:React.Dispatch<React.SetStateAction<string>> }) => {
    return (
      <div className={`${selectedTab === "terms-and-conditions" ? 'flex flex-col gap-4' : 'hidden'} h-auto w-full`}>
        <p className="font-bold text-2xl">Terms and Conditions</p>
        <p>Welcome to Mamilk! By accessing or using our website, services, and products, you agree to comply with the following terms and conditions. If you do not agree with these terms, please refrain from using our site.</p>

        <div>
          <h2 className="font-bold text-xl">1. Acceptance of Terms</h2>
          <p>By using our website and services, you agree to be bound by these Terms and Conditions and our Privacy Policy, which are incorporated by reference. We reserve the right to modify or update these Terms at any time, and such changes will take effect immediately upon posting on this page.</p>
        </div>

        <div>
          <h2 className="font-bold text-xl">2. Use of Our Website</h2>
          <ul className="list-disc pl-6">
            <li>You must be at least 18 years old to use our website and make purchases.</li>
            <li>You agree to use our website for lawful purposes only and in compliance with all applicable local, state, and national laws and regulations.</li>
            <li>You are responsible for maintaining the confidentiality of your account information, including your username and password, and for any activities that occur under your account.</li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold text-xl">3. Product Information and Availability</h2>
          <p>We strive to provide accurate product descriptions, prices, and availability. However, we do not guarantee the accuracy of any product details or that items will always be available. We reserve the right to change product information, including prices, without notice.</p>
        </div>

        <div>
          <h2 className="font-bold text-xl">4. Ordering and Payment</h2>
          <p>By placing an order on our website, you agree to purchase the items selected at the current price displayed at the time of checkout. All payments must be made through the provided payment gateways. We reserve the right to cancel any orders if necessary for any reason, including payment issues or product availability.</p>
        </div>

        <div>
          <h2 className="font-bold text-xl">5. Shipping and Delivery</h2>
          <p>We aim to process and ship all orders promptly. However, we are not responsible for delays caused by third-party couriers or unforeseen circumstances. Delivery times are estimates, and actual delivery may vary.</p>
        </div>

        <div>
          <h2 className="font-bold text-xl">6. Returns and Refunds</h2>
          <p>We offer returns and refunds under the conditions outlined in our Return Policy. You must initiate a return while the courier is at your place. All items must be returned in their original condition. Some products may be exempt from returns based on their nature.</p>
        </div>

        <div>
          <h2 className="font-bold text-xl">7. Intellectual Property</h2>
          <p>All content on this website, including text, images, logos, graphics, and trademarks, is the property of Mamilk or its affiliates and is protected by copyright laws. You may not use, reproduce, or distribute any content without prior written consent from Mamilk.</p>
        </div>

        <div>
          <h2 className="font-bold text-xl">8. User-Generated Content</h2>
          <p>If you submit content such as reviews, comments, or photos to our website, you grant Mamilk a non-exclusive, royalty-free, and worldwide license to use, modify, or distribute such content. You agree that any content you submit is accurate and does not infringe on any third-party rights.</p>
        </div>

        <div>
          <h2 className="font-bold text-xl">9. Limitation of Liability</h2>
          <p>To the fullest extent permitted by law, Mamilk and its affiliates shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our website, products, or services. Our total liability will not exceed the amount you paid for the product or service giving rise to the claim.</p>
        </div>

        <div>
          <h2 className="font-bold text-xl">10. Privacy</h2>
          <p>Your use of the website is also governed by our <span onClick={()=>setSelectedTab("privacy-policy")} className="text-blue-500 hover:cursor-pointer underline">Privacy Policy</span>. Please review it to understand how we collect, use, and protect your personal information.</p>
        </div>

        <div>
          <h2 className="font-bold text-xl">11. Termination</h2>
          <p>We may suspend or terminate your access to the website or services at any time if we believe you have violated these Terms and Conditions.</p>
        </div>

        <div>
          <h2 className="font-bold text-xl">12. Contact Information</h2>
          <p>If you have any questions or concerns about these Terms and Conditions, please contact us at:</p>
          <p>Email: Mamilk-cs@hotmail.com</p>
          <p>Phone: 002 0 108 0712423</p>
        </div>
      </div>
    )
}

export default TermsAndConditions