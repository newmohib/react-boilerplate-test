import React, { Component } from 'react';
import { PayPalButton } from "react-paypal-button-v2";

class PaypalButton extends Component {
    state = {}
    render() {
      const  paymentSuccess=(details, data) => {
            // return fetch("/paypal-transaction-complete", {
            //     method: "post",
            //     body: JSON.stringify({
            //         orderID: data.orderID
            //     })
            // });
            console.log(details, data);
        }
        const  paymentFailure=(err) => {
            console.log(err);
        }

        return (
            <div>
                <PayPalButton
                    amount="1"
                    onSuccess={paymentSuccess}
                    catchError={paymentFailure}
                    options={{
                        clientId: "AR2BI5NXg-kFynJWAoaUP_90FKOVcmGnM5vSEIwFSkxUAUe1FS5ZatR_BS-qKDwgXGAMXw7zM-4ZG0F9",
                        currency: "USD"
                      }}
                />
            </div>
        );
    }
}

export default PaypalButton;