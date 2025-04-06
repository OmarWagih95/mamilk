import { sendMail } from "@/app/lib/email";
import { generateEmailBody } from "@/app/utils/generateOrderEmail";
// import { generateEmailInstaBody } from "@/app/utils/generateOrderInstaEmail";
import { ConnectDB } from "@/app/config/db";
import ordersModel from "@/app/modals/ordersModel";
import axios from "axios";
import { NextResponse } from "next/server";

const loadDB = async () => {
    console.log('hna');
    await ConnectDB();
}

loadDB();

export async function POST(request: Request) {
    const data = await request.json();
    console.log( 'paymentData' +data.total);
    console.log( 'subTotal' +data.subTotal);
    // console.log('here'+process.env.PaymobApiKey)
    const items =await data.cart.map((item: any) => {
      return {
       "productId": item.productId,
       "productName": item.productName ,
       "price": item.price, 
         "quantity": item.quantity,
        "color":item.color,
        "imageUrl":item.imageUrl,
        "size":item.size

      }
    });
    console.log('items'+items.length)

      const res = await ordersModel.create({ 
        email:data.email,
         orderID:''
        ,country: data.country,
        firstName: data.firstName,
        lastName: data.lastName,
        address: data.address,
        apartment: data.apartment,
        postalZip: data.postalZip,
        city: data.city ,
        state:data.state ,
        phone:data.phone ,
        cash: data.cash, // Payment method: Cash or not
        cart: items,
        subTotal: data.subTotal,
        total: data.total,
        currency: data.currency,
        billingCountry: data.billingCountry,
        billingFirstName: data.billingFirstName,
        billingState:data.billingState,
        billingLastName: data.billingLastName,
        billingEmail: data.billingEmail,
        billingPhone: data.billingPhone,
        billingAddress: data.billingAddress,
        billingApartment: data.billingApartment, 
        billingPostalZip: data.billingPostalZip, 
      })
      console.log(data.subTotal)
      console.log(data.shipping)
      console.log(data.state)
                  await sendMail({
                      to: `${data.email}`,
                      // to: `${data.email}, anchuva.store@gmail.com`,
                      name: "Order Confirmation",
                      subject: "Order Confirmation",
                      // body:generateEmailBody(items,data.firstName,data.lastName,data.phone,data.email, data.total,data.subTotal,data.shipping,data.address,res._id,data.cash,data.country,data.state)
                      body: `<p> Done</p>`,
                      //   body: compileWelcomeTemplate("Vahid", "youtube.com/@sakuradev"),
                  });
                  // await sendMail({
                  //     to: "anchuva.store@gmail.com",
                  //     name: "Order Confirmation",
                  //     subject: "Order Confirmation",
                  //     body:generateEmailBody(items,data.firstName,data.lastName,data.phone,data.email, data.total,data.subTotal,data.shipping,data.currency,data.address,res._id,data.cash,data.country,data.state,data.city,data.postalZip,data.apartment)
                  //     // body: `<a href=${verificationLink}> click here to verify your account</a>`,
                  //     //   body: compileWelcomeTemplate("Vahid", "youtube.com/@sakuradev"),
                  // });
      return NextResponse.json({token:'wiig'}, { status: 200 })
 
}