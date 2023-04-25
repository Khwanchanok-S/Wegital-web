import React, { useState } from 'react';
import Modal from '../../components/Modal';
import UserEditForm from './UserEditForm';
export default function UserEdit({
  dataShow,
  setdataShow,
  height,
  weight,
  wasit,
  date,
  isUpdateData,
  setIsUpdateData,
  dataId,
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        className="font-medium text-blue-600 dark:text-blue-500 hover:underline w-20 bg-blue-200 round rounded"
        onClick={() => setIsOpen(true)}
      >
        Edit
      </button>

      <Modal
        title="เเก้ไขข้อมูล ที่บันทึก"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        alwaysopen={true}
      >
        <UserEditForm
          onClose={() => setIsOpen(false)}
          dataShow={dataShow}
          setdataShow={setdataShow}
          height={height}
          weight={weight}
          wasit={wasit}
          date={date}
          isUpdateData={isUpdateData}
          setIsUpdateData={setIsUpdateData}
          dataId={dataId}
        />
      </Modal>
    </>
  );
}
