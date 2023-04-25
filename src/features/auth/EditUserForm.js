import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../config/axios';

import { toast } from 'react-toastify';

export default function EditUserForm({
  userShow,
  setUserShow,
  userId,
  firstName,
  lastName,
  mobile,
  idcardNumber,
  onClose,
  isUpdateUser,
  setIsUpdateUser,
}) {
  const [title, setTitle] = useState({
    firstName,
    lastName,
    mobile,
    idcardNumber,
  });

  const handleChangeTitle = e => {
    setTitle({
      ...title,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitData = async e => {
    e.preventDefault();

    try {
      // const event = await axios.patch(`/users/profile/${userId}`, {
      const { data } = await axios.patch(`/users/profile/${userId}`, {
        firstName: title.firstName,
        lastName: title.lastName,
        mobile: title.mobile,
        idcardNumber: title.idcardNumber,
      });

      setUserShow(data.event);
      setIsUpdateUser(true);
      toast.success('เเก้ไขข้อมูลผู้ใช้งานสำเร็จ');
    } catch (err) {
      toast.error('เเก้ไขข้อมูลผู้ใช้งานไม่สำเร็จ');
    } finally {
      onClose();
    }
  };

  return (
    <>
      <div className="w-full  py-6 flex justify-center">
        <div className=" w-[70%]">
          <form onSubmit={handleSubmitData}>
            <div>
              <div className="mb-6">
                <label
                  for="firstName"
                  className="block  text-sm font-medium text-gray-900 dark:text-white "
                >
                  ชื่อ
                </label>
                <input
                  name="firstName"
                  value={title?.firstName}
                  onChange={handleChangeTitle}
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="mb-6">
                <label
                  for="lastName"
                  className="block  text-sm font-medium text-gray-900 dark:text-white"
                >
                  นามสกุล
                </label>
                <input
                  name="lastName"
                  value={title?.lastName}
                  onChange={handleChangeTitle}
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="mb-6">
                <label
                  for="mobile"
                  className="block  text-sm font-medium text-gray-900 dark:text-white"
                >
                  เบอร์โทร
                </label>
                <input
                  name="mobile"
                  value={title?.mobile}
                  onChange={handleChangeTitle}
                  type="number"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>

              <div className="mb-6">
                <label
                  for="idcardNumber"
                  className="block  text-sm font-medium text-gray-900 dark:text-white"
                >
                  เลขบัตรประชาชน 13 หลัก
                </label>
                <input
                  name="idcardNumber"
                  value={title?.idcardNumber}
                  onChange={handleChangeTitle}
                  type="number"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <div className="py-8 space-x-2 flex justify-center">
                <button
                  type="submit"
                  className=" text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring--800 "
                >
                  ยืนยัน
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* </div> */}
      {/* </div> */}
      {/* </div> */}
    </>
  );
}
