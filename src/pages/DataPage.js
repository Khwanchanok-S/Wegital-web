import React, { useEffect, useState } from 'react';
import useAuth from '../hook/useAuth';
import { useParams, Link } from 'react-router-dom';
import axios from '../config/axios';

import LineChart from '../components/LineChart';

export default function DataPage() {
  const { logout, authenticatedUser } = useAuth();
  const { userId } = useParams();
  const [dataShow, setdataShow] = useState([]);
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
    fetchData();
  }, [userId]);

  useEffect(() => {
    setUserData(prevState => ({
      ...prevState,
      labels: dataShow.map(data => data.date),
      datasets: [
        {
          ...prevState.datasets[0],
          data: dataShow.map(data => data.weight),
        },
      ],
    }));
  }, [dataShow]);
  return (
    <>
      <div className="px-4 py-4">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <div class="flex items-center justify-between pb-4 bg-white dark:bg-gray-900">
            <div></div>
            <div className="flex justify-end space-x-2">
              <label for="table-search" class="sr-only">
                Search
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="table-search-users"
                  class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search for users"
                />
              </div>
              <div>
                <Link to={`/form/${userId}`}>
                  <button
                    type="button"
                    class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  >
                    หน้ากรอกข้อมุล
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
              <div className="flex justify-center">
                <div className="w-96">
                  <LineChart chartData={userData} />
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
                </tr>
              </thead>
              <tbody>
                {dataShow.map(el => {
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
