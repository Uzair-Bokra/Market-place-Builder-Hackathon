'use client';
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isPopupVisible, setPopupVisible] = useState(false);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { username, email, password, confirmPassword } = formData;

    if (username && email && password && password === confirmPassword) {
      setPopupVisible(true);
      setFormData({ username: "", email: "", password: "", confirmPassword: "" });
    } else {
      alert("Please fill all fields correctly.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-8 bg-white rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-700">Sign up</h2>
        <p className="mt-1 text-sm text-center text-gray-500">Create your account</p>

        <form onSubmit={handleSubmit} className="mt-6">
          <div className="relative mb-4">
            <FaUser className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="w-full px-10 py-2 bg-gray-100 border-none rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
              value={formData.username}
              onChange={handleInputChange}
            />
          </div>
          <div className="relative mb-4">
            <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full px-10 py-2 bg-gray-100 border-none rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="relative mb-4">
            <FaLock className="absolute left-3 top-3 text-gray-400" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full px-10 py-2 bg-gray-100 border-none rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <div className="relative mb-6">
            <FaLock className="absolute left-3 top-3 text-gray-400" />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="w-full px-10 py-2 bg-gray-100 border-none rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 text-white bg-orange-500 rounded-lg hover:bg-orange-600"
          >
            Sign up
          </button>
        </form>

        {isPopupVisible && (
          <Dialog
            open={isPopupVisible}
            onClose={() => setPopupVisible(false)}
            className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/50"
          >
            <div className="bg-white p-6 rounded-lg shadow-xl">
              <h3 className="text-lg font-bold">Welcome to the Community!</h3>
              <p className="mt-2">Your account has been created successfully!</p>
              <button
                onClick={() => setPopupVisible(false)}
                className="mt-4 px-4 py-2 text-white bg-orange-500 rounded-lg hover:bg-orange-600"
              >
                Close
              </button>
            </div>
          </Dialog>
        )}

        <div className="flex justify-between mt-6 text-sm text-gray-500">
          <span>Or Login with Google</span>
          <a href="#" className="text-orange-500 hover:underline">
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default Signup;




