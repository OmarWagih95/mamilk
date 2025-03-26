import React from 'react'

const PrivacyPolicy = ({selectedTab ,setSelectedTab}:{selectedTab:string,setSelectedTab:React.Dispatch<React.SetStateAction<string>> }) => {
    return (
    <div className={`${selectedTab==="privacy-policy"?'flex flex-col gap-4':'hidden'}  h-auto w-full`}>
        <h1 className="font-bold text-2xl">Privacy Policy</h1>
        <p>At Mamilk, we value the privacy of our visitors and customers. This Privacy Policy outlines the types of personal information that we collect, how we use it, and the measures we take to protect your privacy.</p>

        <div>
            <h2 className="font-bold text-xl">1. Information We Collect</h2>
            <p>We collect two types of information: personal and non-personal information.</p>
            <ul className="list-disc pl-6">
                <li>
                    <strong>Personal Information</strong>: When you use our website, register an account, make a purchase, or contact us, we may collect personal information, including your name, email address, and phone number.
                </li>
                <li>
                    <strong>Non-Personal Information</strong>: We may collect non-personal information such as your browser type, IP address, and usage data through cookies to improve our website and services.
                </li>
            </ul>
        </div>

        <div>
            <h2 className="font-bold text-xl">2. How We Use Your Information</h2>
            <p>We use the information we collect for the following purposes:</p>
            <ul className="list-disc pl-6">
                <li>To process and fulfill orders.</li>
                <li>To communicate with you about your orders, updates, and promotional offers.</li>
                <li>To improve our website and services based on your usage.</li>
                <li>To respond to customer service inquiries and resolve issues.</li>
                <li>To comply with legal obligations.</li>
            </ul>
        </div>

        <div>
            <h2 className="font-bold text-xl">3. Data Security</h2>
            <p>We take appropriate technical and organizational measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>
        </div>

        <div>
            <h2 className="font-bold text-xl">4. Sharing Your Information</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. However, we may share information with trusted service providers for operational purposes, such as payment processing, email services, or website analytics. These providers are obligated to keep your information secure and confidential.</p>
            <p>We may also disclose information if required by law or in response to legal requests.</p>
        </div>

        <div>
            <h2 className="font-bold text-xl">5. Your Rights</h2>
            <p>You have the right to access, correct, or delete your personal information. If you would like to exercise any of these rights, please contact us through our WhatsApp number: 002 0 108071 2423.</p>
        </div>

        <div>
            <h2 className="font-bold text-xl">6. Changes to This Privacy Policy</h2>
            <p>We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. Any updates will be posted on this page with an updated effective date. We encourage you to review this policy periodically.</p>
        </div>

        <div>
            <h2 className="font-bold text-xl">7. Contact Us</h2>
            <p>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:</p>
            <p>Email: Mamilk-cs@hotmail.com</p>
            <p>WhatsApp Number: 002 0 108071 2423</p>
        </div>
    </div>
    )
}

export default PrivacyPolicy