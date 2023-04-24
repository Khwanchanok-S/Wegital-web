import React, { useState } from 'react';
import Modal from '../components/Modal';
import CreateUserForm from '../features/auth/CreateUserForm';

export default function CreateUserPage({ setIsUpdateUser }) {
  const [isOpen, setIsOpen] = useState();
  return (
    <>
      <button
        type="button"
        class="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        onClick={() => setIsOpen(true)}
      >
        Create User
      </button>
      <Modal
        title="สร้าง ผู้ใช้งาน"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        alwaysopen={true}
      >
        <CreateUserForm
          onClose={() => setIsOpen(false)}
          setIsUpdateUser={setIsUpdateUser}
        />
      </Modal>
    </>
  );
}
