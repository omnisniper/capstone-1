import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51IKmq4HfUl38UaB5vL0NiMasddFMO5RAXuWUgto1UOINQoDIxmv5HsMhfywsqcPxgFhMq8FI2uC4yDnLTVdd2g0U009FYPowlb";

    const onToken = (token) => {
        console.log(token);
        alert("Payment Successful");
    };

    return (
        <StripeCheckout
            label="Buy Now"
            name="Stellar Nursery"
            billingAddress
            shippingAddress
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLAbel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;
