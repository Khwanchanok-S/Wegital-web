import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as dataApi from '../apis/data-api';
import useAuth from '../hook/useAuth';

const initialInput = {
  height: '',
  weight: '',
  wasit: '',
  date: '',
};

export default function FormPage() {
  const { authenticatedUser } = useAuth();
  const { userId } = useParams();
  console.log(userId);

  const [input, setInput] = useState(initialInput);
  const navigate = useNavigate();

  const handleChangeInput = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async e => {
    try {
      e.preventDefault();
      console.log('before create');
      await dataApi.createData(input);
      console.log('after api');
      setInput(initialInput);

      navigate(`/data/${authenticatedUser.id}`);
      toast.success('successfully');
    } catch (err) {
      toast.error(err.response?.data.message);
    }
  };

  return (
    <>
      <div className="py-4 px-8">
        <div className="flex justify-end">
          {/* {authenticatedUser.role === 'admin' ? ( */}

          <button
            className=" border-none rounded  bg-zinc-400 w-40"
            onClick={() => navigate(`/data/${authenticatedUser.id}`)}
          >
            ตารางข้อมูล
          </button>

          {/* ) : null} */}
        </div>

        <div className="w-full h-full py-20 px-80">
          <div className="  bg-white-400  border rounded-lg w-full h-full flex  justify-center">
            <div className="w-full px-48 py-6">
              <div className="flex justify-center">
                {' '}
                กรุณากรอกข้อมูล ดังต่อไปนี้
              </div>
              <form onSubmit={handleSubmitForm}>
                <div>
                  <div className="mb-6">
                    <label
                      for="height"
                      className="block  text-sm font-medium text-gray-900 dark:text-white "
                    >
                      ความสูง
                    </label>
                    <input
                      name="height"
                      value={input.height}
                      onChange={handleChangeInput}
                      type="number"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

                      //   value={email}
                      //   onChange={e => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      for="weight"
                      className="block  text-sm font-medium text-gray-900 dark:text-white"
                    >
                      น้ำหนัก
                    </label>
                    <input
                      name="weight"
                      value={input.weight}
                      onChange={handleChangeInput}
                      type="number"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

                      //   value={email}
                      //   onChange={e => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      for="wasit"
                      className="block  text-sm font-medium text-gray-900 dark:text-white"
                    >
                      รอบเอว
                    </label>
                    <input
                      name="wasit"
                      value={input.wasit}
                      onChange={handleChangeInput}
                      type="number"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>

                  <div className="mb-6">
                    <label
                      for="date"
                      className="block  text-sm font-medium text-gray-900 dark:text-white"
                    >
                      วันที่ที่บันทึก
                    </label>
                    <input
                      name="date"
                      value={input.date}
                      onChange={handleChangeInput}
                      type="date"
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
                      ยืนยัน
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
