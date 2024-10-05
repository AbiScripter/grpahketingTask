import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { changePage } from "../redux/tSlice";

const Pagination = () => {
  const currentPage = useSelector(
    (state) => state.tableApp.tableApp.currentPage
  );
  const totalPages = useSelector((state) => state.tableApp.tableApp.totalPages);
  const dispatch = useDispatch();

  const handlePageChange = (page) => {
    dispatch(changePage(page));
  };

  return (
    <div className="flex items-center gap-3 justify-center mt-10">
      {/* Left Arrow */}
      <button
        className={`border p-1 rounded-full ${
          currentPage === 1
            ? "border-gray-500 text-gray-500"
            : "border-blue-800 text-blue-800"
        }`}
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        <FaAngleLeft />
      </button>

      {/* Pages  */}
      <div className="flex gap-1">
        {Array(totalPages)
          .fill(0)
          .map((p, i) => (
            <button
              className={`border  px-2 rounded-full ${
                currentPage === i + 1
                  ? "border-blue-800 text-white bg-blue-800"
                  : "border-gray-500 text-gray-500"
              }`}
              style={{
                backgroundColor: `${currentPage === i + 1 ? "" : ""}`,
              }}
              onClick={() => handlePageChange(i + 1)}
              key={i}
            >
              {i + 1}
            </button>
          ))}
      </div>

      {/* Right Arrow */}
      <button
        className={`border p-1 rounded-full ${
          currentPage === totalPages
            ? "border-gray-500 text-gray-500"
            : "border-blue-800 text-blue-800"
        }`}
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        <FaAngleRight />
      </button>
    </div>
  );
};

export default Pagination;
