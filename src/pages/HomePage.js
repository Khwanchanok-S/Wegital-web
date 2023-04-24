import React from 'react';
import axios from '../config/axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import EditPage from './EditPage';
import CreateUserPage from './CreateUserPage';
import useAuth from '../hook/useAuth';

export default function HomePage() {
  const { logout, authenticatedUser } = useAuth();
  const [userShow, setUserShow] = useState([]);

  const [openEdit, setOpenEdit] = useState(false);
  const [isUpdateUser, setIsUpdateUser] = useState(false);
  const [openCreate, setOpenCreate] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    fetchUsers();
    setIsUpdateUser(false);
  }, [isUpdateUser]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('/users');
      // console.log(response);
      const userData = response.data.user;

      setUserShow(userData);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteUser = async userId => {
    try {
      await axios.delete(`/users/${userId}`);
      fetchUsers();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="px-10 py-10">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <div class="pb-4 bg-white dark:bg-gray-900">
            <div className="flex col space-x-3">
              <label for="table-search" class="sr-only">
                Search
              </label>
              <div class="relative mt-1">
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
                  id="table-search"
                  class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search for users"
                />
              </div>
              <div className="w-full">
                <CreateUserPage
                  setIsUpdateUser={setIsUpdateUser}
                  openCreate={openCreate}
                  setOpenCreate={setOpenCreate}
                />
              </div>
              <div className="w-full ">
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

          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class=" w-20 pl-40 px-1 py-3">
                  ชื่อ
                </th>
                <th scope="col" class="px-4 py-3">
                  นามสกุล
                </th>
                <th scope="col" class="px-6 py-3">
                  เบอร์
                </th>
                <th scope="col" class="px-6 py-3">
                  เลขบัตรประชาชน
                </th>
                <th scope="col" class="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {userShow &&
                userShow.map(el => {
                  return (
                    <>
                      {/* <Link to={`/data/${el.id}`}> */}
                      <tr
                        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                        onClick={() => navigate(`/data/${el.id}`)}
                      >
                        <td class="pl-40 px-1 p-10">{el.firstName}</td>
                        <td class="px-4 py-4">{el.lastName}</td>
                        <td class="px-4 py-4">{el.mobile}</td>
                        <td class="px-6 py-4">{el.idcardNumber}</td>
                        <td class="px-6 py-4">
                          {/* <Link to={`/edit/${el.id}`}> */}
                          {/* <button
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline w-20 bg-blue-200 round rounded"
                          onClick={() => handleEditData(el?.id)}
                        >
                          Edit
                        </button> */}
                          {/* </Link> */}

                          <EditPage
                            openEdit={openEdit}
                            setOpenEdit={setOpenEdit}
                            userShow={userShow}
                            setUserShow={setUserShow}
                            userId={el?.id}
                            firstName={el?.firstName}
                            lastName={el?.lastName}
                            mobile={el?.mobile}
                            idcardNumber={el?.idcardNumber}
                            isUpdateUser={isUpdateUser}
                            setIsUpdateUser={setIsUpdateUser}
                          />
                          <button
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline w-20 bg-red-400 round rounded"
                            onClick={() => handleDeleteUser(el?.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                      {/* </Link> */}
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
