import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleDepartmentCheckboxChange } from "../redux/tSlice";

const DepartmentFilter = () => {
  const selectedDepartments = useSelector(
    (state) => state.tableApp.tableApp.selectedDepartments
  );
  const dispatch = useDispatch();

  function handleCheckboxChange(e) {
    let { value, checked } = e.target;
    dispatch(handleDepartmentCheckboxChange({ value, checked }));
  }

  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <label>Finance</label>
        <input
          type="checkbox"
          value={"finance"}
          onChange={handleCheckboxChange}
          checked={selectedDepartments.includes("finance")}
        />
      </div>
      <div className="flex justify-between">
        <label>Engineer</label>
        <input
          type="checkbox"
          value={"engineer"}
          onChange={handleCheckboxChange}
          checked={selectedDepartments.includes("engineer")}
        />
      </div>
      <div className="flex justify-between">
        <label>Science</label>
        <input
          type="checkbox"
          value={"science"}
          onChange={handleCheckboxChange}
          checked={selectedDepartments.includes("science")}
        />
      </div>
      <div className="flex justify-between">
        <label>Arts</label>
        <input
          type="checkbox"
          value={"arts"}
          onChange={handleCheckboxChange}
          checked={selectedDepartments.includes("arts")}
        />
      </div>
      <div className="flex justify-between">
        <label>Math</label>
        <input
          type="checkbox"
          value={"math"}
          onChange={handleCheckboxChange}
          checked={selectedDepartments.includes("math")}
        />
      </div>
      <div className="flex justify-between">
        <label>History</label>
        <input
          type="checkbox"
          value={"history"}
          onChange={handleCheckboxChange}
          checked={selectedDepartments.includes("history")}
        />
      </div>
    </div>
  );
};

export default DepartmentFilter;
