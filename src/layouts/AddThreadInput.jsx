import React from "react";

import { useInput } from "../hooks/useInput";
import { useDispatch } from "react-redux";
import { asyncAddThread } from "../states/threads/action";
import { useNavigate } from "react-router-dom";

function AddThreadInput() {
  const [title, titleHandler] = useInput("");
  const [category, categoryHandler] = useInput("");
  const [content, contentHandler] = useInput("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();

    dispatch(
      asyncAddThread({ title: title, body: content, category: category })
    );

    title !== "" && content !== ""
      ? navigate("/")
      : alert("Please Enter The Corret Input!");
  };
  return (
    <React.Fragment>
      <div className="form flex flex-col items-start justify-start w-full mx-2">
        <div className="title items-center justify-center mx-8 my-4 w-full">
          <label htmlFor="title" className="text-lg my-4 font-semibold">
            Title
          </label>
          <br />
          <input
            type="text"
            id="title"
            name="title"
            className=" max-w-[23rem] sm:max-w-md shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-lg sm:text-xl placeholder:text-[8px] sm:py-3 sm:px-2 sm:placeholder:text-sm sm:text-[10px]"
            value={title}
            onChange={titleHandler}
            required
          />
        </div>
        <div className="category items-center justify-center mx-8 my-4 w-full">
          <label htmlFor="title" className="text-lg my-4 font-semibold">
            Category
          </label>
          <br />
          <input
            type="text"
            id="title"
            name="title"
            className=" max-w-[23rem] sm:max-w-md shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight sm:text-xl focus:outline-none focus:shadow-outline text-lg placeholder:text-[8px] sm:py-3 sm:px-2 sm:placeholder:text-sm sm:text-[10px]"
            value={category}
            onChange={categoryHandler}
            required
          />
        </div>
        <div className="body  items-center justify-center mx-8 my-4 w-full">
          <label htmlFor="title" className="text-lg my-4 font-semibold">
            Content
          </label>
          <br />
          <textarea
            className="border w-[90%] h-52 border-gray-300 p-2 rounded-md sm:text-xl "
            value={content}
            onChange={contentHandler}
            required
          />
          <button
            type="submit"
            className="w-[90%] bg-blue-500 font-bold rounded-md my-2 p-1 hover:bg-blue-800 text-xl sm:text-xl text-white"
            onClick={onSubmit}
          >
            Create
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default AddThreadInput;
