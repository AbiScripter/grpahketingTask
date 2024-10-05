import { useDispatch, useSelector } from "react-redux";
import {
  handleStatusCheckboxChange,
  handleDepartmentCheckboxChange,
  revertDepartMentAccordian,
  revertStatusAccordian,
} from "../tSlice";

const Filter = () => {
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

  return (
    <div>
      <h2 className="text-red-500">Filter</h2>
      <div>
        <h3 onClick={handleStatusAccordian}>Status</h3>
        {isStatusOpen && <StatusFilter />}
      </div>
      <div>
        <h3 onClick={handleDepartmentAccordian}>Department</h3>
        {isDepartmentOpen && <DepartmentFilter />}
      </div>
    </div>
  );
};

const StatusFilter = () => {
  const selectedStatuses = useSelector(
    (state) => state.tableApp.tableApp.selectedStatuses
  );
  const dispatch = useDispatch();

  function handleCheckboxChange(e) {
    let { value, checked } = e.target;
    dispatch(handleStatusCheckboxChange({ value, checked }));
  }

  return (
    <div>
      <div>
        <label>Active</label>
        <input
          type="checkbox"
          value={"active"}
          onChange={handleCheckboxChange}
          checked={selectedStatuses.includes("active")}
        />
      </div>
      <div>
        <label>Inactive</label>
        <input
          type="checkbox"
          value={"inactive"}
          onChange={handleCheckboxChange}
          checked={selectedStatuses.includes("inactive")}
        />
      </div>
      <div>
        <label>Blocked</label>
        <input
          type="checkbox"
          value={"blocked"}
          onChange={handleCheckboxChange}
          checked={selectedStatuses.includes("blocked")}
        />
      </div>
      <div>
        <label>Suspended</label>
        <input
          type="checkbox"
          value={"suspended"}
          onChange={handleCheckboxChange}
          checked={selectedStatuses.includes("suspended")}
        />
      </div>
    </div>
  );
};

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
    <div>
      <div>
        <label>Finance</label>
        <input
          type="checkbox"
          value={"finance"}
          onChange={handleCheckboxChange}
          checked={selectedDepartments.includes("finance")}
        />
      </div>
      <div>
        <label>Engineer</label>
        <input
          type="checkbox"
          value={"engineer"}
          onChange={handleCheckboxChange}
          checked={selectedDepartments.includes("engineer")}
        />
      </div>
      <div>
        <label>Science</label>
        <input
          type="checkbox"
          value={"science"}
          onChange={handleCheckboxChange}
          checked={selectedDepartments.includes("science")}
        />
      </div>
      <div>
        <label>Arts</label>
        <input
          type="checkbox"
          value={"arts"}
          onChange={handleCheckboxChange}
          checked={selectedDepartments.includes("arts")}
        />
      </div>
      <div>
        <label>Math</label>
        <input
          type="checkbox"
          value={"math"}
          onChange={handleCheckboxChange}
          checked={selectedDepartments.includes("math")}
        />
      </div>
      <div>
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

export default Filter;
