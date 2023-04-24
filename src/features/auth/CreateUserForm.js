import React, { useState } from 'react';
import * as authApi from '../../apis/auth-api';
import { toast } from 'react-toastify';
const initialInput = {
  firstName: '',
  lastName: '',
  userName: '',
  password: '',
  mobile: '',
  idcardNumber: '',
};

export default function CreateUserForm({ onClose, setIsUpdateUser }) {
  const [input, setInput] = useState(initialInput);
  const [error, setError] = useState({});

  const handleChangeInput = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async e => {
    try {
      e.preventDefault();
      await authApi.register(input);
      console.log('after api');
      setInput(initialInput);
      onClose();
      toast.success('successfully registered');

      setIsUpdateUser(true);
    } catch (err) {
      toast.error(err.response?.data.message);
    }
  };

  return (
    <div className="w-full px-48 py-6">
      <form onSubmit={handleSubmitForm}>
        <div>
          <div className="mb-6">
            <label
              for="firstName"
              className="block  text-sm font-medium text-gray-900 dark:text-white "
            >
              Firstname
            </label>
            <input
              name="firstName"
              value={input.firstName}
              onChange={handleChangeInput}
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            <label
              for="lastName"
              className="block  text-sm font-medium text-gray-900 dark:text-white "
            >
              Lastname
            </label>
            <input
              name="lastName"
              value={input.lastName}
              onChange={handleChangeInput}
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            <label
              for="mobile"
              className="block  text-sm font-medium text-gray-900 dark:text-white "
            >
              Mobile
            </label>
            <input
              name="mobile"
              value={input.mobile}
              onChange={handleChangeInput}
              type="number"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            <label
              for="idcardNumber"
              className="block  text-sm font-medium text-gray-900 dark:text-white "
            >
              Id card Number
            </label>
            <input
              name="idcardNumber"
              value={input.idcardNumber}
              onChange={handleChangeInput}
              type="number"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            <label
              for="userName"
              className="block  text-sm font-medium text-gray-900 dark:text-white "
            >
              Username
            </label>
            <input
              name="userName"
              value={input.userName}
              onChange={handleChangeInput}
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            <label
              for="password"
              className="block  text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              name="password"
              value={input.password}
              onChange={handleChangeInput}
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </div>

        <div>
          <div className="py-8 space-x-2 flex justify-center">
            <button
              type="submit"
              className=" border-none rounded text-white bg-black  w-40"
            >
              สร้าง
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
