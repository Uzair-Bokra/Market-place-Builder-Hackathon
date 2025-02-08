import Link from 'next/link';
import { FaCheckCircle } from 'react-icons/fa';

const Success = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="bg-white shadow-xl rounded-2xl p-10 text-center max-w-lg">
        <div className="flex justify-center mb-6">
          <FaCheckCircle className="text-green-500 text-6xl" />
        </div>
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Payment Successful!</h1>
        <p className="text-lg text-gray-600 mb-6">Thank you for your purchase. We hope you enjoy your order!</p>
        <Link href="/Shop">
          <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-full shadow-md transform transition-transform hover:scale-105 focus:ring-4 focus:ring-blue-300">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;