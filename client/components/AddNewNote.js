import React from "react";

const AddNewNote = () => {
  return (
    <div>
      <h1 className="font-sans font-semibold  text-[50px] border-solid border-4 rounded-lg  border-black bg-yellow-500 text-center mx-40 mt-20 ">
        Add Your Note in this context . . !
      </h1>

      <div className="mt-10 flex justify-center ">
        <textarea
          className="bg-gray-300 "
          placeholder="Add your note here..."
          name="note"
          cols="100"
          rows="15"
        />
      </div>

      <div className="mt-10 flex ">
        <div className="shadow-md bg-[#6e42c3] ml-[280px] ">
          <button type="button" className=" p-4">
            save
          </button>
        </div>

        <div className="shadow-md  bg-[#f8e0a0] ml-[150px]">
          <button type="button" className=" p-4">
            Update
          </button>
        </div>
        <div className=" shadow-md bg-[#796699] ml-[150px]">
          <button type="button" className=" p-4">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNewNote;
