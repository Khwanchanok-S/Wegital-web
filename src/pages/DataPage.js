import React, { useEffect, useState } from 'react';
import useAuth from '../hook/useAuth';
import { useParams, Link } from 'react-router-dom';
import axios from '../config/axios';

import LineChart from '../components/LineChart';
import UserEdit from '../features/user/UserEdit';
import DeleteData from '../features/user/DeleteData';

export default function DataPage() {
  const { logout, authenticatedUser } = useAuth();
  const { userId } = useParams();
  const [dataShow, setdataShow] = useState([]);
  const [openEdit, setOpenEdit] = useState(false);
  const [isUpdateData, setIsUpdateData] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const [userData, setUserData] = useState({
    labels: [],
    datasets: [
      {
        label: 'น้ำหนัก ต่อ วัน',
        data: [],
        backgroundColor: [
          'rgba(75,192,192,1)',
          '#ecf0f1',
          '#50AF95',
          '#f3ba2f',
          '#2a71d0',
        ],
        borderColor: 'black',
        borderWidth: 2,
      },
    ],
  });
  useEffect(() => {
    setUserData(prevState => ({
      labels: dataShow ? dataShow.map(data => data.date) : [],
      datasets: [
        {
          label: 'น้ำหนัก',
          data: dataShow ? dataShow.map(data => data.weight) : [],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1,
        },
      ],
    }));
  }, [dataShow]);

  const [userDataWasit, setUserDataWasit] = useState({
    labels: [],
    datasets: [
      {
        label: 'รอบเอว ต่อ วัน',
        data: [],
        backgroundColor: [
          'rgba(75,192,192,1)',
          '#ecf0f1',
          '#50AF95',
          '#f3ba2f',
          '#2a71d0',
        ],
        borderColor: 'black',
        borderWidth: 2,
      },
    ],
  });
  useEffect(() => {
    setUserDataWasit(prevState => ({
      labels: dataShow ? dataShow.map(data => data.date) : [],
      datasets: [
        {
          label: 'รอบเอว',
          data: dataShow ? dataShow.map(data => data.wasit) : [],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1,
        },
      ],
    }));
  }, [dataShow]);

  useEffect(() => {
    fetchData();
    setIsUpdateData(false);
  }, [isUpdateData]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`/datas/${userId}`);
      // console.log(response);
      const dataUser = response.data.data;

      setdataShow(dataUser);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="px-4 py-4">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <div class="flex items-center justify-between pb-4 bg-white dark:bg-gray-900">
            <div></div>
            <div className="flex justify-end space-x-2">
              <div>
                <Link to={`/form/${userId}`}>
                  <button
                    type="button"
                    class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  >
                    หน้ากรอกข้อมูล
                  </button>
                </Link>
              </div>
              {authenticatedUser?.role === 'admin' && (
                <Link to="/">
                  <div>
                    <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                      ตารางข้อมูลของผู้ใช้งานทั้งหมด
                    </button>
                  </div>
                </Link>
              )}
              <div className="">
                <div className="flex justify-end">
                  <button
                    type="button"
                    class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    onClick={logout}
                  >
                    ออกจากระบบ
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="w-full h-full">
              <div className="">
                <div className="w-96 flex col">
                  <LineChart chartData={userData} />
                  <LineChart chartData={userDataWasit} />
                </div>
              </div>
            </div>
          </div>
          <div>
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="p-4">
                    {' '}
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Username
                  </th>
                  <th scope="col" class="px-6 py-3">
                    ความสูง
                  </th>
                  <th scope="col" class="px-6 py-3">
                    น้ำหนัก
                  </th>
                  <th scope="col" class="px-6 py-3">
                    รอบเอว
                  </th>
                  <th scope="col" class="px-6 py-3">
                    วันที่
                  </th>
                  <th scope="col" class="px-6 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {dataShow &&
                  dataShow.map(el => {
                    return (
                      <>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                          <td class="w-4 p-4">
                            <div class="flex items-center w-full"> </div>
                          </td>
                          <th
                            scope="row"
                            class="flex items-center px-4 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            <div class="pl-3">
                              <div class="text-base font-semibold">
                                {el.User.userName}
                              </div>
                              <div class="font-normal text-gray-500">
                                {el.User.firstName} {el.User.lastName}
                              </div>
                            </div>
                          </th>
                          <td class="px-6 py-4">{el.height}</td>
                          <td class="px-6 py-4">{el.weight}</td>
                          <td class="px-6 py-4">{el.wasit}</td>
                          <td class="px-6 py-4">{el.date}</td>
                          {/* {authenticatedUser?.role === '' && ( */}
                          <td class="px-6 py-4">
                            <UserEdit
                              openEdit={openEdit}
                              setOpenEdit={setOpenEdit}
                              dataShow={dataShow}
                              setdataShow={setdataShow}
                              height={el?.height}
                              weight={el?.weight}
                              wasit={el?.wasit}
                              date={el?.date}
                              dataId={el?.id}
                              isUpdateData={isUpdateData}
                              setIsUpdateData={setIsUpdateData}
                            />

                            <DeleteData
                              openDelete={openDelete}
                              setOpenDelete={setOpenDelete}
                              dataId={el?.id}
                              setIsUpdateData={setIsUpdateData}
                            />
                          </td>
                          {/* )} */}
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
