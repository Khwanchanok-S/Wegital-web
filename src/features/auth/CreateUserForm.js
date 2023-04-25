import React, { useState } from 'react';
import * as authApi from '../../apis/auth-api';
import validateRegister from '../../validate/validate-register';
import Input from '../../components/Input';
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
      const result = validateRegister(input);

      if (result) {
        setError(result);
      } else {
        console.log('no error');
        setError({});
        await authApi.register(input);
        console.log('after');
        setInput(initialInput);
        onClose();
        toast.success('เพิ่มบัญชีผู้ใช้งานสำเร็จ');
      }
      setIsUpdateUser(true);
    } catch (err) {
      toast.error(err.response?.data.message);
    }
  };

  return (
    <div className="flex justify-center w-[100%]">
      <div className="w-[70%]">
        <form onSubmit={handleSubmitForm}>
          <div>
            <div className="mb-6">
              <label
                for="firstName"
                className="block  text-sm font-medium text-gray-900 dark:text-white "
              >
                ชื่อ
              </label>
              <Input
                name="firstName"
                value={input.firstName}
                onChange={handleChangeInput}
                error={error.firstName}
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="mb-6">
              <label
                for="lastName"
                className="block  text-sm font-medium text-gray-900 dark:text-white "
              >
                นามสกุล
              </label>
              <Input
                name="lastName"
                value={input.lastName}
                onChange={handleChangeInput}
                error={error.lastName}
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="mb-6">
              <label
                for="mobile"
                className="block  text-sm font-medium text-gray-900 dark:text-white "
              >
                เบอร์
              </label>
              <Input
                name="mobile"
                value={input.mobile}
                error={error.mobile}
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
                เลขบัตรประชาชน
              </label>
              <Input
                name="idcardNumber"
                value={input.idcardNumber}
                onChange={handleChangeInput}
                error={error.idcardNumber}
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
              <Input
                name="userName"
                value={input.userName}
                onChange={handleChangeInput}
                error={error.userName}
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
              <Input
                name="password"
                value={input.password}
                error={error.password}
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
                className=" text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-800"
              >
                ยืนยัน
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
