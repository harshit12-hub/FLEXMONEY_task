// RegistrationForm.js

import React, { useState } from 'react';
import axios from 'axios';

const PaymentForm = () => {
  const [name, setName] = useState('');
  const [PaidMonth, SetPaidMonth] = useState('');
 
 
  const [successMessage, setSuccessMessage] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    try {
      const response = await axios.post('http://localhost:5000/api/payment', { name,PaidMonth });
      setSuccessMessage('Payment Successful!');
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
      console.log(response.data);
    } catch (error) {
      console.error('Payment failed', error);
      setErrorMessage('Payment failed. Please try again.');
      setTimeout(() => {
        setErrorMessage('');
      }, 3000);
    }
  };

  return (
    <form className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="mb-5">
        <label htmlFor="name" className="text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          className="block w-full px-4 py-2 mt-1 text-gray-800 border rounded-md focus:outline-none focus:border-blue-500"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      
      <div className="mb-5">
        <label htmlFor="selectedMonth" className="text-gray-700">Select Month</label>
        <select
          value={PaidMonth}
          onChange={(e) => SetPaidMonth(e.target.value)}
          className="block w-full px-4 py-2 mt-1 text-gray-800 border rounded-md focus:outline-none focus:border-blue-500"
        >
          <option value="">Select Month</option>
          <option value="Jan">Jan</option>
          <option value="Feb">Feb</option>
          <option value="Mar">Mar</option>
          <option value="Apr">Apr</option>
          <option value="May">May</option>
          <option value="June">June</option>
          <option value="July">July</option>
          <option value="Aug">Aug</option>
          <option value="Sep">Sep</option>
          <option value="Oct">Oct</option>
          <option value="Nov">Nov</option>
          <option value="Dec">Dec</option>
         
        </select>
      </div>

      <button
        type="submit"
        className="w-full px-4 py-2 text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:outline-none focus:bg-blue-800"
        onClick={handleSubmit}
      >
        Pay Rs.500/Monthly
      </button>

      {successMessage && (
        <div className="bg-green-200 text-green-800 text-sm p-2 mb-4 rounded-md">
          {successMessage}
        </div>
      )}

      {errorMessage && (
        <div className="bg-red-200 text-red-800 text-sm p-2 mb-4 rounded-md">
          {errorMessage}
        </div>
      )}

    </form>
  );
};

export default PaymentForm;
