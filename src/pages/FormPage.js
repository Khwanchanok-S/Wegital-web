import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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
          <button
            class="text-white bg-gradient-to-br w-40 from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            onClick={() => navigate(`/data/${authenticatedUser.id}`)}
          >
            ตารางข้อมูล
          </button>
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
                      ความสูง หน่วย เซนติเมตร
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
                      น้ำหนัก หน่วย กิโลกรัม
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
                      รอบเอว หน่วย เซนติเมตร
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
                      class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring--800"
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
