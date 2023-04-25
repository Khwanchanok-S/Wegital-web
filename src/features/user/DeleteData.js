import React from 'react';
import { useState } from 'react';
import Modal from '../../components/Modal';
import DeleteDatarForm from './DeleteDatarForm';

export default function DeleteData({ dataId, setIsUpdateData }) {
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
        title="ยืนยันการลบข้อมูล"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        alwaysopen={true}
      >
        <DeleteDatarForm
          onClose={() => setIsOpen(false)}
          dataId={dataId}
          setIsUpdateData={setIsUpdateData}
        />
      </Modal>
    </>
  );
}
