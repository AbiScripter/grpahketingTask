import { useDispatch, useSelector } from "react-redux";
import { FaFilter, FaChevronDown } from "react-icons/fa6";
import { MdClose } from "react-icons/md";

import {
  revertFilterModal,
  revertDepartMentAccordian,
  revertStatusAccordian,
} from "../redux/tSlice";

import StatusFilter from "./StatusFilter";
import DepartmentFilter from "./DepartmenFilter";
import "./Filter.css";

const Filter = () => {
  const isFilterModalOpen = useSelector(
    (state) => state.tableApp.tableApp.filerModalOpen
  );
  const isStatusOpen = useSelector(
    (state) => state.tableApp.tableApp.statusOpen
  );
  const isDepartmentOpen = useSelector(
    (state) => state.tableApp.tableApp.departmentOpen
  );

  const dispatch = useDispatch();

  function handleDepartmentAccordian() {
    dispatch(revertDepartMentAccordian());
  }

  function handleStatusAccordian() {
    dispatch(revertStatusAccordian());
  }

  function handleFilterModal() {
    dispatch(revertFilterModal());
  }

  return (
    <div className="filter-container">
      <button onClick={handleFilterModal} className="text-primary font-bold">
        <FaFilter />
      </button>

      {/* Modal */}
      {isFilterModalOpen && (
        <div className="modal-overlay" onClick={handleFilterModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
          >
            {/* Modal Header */}
            <div className="modal-header">
              <p className="font-bold text-lg">Data Filters</p>
              <MdClose onClick={handleFilterModal} className="modal-close" />
            </div>

            {/* Modal Body */}
            <div className="modal-body">
              {/* Status Accordian */}
              <div className="border-b-2 pb-2">
                <h3
                  className="cursor-pointer flex justify-between items-center gap-5"
                  onClick={handleStatusAccordian}
                >
                  <p className="font-semibold">Status</p>
                  <p>{isStatusOpen ? <MdClose /> : <FaChevronDown />}</p>
                </h3>
                {isStatusOpen && <StatusFilter />}
              </div>

              {/* Departments Accordian */}
              <div>
                <h3
                  className="cursor-pointer flex justify-between items-center gap-5"
                  onClick={handleDepartmentAccordian}
                >
                  <p className="font-semibold">Department</p>
                  <p>{isDepartmentOpen ? <MdClose /> : <FaChevronDown />}</p>
                </h3>
                {isDepartmentOpen && <DepartmentFilter />}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
