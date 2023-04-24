import React from 'react';
import Input from '../../components/Input';
import { useState } from 'react';
import useAuth from '../../hook/useAuth';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function LoginForm() {
  const [input, setInput] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({});
  const { userId } = useParams();

  const handleChangeInput = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const { login, authenticatedUser } = useAuth();
  const navigate = useNavigate();
  const handleSubmitForm = async e => {
    try {
      e.preventDefault();
      console.log('sdf');
      await login(input, password);
      console.log('wer');
      toast.success('login successful');
      navigate(`/form/${authenticatedUser.id}`);
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <div className="mb-6">
        <label
          for="userName"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Username
        </label>
        <Input
          type="userName"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          name="userName"
          value={input}
          onChange={e => setInput(e.target.value)}
          error={error.userName}
        />
      </div>
      <div className="mb-6">
        <label
          for="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Password
        </label>
        <Input
          type="password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring--800"
        >
          Login
        </button>
      </div>
    </form>
  );
}
