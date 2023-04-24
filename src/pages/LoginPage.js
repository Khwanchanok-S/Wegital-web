import React from 'react';
import LoginForm from '../features/auth/LoginForm';

export default function LoginPage() {
  return (
    <>
      <div className="flex flex-col min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
        <i className=" fa-solid fa-bowl-food fa-7x " />
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Login
        </h2>
        <div className="py-4 space-y-6">
          <LoginForm />
        </div>
        {/* <div className="flex justify-center ">
          <div
            role={'button'}
            className="font-medium text-indigo-600 hover:text-indigo-500 "
            // onClick={() => setIsShow(true)}
          >
            Create New accout
          </div>
        </div> */}
        {/* <Registercontanier isShow={isShow} setIsShow={setIsShow} /> */}
      </div>
    </>
  );
}
