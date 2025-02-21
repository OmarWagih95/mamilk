import React from 'react'

const TermsAndConditions = ({selectedTab ,setSelectedTab}:{selectedTab:string,setSelectedTab:React.Dispatch<React.SetStateAction<string>> }) => {
    return (
      <div className={`${selectedTab === "terms-and-conditions" ? 'flex flex-col gap-4' : 'hidden'} h-auto w-full`}>
  <p>
    THE CUSTOMERS EXPRESSLY ACKNOWLEDGE THAT THEY HAVE READ THESE GENERAL TERMS OF SALE AND HAVE
    ACCEPTED THEM WITHOUT RESERVATION BEFORE PLACING ANY PURCHASE. ANY PURCHASE MADE ON THE
    WWW.ANCHUVA.COM WEBSITE IMPLIES THE CUSTOMER’S UNRESERVED ACCEPTANCE OF THESE GENERAL TERMS OF SALE
    AND THE GENERAL TERMS OF USE.
  </p>

  <div>
    <h2 className="font-bold text-xl">ARTICLE 1. DEFINITIONS</h2>
    <p>For the purpose of these terms of sales, words, terms, and expressions hereafter shall have the meanings set forth below:</p>
    <ul className="list-disc pl-6">
      <li><strong>“Agreement”:</strong> shall mean: (i) the summary of the Order sent by the Company to the Customer after validation of the Order, the details of which also appear on the User Account, or the receipt issued or sent by the Company to the Customer following a Purchase at one of the stores; and (ii) these TOS. “Company”: shall mean ANCHUVA, limited liability corporation with sole shareholder (“société par actions simplifiée à associé unique”) duly organized under the laws of Egypt, with a capital of €74,787.00, whose registered office is located at 69, rue de Monceau, 75008, Paris, France, registered with the Paris Companies Register under identification number 793 555 368. “Customer”: shall mean any User, end-consumer natural person or non-professional legal entity, excluding any reseller or intermediary acting on behalf of a reseller, who proceeds with a Purchase.</li>
      <li><strong>“TOS”:</strong> refers to the provisions set forth herein which detail the rights and obligations of the Company and the Customer in connection with the purchase of Products. </li>
      <li><strong>“TOU”:</strong> refers to the provisions of the general terms of use of this Site accessible on the Site and accepted without reservation by any User who wishes to proceed with a Purchase. </li>
      <li><strong>“Guest Account”:</strong>shall mean the temporary account reserved for the User who does not wish to create a User Account and which is created only to place one single Order at a time. </li>
      <li><strong>“Login Identification”:</strong>”: shall mean a confidential identifier and password allowing access to the User Account and to certain content on the Site. </li>
      <li><strong>“Order”:</strong> shall mean any request by a Customer to purchase one or more Products on the Site, subject to validation by the Company. </li>
      <li><strong>“Products”:</strong> ”: shall mean any product offered for Purchase by the Company on the Site and/or in the store(s). “Purchase” shall mean the transfer of ownership of one or more Products from the Company to the Customer, following the placing of an Order on the Site validated by the Company or a purchase at one of the stores, and in accordance with the provisions of these TOS. </li>
      <li><strong>“Site”:</strong> ”: shall mean the www.anchuva.com/ website from which the Company offers its Products for Purchase to the Customer. </li>
      <li><strong>“User”:</strong>shall mean any user of the Site.</li>
      <li><strong>“User Account”:</strong> shall mean a space reserved for the registered Users, accessible after registration on the Site via a Login Identification or through an already existing account with a third-party partner or provider and allowing them to access certain content on the Site or place an Order.</li>
    </ul>
  </div>

  <div>
    <h2 className="font-bold text-xl">ARTICLE 2. PURPOSE AND SCOPE</h2>
    <p>
    The TOS apply to any Purchase of Products with the Company on the Site and/or in stores, subject to the provisions provided herein. The TOS are written in English in their original version and shall prevail over any other version. The TOS shall prevail over, and exclude, any documents or correspondence from the Customers, including their general terms and conditions of purchase and the stipulations mentioned on their own order forms. These TOS supersede any other agreement and understanding, whether prior or concurrent, between the Company and the Customer regarding the Purchase of the Products. The Company may update these TOS at any time. The TOS in force at the time of the conclusion of the Agreement are those that are binding upon the Customer. </p>
  </div>

  <div>
    <h2 className="font-bold text-xl">ARTICLE 3. FEATURES OF THE PRODUCTS</h2>
    <p>
    The Products sold by the Company on the Site and/or in stores are clothing and fashion accessories, the characteristics of which are described on the Site and/or can be provided by the sales staff at the stores upon the Customer’s request, and subject to availability. While every effort is made to ensure that the color and design of the Products the photos of which are displayed on the Site are faithful to the original Products, they may vary, in particular due to the technical limitations of color rendering on the Customer’s computer hardware. Consequently, the Company shall not be held responsible or legally liable for any non-substantial errors or inaccuracies in the photographs or graphical representations of the Products appearing on the Site.
    </p>
  </div>

  <div>
    <h2 className="font-bold text-xl">ARTICLE 4. ONLINE ORDERS</h2>
    <h3 className="font-semibold">4.1 Online Ordering Process</h3>
    <p>All Orders placed on the Site are done so through the use of a User Account or a Guest Account. The Customer has the option to purchase one or more Products. The Order process is as follows:</p>
    <ol className="list-decimal pl-6">
      <li>1.	Acceptance of the TOU of the Site: the TOU are deemed accepted by any Users who wish to consult and continue to browse the Site, and who thus represent and affirm that they have read and approved the same to that effect. The TOU must be accepted at each new connection to the Site (including through a new device or another browser) prior to accessing its contents, viewing the Products, and proceeding with an Order.</li>
      <li>2.	Product selection: the Customers must select the Product they wish to order.</li>
      <li>3.	Adding the Product(s) to the User’s shopping cart.</li>
      <li>4.	Checking the content of the Customer’s selection: the Customers check the content of their shopping cart while keeping the possibility to delete the Products they have selected.</li>
      <li>5.	Logging in to the User Account or creating a Guest Account: the Customers who wish to proceed without logging in or creating a User Account must then fill in the identification form made available to them and by providing the requested information (mandatory information: surname, first name or company name, address, email, password, telephone number for delivery) in order to place an Order through a Guest Account.</li>
      <li>6.	Verification of the Customer’s Order: the Customers shall check the summary of their Order, which shall include a description of the Product(s), the price per Product excluding and including VAT and the total price excluding and including VAT, as well as the Customer’s contact details, and the delivery method. The Customers are responsible for making sure that the information is correct and consistent with their request. The Customers shall have the option to modify their Order or their information.</li>
      <li>7.	Choice of payment method: the Customer shall choose the payment method for his/her Order in accordance with article 4.4 of these TOS.</li>
      <li>8.	Acceptance of the TOS: by checking the corresponding box. The TOS must be accepted for each Order. Once this step has been completed, the Customer may no longer modify and/or cancel the Order.</li>
      <li>9.	Order validation: the Customer shall receive an email acknowledging receipt of the Order and summarizing the contents of the Order, i.e. the Customer’s shipping and billing addresses, the Order number, the date of the Order, the list of Products ordered and their amounts, the shipping method, and the payment method.</li>
      <li>10.	Processing of the Order by the Company and verification of the availability of the Products ordered.</li>
      <li>11.	Confirmation of the Order: receipt of an email confirming the Order. The Agreement is deemed concluded on the date this email is sent.</li>
      <li>12.	Order Tracking: the Customer shall receive information by email concerning the various stages of the Order processing and preparation steps up to the time of shipment. A carrier tracking number is provided to the Customer when the Order is approved. If the Customers wish to obtain information concerning the tracking of their order, they can log on to the website of the carrier chosen by the Company, and follow the progress of their parcel.</li>
    </ol>
    <h3 className="font-semibold">4.2 Availability of the Products</h3>
    <p>The Products displayed on the Site are available while stocks last. Consequently, and unless a definitive Order is confirmed by the Company, the latter shall in no way guarantee that the Products will remain available for Purchase during a given period, or at their then displayed price. Errors or changes may exceptionally occur, in particular in the case of simultaneous Orders for the same Product by multiple Customers. In the event that a Product is unavailable after an Order has been placed, the Company shall inform the Customer by email or telephone as soon as possible, shall proceed with the Customer’s reimbursement of the Order and shall suggest the Customer choose another Product displayed on the Site as a replacement. The Company reserves the right to change at any time and without prior notice the Products offered on the Site. In order to ensure a better quality of service and availability of its Products to all of its Customers, the Company reserves the right to limit the quantity of Products that can be purchased by a single Customer, in accordance with the applicable provisions in this regard. The Company reserves the right not to accept an Order from a Customer with whom it is in dispute over a previous Order, or if the Company reasonably believes that such Customer has infringed these TOS or engaged in fraudulent activity, or for any other legitimate reason. The Customer can request to be put on a waitlist to be informed when an unavailable Product is back in stock. The Customers must provide their contact details (title, first name, last name, email address) and consent to receive an automated confirmation email informing them of the availability of the Product. The Customers may then, should they wish to proceed with the Order of the Product in accordance with the provisions of article 4.1, above.</p>
    <h3 className="font-semibold">4.3 Price</h3>
    <p>The prices of the Products are expressed in LE in Egypt and in US Dollars globally (on the basis of a semi-annual conversion based on the average of the last six (6) months via the converter used for the Site), all taxes included and subject to possible customs fees for Orders outside Egypt which shall be borne by the Customer. Except in the case of refunds for (i) the exercise of the right of cancel or (ii) lack of conformity and hidden defects, the Company shall not refund the VAT applied to purchases made on the Site (even in the event that the buyer, after receiving the Products, resends them to a country outside Egypt). The Company reserves the right to modify at any time and without prior notice the prices of the Products offered on the Site. Products are invoiced on the basis of the prices displayed on the Site at the time the Order is placed, subject to availability of the Products ordered at that time. Any claim by the Customer that a Product is not available or that its price has varied during the Order process or between two Orders shall be dismissed. All Orders must be paid for immediately upon placing the Order. In the event of unavailability of certain Products ordered under the conditions set forth in article 4.2 of these TOS, only the price and shipping costs related to the available Products will be charged.</p>
    <h3 className="font-semibold">4.4 Payment Terms</h3>
    <ul className="list-disc pl-6">
      <li>4.4.1 Payments by credit card Payment may be made by Visa, Mastercard, or American Express credit cards. Payment is made on the secure site of the Company’s banking partner. The Customer’s banking data does not circulate unencrypted on the Internet and cannot be intercepted. They are not provided to the Company.</li>
      <li>4.4.2 Payment by Cash Payment can be made via Mylerz. This is only available in Egypt. Shipping, returns and cash on delivery costs will fall on the Customer. The Customer is deemed to have accepted the terms and conditions and privacy policy of the selected payment service.</li>
    </ul>
  </div>

  <div>
    <h2 className="font-bold text-xl">ARTICLE 5. TERMS OF DELIVERY OF PRODUCTS</h2>
    <p>The provisions below shall apply exclusively to Orders placed on the Site.</p>
    <h3 className="font-semibold">5.1 Delivery Address</h3>
    <p>
    The Company shall deliver the Products to Egypt and abroad to the countries indicated on the Site, at the applicable delivery and shipping fees.
Delivery shall be made to the delivery address validated by the Customer at the time of the Order as the “delivery address,” which may be different from the “billing address.” The amount of the preparation and shipping costs depends on the place of delivery and the total amount of the Order. They will be detailed in the invoice.
The Company shall not be held responsible or legally liable for any action and/or fees and/or taxes (which are the exclusive responsibility of the Customer) and/or delays due to customs services over which it has no control.
    </p>
    <h3 className="font-semibold">5.2 Delivery Methods and Time Limits</h3>
    <p>
    The available delivery methods depend on the quantity of Products ordered and the place of delivery.
If the Order reaches a certain volume, the Company reserves the right to send them to the Customer in multiple shipments and/or multiple parcels.
The Company reserves the right to choose the carrier.
The date of availability depends on the state of the stock, the date of shipment of the Order, and the time of availability, which in turn depends on the method of availability.
For all Products, the average delivery time is between four (3) and nine (10) working days from the confirmation of the Order by email.
The dates and delivery times provided by the Company are given as an indication only. The Company reserves the right to change the dates previously announced.
As an exception to the above-mentioned deadlines, “pre-order” sales may be subject to longer delivery times. In this case, the estimated delivery time for “pre-order” sales may be six (6) to nine (9) months from the confirmation of the Order by email.
Exceeding the estimated delivery time indicated shall not entitle the Customer to any cancellation of the Order, to any reduction in the price paid by the Customer, or to any payment of damages. However, if the Order is not delivered within thirty (45) days of the estimated delivery date, the Customer shall have the option to cancel the Order at no cost. The sums paid by the Customer shall then be refunded. If the Company is able to do so, the Company reserves the right to offer the Customer a Product of equivalent quality and price to the Product initially ordered. Shipping timelines provided are estimates and may be subject to delays caused by unforeseen circumstances beyond our control, including but not limited to issues with local shipping providers, natural disasters, strikes, or other disruptions. In such cases, the company will make reasonable efforts to inform customers and resolve the delay promptly.

    </p>
    <h3 className="font-semibold">5.3 Receipt of the Order</h3>
    <p>
    Upon receipt of the Order, it is the responsibility of the Customer or the authorized recipient of the Order to verify the conformity of the Product(s) provided with the Order prior to signing the delivery slip attached to the parcel.
In the event of a problem, the Customer shall make handwritten reservations on the delivery slip (damaged Product, missing Product, etc.), accompanied by their signature, and inform the carrier within three (3) working days of receipt of the Product(s) by registered letter with acknowledgment of receipt.
The Customer shall provide a copy of that letter to the Company:
<li>•	By email at info@anchuva.com; </li>
<li>•	By post mail at: ANCHUVA – Customer Service – Address to be determined, Egypt.</li>
No claim regarding the condition of the delivered parcel(s) will be accepted if the delivery slip was signed without any reservations.
In case of incomplete address, wrong address, refusal to take possession of the parcel by the recipient, or lack of information leading to an impossibility to deliver the Product to the recipient in time, the Company cannot be held responsible for the final quality of this delivery. If such lack of information results in a second presentation to the recipient, the Company shall be entitled to charge the Customer for the costs of such second delivery. The Customer is subject to the carrier’s general terms of delivery, which, in certain cases, if not accepted by the Customer, may impact the quality of the delivery.
Thus, in case of absence of the recipient, according to the carrier’s general delivery conditions, the parcel may be presented again and/or put in consignment in an agreed relay point and/or in front of the Customer’s home and/or in a carrier’s “sorting-waiting” center, and/or sent back to the Company, which shall not be held responsible or legally liable for any theft, loss, damage to the Products related to their delivery and, in general, for the final quality of the delivery.
In the event that delivery is not possible, and the Product is returned to the Company by the carrier, the Company will not make a new delivery.

    </p>
    <h3 className="font-semibold">5.4 Terms of return of Products in case of reservations</h3>
    <p>The Product(s) must be returned in their original condition (packaging, accessories, etc.) and according to the following shipping conditions:</p>
    <li>•	By using the postage-paid return label and return form, duly completed and dated, which are supplied in the parcel;</li>
    <li>•	For specific products, whose packaging does not allow the return label to be included in the original parcel, the Customer must first contact Customer Service to obtain a return label, at the following email address: info@anchuva.com.
No returns will be accepted without following these instructions.
Returns will only be accepted for deliveries made within Egypt.
</li>
    <p>
    Upon receipt of the Order, it is the responsibility of the Customer or the authorized recipient of the Order to verify the conformity of the Product(s) provided with the Order prior to signing the delivery slip attached to the parcel.
In the event of a problem, the Customer shall make handwritten reservations on the delivery slip (damaged Product, missing Product, etc.), accompanied by their signature, and inform the carrier within three (3) working days of receipt of the Product(s) by registered letter with acknowledgment of receipt.
The Customer shall provide a copy of that letter to the Company:
•	By email at info@anchuva.com; and
•	By post mail at: ANCHUVA – Customer Service – Address to be determined, Egypt.
No claim regarding the condition of the delivered parcel(s) will be accepted if the delivery slip was signed without any reservations.
In case of incomplete address, wrong address, refusal to take possession of the parcel by the recipient, or lack of information leading to an impossibility to deliver the Product to the recipient in time, the Company cannot be held responsible for the final quality of this delivery. If such lack of information results in a second presentation to the recipient, the Company shall be entitled to charge the Customer for the costs of such second delivery. The Customer is subject to the carrier’s general terms of delivery, which, in certain cases, if not accepted by the Customer, may impact the quality of the delivery.
Thus, in case of absence of the recipient, according to the carrier’s general delivery conditions, the parcel may be presented again and/or put in consignment in an agreed relay point and/or in front of the Customer’s home and/or in a carrier’s “sorting-waiting” center, and/or sent back to the Company, which shall not be held responsible or legally liable for any theft, loss, damage to the Products related to their delivery and, in general, for the final quality of the delivery.
In the event that delivery is not possible, and the Product is returned to the Company by the carrier, the Company will not make a new delivery.

    </p>
  </div>

  <div>
    <h2 className="font-bold text-xl">ARTICLE 6. RETENTION OF TITLE</h2>
    <p>The Products ordered shall remain the property of ANCHUVA until full payment has been received by ANCHUVA. However, any and all risks related to the Products (notably loss, theft, or damage) are transferred to the Customer as of the moment said Products are delivered to the address indicated on the Order.</p>
  </div>

  <div>
    <h2 className="font-bold text-xl">ARTICLE 7. RIGHT OF WITHDRAWAL</h2>
    <p>
    The provisions below shall apply exclusively to Orders placed on the Site.
In accordance with Egyptian consumer protection laws, Customers have a period of fourteen (14) days from the date of receipt of the Products purchased on the Site to inform ANCHUVA’s Customer Service department of their wish to exercise their right of withdrawal and return the Products.
To exercise this right of return, the Customer shall, within the above-mentioned fourteen (14) day period:

    </p>
<li>1.	Use the return label enclosed inside the delivery parcel; or</li>
<li>2.	Contact Customer Service to obtain a return label at the following email address: info@anchuva.com (this applies to specific products whose packaging does not allow the return label to be included in the original delivery parcel).</li>
  <p>Any parcel returned after the stated deadline will be refused and returned to the sender at the sender’s expense.
In order for Customer Service to accept an exchange and/or refund, the Product must be returned complete in its original packaging, undamaged, with its label attached, unworn, and with all accessories.
Returns are only accepted for Products delivered within Egypt.
If the Customer exercises this right in compliance with the above terms, ANCHUVA will reimburse the Customer for the price of the returned Products (excluding any shipping and customs charges) within a maximum period of fourteen (14) days following receipt of the returned Products. This refund will be made by crediting the bank account used for payment of the Order.
</p>
  </div>

  <div>
    <h2 className="font-bold text-xl">ARTICLE 8. STATUTORY WARRANTIES</h2>
    <h2 className="font-semibold">8.1 COMMON PROVISIONS</h2>
    <p>The Products sold by ANCHUVA are subject to the statutory warranties provided for under Egyptian law, to the exclusion of all other warranties.
ANCHUVA will refuse any claim concerning Products that have been used improperly.
Any claim concerning the Products as such and not related to the delivery must be made:
</p>
<li>
•	By email at info@anchuva.com; and
</li>
<li>
•	Followed by a written confirmation sent by registered letter with acknowledgment of receipt to:
ANCHUVA – Customer Service – [Address to be specified in Egypt].
</li>
<p>These warranties shall only apply if the Customer makes the request within a period of twenty-four (24) months from the delivery of the Product (for the statutory warranty of conformity) or from the discovery of the defect (for the statutory warranty for hidden defects) and in the prescribed form.
It is up to the Customers to prove that the conditions of the warranty are met.
In the case of lack of conformity and/or hidden defects recognized by ANCHUVA, and the Customer decides to return the Product, the Customer shall contact Customer Service to obtain a return label at the following email address: info@anchuva.com.
No parcels will be accepted without following these instructions.
</p>
<h2 className="font-semibold">8.2 STATUTORY WARRANTY OF CONFORMITY</h2>
<p>
ANCHUVA guarantees the sale of Products that conform to the Order and are free from defects in conformity at the time of delivery to the Customer. The Product shall be fit for the purpose usually expected of a similar good and have the characteristics presented at the time of sale.
In the event of a recognized non-conformity of a Product sold by ANCHUVA, the Customer may choose between having the Product repaired or returned unless either of these choices entails a manifestly disproportionate cost for ANCHUVA.

</p>


<h2 className="font-semibold">8.3 STATUTORY WARRANTY AGAINST HIDDEN DEFECTS</h2>
<p>
ANCHUVA guarantees that Products are free of hidden defects that render them unfit for their intended use or so diminish such use that the Customer would not have acquired the Product or would have agreed to a lower price if they had been aware of the defects.
In the event of a hidden defect recognized on a Product sold by ANCHUVA, the Customer shall have the choice between:

</p>
<p>(i) returning the Product and having the price and expenses incurred by the sale refunded; or</p>
<p>(ii) keeping the Product and having part of the price refunded.</p>
<p>The return, replacement, or refund of the Product will be free of charge for the Customer.</p>
  </div>

  <div>
    <h2 className="font-bold text-xl">ARTICLE 9. INTELLECTUAL PROPERTY AND UNFAIR COMPETITION</h2>
    <p>
    All documents, information, texts, graphics, images, photographs, or any other content published on the Site are the exclusive property of ANCHUVA or are used with the agreement of their owners.
They are protected by copyright, trademark law, designs and models, and/or any other intellectual property right, and related rights.
No license, nor any right other than that of acquiring the Products, physical media, and containers, is granted to anyone with regard to intellectual property rights, including for labels, packaging, leaflets, and other elements created by ANCHUVA.
    </p>
  </div>

  <div>
    <h2 className="font-bold text-xl">ARTICLE 11. PERSONAL DATA</h2>
    <p>
      The Company's data protection policy is available at 
      <a href="https://www.anchuva.com/pages/policies?privacy-policy" className="text-blue-500 underline">
        https://www.anchuva.com/privacy-policy
      </a>.
    </p>
  </div>

  <div>
    <h2 className="font-bold text-xl">ARTICLE 12. FORCE MAJEURE</h2>
    <p>
    Pursuant to Articles 147 and 148 of the Egyptian Civil Code, “Force Majeure” refers to all external, irresistible, and unforeseeable circumstances, beyond the reasonable control of the party being subject to an event of force majeure.
In the event that ANCHUVA is prevented or delayed by force majeure in the performance of its obligations, ANCHUVA undertakes to inform the Customer within ninety-six (96) hours, specifying the precise elements constituting the force majeure and the reasonably foreseeable duration of the delay or prevention.
ANCHUVA shall then be released from any liability for the non-performance or delay in performance of its obligations but undertakes to use its best efforts to resume full performance without delay.
In the event of such force majeure, ANCHUVA may terminate the Order or any part thereof at its sole discretion, without any liability, but shall reimburse the Customer for any amounts already paid. In no event shall the Customers be entitled to claim and rely on an event of force majeure to release themselves, even temporarily, from an obligation to pay a sum of money.
    </p>
  </div>

  <div>
    <h2 className="font-bold text-xl">ARTICLE 13. TERM</h2>
    <p>These Terms of Sale (TOS) will remain in force until their replacement by new versions under the conditions of Article 14.</p>
  </div>

  <div>
    <h2 className="font-bold text-xl">ARTICLE 14. MODIFICATIONS</h2>
    <p>ANCHUVA may change these TOS at any time.
The new TOS will come into force from the first of the following two dates:
</p>
<p>
(i) their date of publication on the platform, provided that the Customer has been informed of their publication online; or
</p>
<p>(ii) their communication by any written means to, and acceptance by, the Customer.
The continuation of ANCHUVA’s commitment by the Customer thus informed will be deemed to have been made by consenting to the new version of the TOS.
</p>
  </div>

  <div>
    <h2 className="font-bold text-xl">ARTICLE 15. GOVERNING LAW - DISPUTES</h2>
    <p>
    These TOS shall be governed and interpreted in accordance with Egyptian law.
In the event of a dispute arising in connection with the performance and/or the interpretation of these TOS, the Customer may submit such dispute to a contractually-agreed mediation procedure or any other alternative dispute resolution procedure.
For any consumer dispute or litigation, the Customer may contact ANCHUVA’s Customer Service at info@anchuva.com. ANCHUVA will make every effort to resolve the issue amicably.
Notwithstanding the foregoing, in the case of a dispute:
    </p>
    <li>
    	The Customers may bring the matter before the competent court of their domicile or the Egyptian courts;
    </li>
    <li>
    ANCHUVA may bring the matter before the court of the Customer’s domicile.
    </li>
  </div>
</div>




  )
}

export default TermsAndConditions