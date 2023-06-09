import React from 'react';

export default function AllDataPage() {
  return (
    <>
      <div className="px-4 py-4">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <div class="flex items-center justify-between pb-4 bg-white dark:bg-gray-900">
            <div></div>
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
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                  <div class="flex items-center"></div>
                </td>
                <th
                  scope="row"
                  class="flex items-center px-4 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <div class="pl-3">
                    <div class="text-base font-semibold">Username</div>
                    <div class="font-normal text-gray-500">
                      firstname lastname
                    </div>
                  </div>
                </th>
                <td class="px-6 py-4">175</td>
                <td class="px-6 py-4">
                  <div class="flex items-center">50</div>
                </td>
                <td class="px-6 py-4">25</td>
                <td class="px-6 py-4">11/04/65</td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                  <div class="flex items-center"></div>
                </td>
                <th
                  scope="row"
                  class="flex items-center px-4 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <div class="pl-3">
                    <div class="text-base font-semibold">Username</div>
                    <div class="font-normal text-gray-500">
                      firstname lastname
                    </div>
                  </div>
                </th>
                <td class="px-6 py-4">175</td>
                <td class="px-6 py-4">
                  <div class="flex items-center">50</div>
                </td>
                <td class="px-6 py-4">25</td>
                <td class="px-6 py-4">11/04/65</td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                  <div class="flex items-center"></div>
                </td>
                <th
                  scope="row"
                  class="flex items-center px-4 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <div class="pl-3">
                    <div class="text-base font-semibold">Username</div>
                    <div class="font-normal text-gray-500">
                      firstname lastname
                    </div>
                  </div>
                </th>
                <td class="px-6 py-4">175</td>
                <td class="px-6 py-4">
                  <div class="flex items-center">50</div>
                </td>
                <td class="px-6 py-4">25</td>
                <td class="px-6 py-4">11/04/65</td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                  <div class="flex items-center"></div>
                </td>
                <th
                  scope="row"
                  class="flex items-center px-4 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <div class="pl-3">
                    <div class="text-base font-semibold">Username</div>
                    <div class="font-normal text-gray-500">
                      firstname lastname
                    </div>
                  </div>
                </th>
                <td class="px-6 py-4">175</td>
                <td class="px-6 py-4">
                  <div class="flex items-center">50</div>
                </td>
                <td class="px-6 py-4">25</td>
                <td class="px-6 py-4">11/04/65</td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                  <div class="flex items-center"></div>
                </td>
                <th
                  scope="row"
                  class="flex items-center px-4 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <div class="pl-3">
                    <div class="text-base font-semibold">Username</div>
                    <div class="font-normal text-gray-500">
                      firstname lastname
                    </div>
                  </div>
                </th>
                <td class="px-6 py-4">175</td>
                <td class="px-6 py-4">
                  <div class="flex items-center">50</div>
                </td>
                <td class="px-6 py-4">25</td>
                <td class="px-6 py-4">11/04/65</td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                  <div class="flex items-center"></div>
                </td>
                <th
                  scope="row"
                  class="flex items-center px-4 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <div class="pl-3">
                    <div class="text-base font-semibold">Username</div>
                    <div class="font-normal text-gray-500">
                      firstname lastname
                    </div>
                  </div>
                </th>
                <td class="px-6 py-4">175</td>
                <td class="px-6 py-4">
                  <div class="flex items-center">50</div>
                </td>
                <td class="px-6 py-4">25</td>
                <td class="px-6 py-4">11/04/65</td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                  <div class="flex items-center"></div>
                </td>
                <th
                  scope="row"
                  class="flex items-center px-4 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <div class="pl-3">
                    <div class="text-base font-semibold">Username</div>
                    <div class="font-normal text-gray-500">
                      firstname lastname
                    </div>
                  </div>
                </th>
                <td class="px-6 py-4">175</td>
                <td class="px-6 py-4">
                  <div class="flex items-center">50</div>
                </td>
                <td class="px-6 py-4">25</td>
                <td class="px-6 py-4">11/04/65</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
