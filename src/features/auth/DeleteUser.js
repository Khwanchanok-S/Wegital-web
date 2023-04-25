import React from 'react';
import axios from '../../config/axios';
import { useState } from 'react';
import Modal from '../../components/Modal';
import DeleteUserForm from './DeleteUserForm';
export default function DeleteUser({ userId, setIsUpdateUser }) {
  const [isOpen, setIsOpen] = useState();

  return (
    <>
      <button
        type="button"
        className="font-medium text-blue-600 dark:text-blue-500 hover:underline w-20 bg-red-400 round rounded"
        onClick={() => setIsOpen(true)}
        // onClick={() => handleDeleteUser(el?.id)}
      >
        Delete
      </button>

      <Modal
        title="ยืนยันการลบผู้ใช้งานท่านนี้"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        alwaysopen={true}
      >
        <DeleteUserForm
          onClose={() => setIsOpen(false)}
          userId={userId}
          setIsUpdateUser={setIsUpdateUser}
        />
      </Modal>
    </>
  );
}
