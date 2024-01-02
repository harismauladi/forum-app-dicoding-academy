// eslint-disable-next-line no-unused-vars
import React from 'react';
import AddThreadInput from '../layouts/AddThreadInput';

function CreateThread() {
  return (
    <div className="my-40 w-full h-full p-3 ">
      <div className=" max-w-lg flex flex-col justify-center items-center sm:relative sm:left-[42rem]  rounded-md shadow-lg">
        <h2 className="text-black font-semibold text-2xl sm:mx-48 flex items-center justify-center w-full">
          Create New Thread
        </h2>
        <AddThreadInput />
      </div>
    </div>
  );
}

export default CreateThread;
