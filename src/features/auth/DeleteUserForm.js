import React from 'react';
import axios from '../../config/axios';

export default function DeleteUserForm({ onClose, setIsUpdateUser, userId }) {
  const handleDeleteUser = async () => {
    try {
      await axios.delete(`/users/${userId}`);
      setIsUpdateUser(true);
      onClose();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex col justify-center h-40  p-10 space-x-8">
      <div>
        <button
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline w-20 bg-gray-400 round rounded h-10"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
      <div>
        <button
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline w-20 bg-red-400 round rounded h-10"
          onClick={handleDeleteUser}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
