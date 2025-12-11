import React from 'react'
import emailjs from "@emailjs/browser";


function SendOrderEmail({ cartItems, customerEmail, totalAmount, tax ,netAmount, discountAmount}) {
     const sendEmail = () => {
      let templateParams = {
             orders: cartItems.map(item => ({
                    name: item.name,
                    units: item.quantity,
                    price: item.price
             })),
             order_id: Date.now(),
             totalamount: totalAmount.toFixed(2),
             tax: tax.toFixed(2),
             discountAmount: discountAmount.toFixed(2),
             netamount: netAmount.toFixed(2),
             email: customerEmail
             
      };
      emailjs.send("service_k3wmkuq", 
                    "template_jedpror", 
                    templateParams, 
                    "EVuJldc1xohXuIleg")  
              .then((response) => { 
                    alert("Email sent successfully!", response.status, response.text);
                }) 
  
     }        
  return (
   <>
   <button onClick={sendEmail}> Send Order Email</button>
   </>
  )
}
export default SendOrderEmail
