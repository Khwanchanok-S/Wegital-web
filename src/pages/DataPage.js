import React, { useEffect, useState } from 'react';
import useAuth from '../hook/useAuth';
import { useParams, Link } from 'react-router-dom';
import axios from '../config/axios';

export default function DataPage() {
  const { logout } = useAuth();
  const [dataShow, setdataShow] = useState([]);

  const { userId } = useParams();

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
              <div className=""></div>
            </div>
          </div>
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="p-4"></th>
                <th scope="col" class="px-6 py-3">
                  User
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
                        <div class="flex items-center"></div>
                      </td>
                      <th
                        scope="row"
                        class="flex items-center px-4 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        <div class="pl-3">
                          <div class="text-base font-semibold"></div>
                          <div class="font-normal text-gray-500">
                            {el.User.firstName} {el.User.lastName}
                          </div>
                        </div>
                      </th>
                      <td class="px-6 py-4">{el.height}</td>
                      <td class="px-6 py-4">
                        <div class="flex items-center">{el.weight}</div>
                      </td>
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
    </>
  );
}