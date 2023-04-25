import React, { useState } from 'react';
import { toast } from 'react-toastify';
import axios from '../../config/axios';

export default function UserEditForm({
  dataShow,
  setdataShow,
  height,
  weight,
  wasit,
  date,
  isUpdateData,
  setIsUpdateData,
  onClose,
  dataId,
}) {
  const [title, setTitle] = useState({
    height,
    weight,
    wasit,
    date,
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
      console.log('before');
      const { data } = await axios.patch(`/datas/${dataId}`, {
        height: title.height,
        weight: title.weight,
        wasit: title.wasit,
        date: title.date,
      });
      console.log('after');
      setdataShow(data.event);
      setIsUpdateData(true);
      toast.success('Update information successfully');
    } catch (err) {
      toast.error('Failed to update information');
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
                  for="height"
                  className="block  text-sm font-medium text-gray-900 dark:text-white "
                >
                  ความสูง หน่วย เซนติเมตร
                </label>
                <input
                  name="height"
                  value={title?.height}
                  onChange={handleChangeTitle}
                  type="number"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                  value={title?.weight}
                  onChange={handleChangeTitle}
                  type="number"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                  value={title?.wasit}
                  onChange={handleChangeTitle}
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
                  value={title?.date}
                  onChange={handleChangeTitle}
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
      {/* </div> */}
      {/* </div> */}
      {/* </div> */}
    </>
  );
}
