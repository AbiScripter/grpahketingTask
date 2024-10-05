import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleStatusCheckboxChange } from "../redux/tSlice";
import StatusIndicator from "./StatusIndicator";

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
    <div className="flex flex-col">
      <div className="flex justify-between">
        <div className="flex gap-1 items-baseline">
          <label>Active</label>
          <StatusIndicator status={"active"} />
        </div>

        <input
          type="checkbox"
          value={"active"}
          onChange={handleCheckboxChange}
          checked={selectedStatuses.includes("active")}
        />
      </div>
      <div className="flex justify-between">
        <div className="flex gap-1 items-baseline">
          <label>Inactive</label>
          <StatusIndicator status={"inactive"} />
        </div>

        <input
          type="checkbox"
          value={"inactive"}
          onChange={handleCheckboxChange}
          checked={selectedStatuses.includes("inactive")}
        />
      </div>
      <div className="flex justify-between">
        <div className="flex gap-1 items-baseline">
          <label>Suspended</label>
          <StatusIndicator status={"suspended"} />
        </div>

        <input
          type="checkbox"
          value={"suspended"}
          onChange={handleCheckboxChange}
          checked={selectedStatuses.includes("suspended")}
        />
      </div>
      <div className="flex justify-between">
        <div className="flex gap-1 items-baseline">
          <label>Blocked</label>
          <StatusIndicator status={"blocked"} />
        </div>

        <input
          type="checkbox"
          value={"blocked"}
          onChange={handleCheckboxChange}
          checked={selectedStatuses.includes("blocked")}
        />
      </div>
    </div>
  );
};
export default StatusFilter;
