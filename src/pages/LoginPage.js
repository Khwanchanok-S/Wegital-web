import React from 'react';
import LoginForm from '../features/auth/LoginForm';

export default function LoginPage() {
  return (
    <>
      <div className="flex flex-col min-h-full items-center justify-center py-28 px-4 sm:px-6 lg:px-8 ">
        <i className=" fa-solid fa-bowl-food fa-7x " />

        <div className="py-4 space-y-6 w-full h-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Login
          </h2>
          <LoginForm />
        </div>
      </div>
    </>
  );
}
