// RegistrationForm.js

import React, { useState } from 'react';
import axios from 'axios';

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [selectedBatch, setSelectedBatch] = useState('');

  const [ageError, setAgeError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (age < 18 || age > 65) {
      setAgeError('Age must be between 18 and 65');
      return;
    } else {
      setAgeError('');
    }
    try {
      const response = await axios.post('http://localhost:5000/api/register', { name, age, selectedBatch });
      console.log('data received');
      setSuccessMessage('Successfully registered!');
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
      console.log(response.data);
    } catch (error) {
      console.error('Registration failed', error);
      setErrorMessage('Registration failed. Please try again.');
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
        <label htmlFor="age" className="text-gray-700">Age</label>
        <input
          type="text"
          name="age"
          id="age"
          className="block w-full px-4 py-2 mt-1 text-gray-800 border rounded-md focus:outline-none focus:border-blue-500"
          required
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        {ageError && (
          <p className="text-red-500 text-sm mt-1">{ageError}</p>
        )}
      </div>


      <div className="mb-5">
        <label htmlFor="selectedBatch" className="text-gray-700">Select Batch</label>
        <select
          value={selectedBatch}
          onChange={(e) => setSelectedBatch(e.target.value)}
          className="block w-full px-4 py-2 mt-1 text-gray-800 border rounded-md focus:outline-none focus:border-blue-500"
        >
          <option value="">Select Batch</option>
          <option value="6-7AM">6-7AM</option>
          <option value="7-8AM">7-8AM</option>
          <option value="8-9AM">8-9AM</option>
          <option value="5-6PM">5-6PM</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full px-4 py-2 text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:outline-none focus:bg-blue-800"
        onClick={handleSubmit}
      >
        Register
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

export default RegistrationForm;
