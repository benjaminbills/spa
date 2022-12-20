import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';
import Router from 'next/router';

const FlutterWavePayment = ({ email, phone, name, amount }) => {
  // const route = Router();
  const config = {
    public_key: `${process.env.NEXT_PUBLIC_FLUTTER_KEY}`,
    tx_ref: Date.now(),
    amount: amount,
    currency: 'KES',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: email,
      phone_number: phone,
      name: name,
    },
    customizations: {
      title: 'The Spa',
      description: 'Payment for items in cart',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };
  const fwConfig = {
    ...config,
    text: 'Book Appointment!',
    callback: (response) => {
      console.log(response);
      closePaymentModal(); // this will close the modal programmatically
      if (response.status === 'successful') {
        Router.push('/');
      }
    },
    onClose: () => {},
  };
  return (
    <div>
      <FlutterWaveButton {...fwConfig} />
    </div>
  );
};

export default FlutterWavePayment;
