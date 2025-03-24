import React from 'react'

const PrivacyPolicy = ({selectedTab ,setSelectedTab}:{selectedTab:string,setSelectedTab:React.Dispatch<React.SetStateAction<string>> }) => {
    return (
    <div className={`${selectedTab==="privacy-policy"?'flex flex-col gap-4':'hidden'}  h-auto w-full`}>
        {/* <div>
            <p>At ANCHUVA, we value your trust and are committed to safeguarding your personal information. This Privacy Notice explains how we collect, use, share, and protect your data when you interact with our website, services, or products.</p>
        </div>
        <div className='flex flex-col'>
            <div>

            <h1 className='font-bold text-xl' className='font-semibold'>Information We Collect</h1>
            <p>Personal Information</p>
We collect personal data you provide directly to us, such as:
•	Contact details: Name, email address, phone number, and mailing address.
•	Payment information: Credit/debit card details or other payment methods.
•	Account information: Login credentials and purchase history.
</p>
            </div> */}

        {/* </div> */}
        <div className='flex flex-col gap-4'>
  <p>
    At ANCHUVA, we value your trust and are committed to safeguarding your personal information.
    This Privacy Notice explains how we collect, use, share, and protect your data when you interact
    with our website, services, or products.
  </p>
<div>

  <h1 className='font-bold text-xl mb-4'>Information We Collect</h1>
  <h2 className='font-semibold' >Personal Information</h2>
  <p>We collect personal data you provide directly to us, such as:</p>
  <ul>
    <li>Contact details: Name, email address, phone number, and mailing address.</li>
    <li>Payment information: Credit/debit card details or other payment methods.</li>
    <li>Account information: Login credentials and purchase history.</li>
  </ul>
</div>

 <div> <h2 className='font-semibold' >Automatically Collected Data</h2>
  <p>When you visit our website, we may automatically collect:</p>
  <ul>
    <li>Device information: IP address, browser type, and operating system.</li>
    <li>Usage data: Pages visited, time spent on the website, and clickstream activity.</li>
    <li>Cookies and tracking: See our Cookie Policy for details.</li>
  </ul>
  </div>

<div>


  <h1 className='font-bold text-xl'>How We Use Your Information</h1>
  <p>We use your personal data to:</p>
  <ul>
    <li>Process and fulfill your orders.</li>
    <li>Communicate with you regarding purchases, inquiries, and promotions.</li>
    <li>Improve our website, products, and services.</li>
    <li>Comply with legal obligations and protect against fraud.</li>
  </ul>
  </div>

<div>


  <h1 className='font-bold text-xl'>Sharing Your Information</h1>
  <p>We do not sell your personal data. However, we may share your information with:</p>
  <ul>
    <li>
      Service providers: Third parties that help us process payments, ship orders, and provide customer
      support.
    </li>
    <li>Legal authorities: When required by law or to protect our rights and interests.</li>
    <li>Marketing partners: For campaigns, only with your consent.</li>
  </ul>
  </div>

  <div>

  <h1 className='font-bold text-xl'>Data Security</h1>
  <p>
    We employ robust measures to protect your personal data, including encryption, secure servers, and
    restricted access. While we strive for data security, no system can be 100% secure. Please protect
    your account credentials.
  </p>
  </div>

<div>

  <h1 className='font-bold text-xl'>Your Rights</h1>
  <p>Depending on your location, you may have rights regarding your personal data, such as:</p>
  <ul>
    <li>Access: Request a copy of your data.</li>
    <li>Correction: Update or correct inaccuracies.</li>
    <li>Deletion: Request the deletion of your personal data.</li>
    <li>Opt-out: Unsubscribe from marketing communications.</li>
  </ul>
  <p>
    To exercise these rights, contact us at <a href="mailto:privacy@anchuva.com">privacy@anchuva.com</a>.
  </p>
  <h1 className='font-bold text-xl'>Account Data Deletion
  </h1>
  <p>We provide clear and user-friendly options for you to delete your account and associated personal data. Here’s how you can delete your account:</p>
 <p>Web-Based Deletion Option
 If you prefer to delete your account via the ANCHUVA website:</p>
  <ul>
    <li>Log in to your account on the ANCHUVA website.
    </li>
    <li>Navigate to the Account section and select Overview.
    </li>
    <li>In the center corner of the page, locate and click the Delete Account button.</li>
    <li>Follow the on-screen instructions to confirm your account deletion.</li>
  </ul>
  <h1 className='font-semibold'>Timeframe for Data Deletion
  </h1>
  <p>
  Upon confirming your account deletion, all personal data associated with your account will be permanently removed from our systems within the legally mandated timeframe. In cases where data retention is required by law, we will ensure compliance with those regulations.
  </p>
  <h1 className='font-semibold'>Customer Support Assistance
  </h1>
  <p>If you experience any issues while trying to delete your account, you can reach out to our customer support team through the contact information provided on our website. We will assist you in completing the process.</p>
  <p>
  This addition to our privacy policy ensures that you have the flexibility to manage your data securely and efficiently.
  </p>
  </div>
<div>
  <h1 className='font-bold text-xl'>Cookies and Tracking</h1>
  <p>
    Our website uses cookies to enhance your experience and gather analytics. You can manage your
    cookie preferences through your browser settings.
  </p>
  </div>
<div>
  <h1 className='font-bold text-xl'>Third-Party Links</h1>
  <p>
    Our website may contain links to third-party sites. We are not responsible for their privacy
    practices, and we encourage you to review their policies.
  </p>
  </div>
<div>
  <h1 className='font-bold text-xl'>Changes to This Privacy Notice</h1>
  <p>
    We may update this Privacy Notice periodically. The revised version will be posted with the updated
    effective date.
  </p>
  </div>
  <div>
  <h1 className='font-bold text-xl'>Contact Us</h1>
  <p>
    For questions or concerns about this Privacy Notice or how we handle your data, please reach out
    to:
  </p>
  <p>
    <strong>ANCHUVA Privacy Team</strong><br />
    Email: <a href="mailto:privacy@anchuva.com">privacy@anchuva.com</a>
  </p>
  </div>

  <p>
    Thank you for trusting ANCHUVA with your personal information. We are committed to ensuring your
    privacy and security.
  </p>
</div>


        
    </div>
  )
}

export default PrivacyPolicy