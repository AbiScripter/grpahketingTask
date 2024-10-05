import { useSelector } from "react-redux";
import { selectPaginatedData } from "../redux/tSlice";
import { FaAngleRight } from "react-icons/fa6";
import StatusIndicator from "./StatusIndicator";

const Table = () => {
  // const filteredData = useSelector(
  //   (state) => state.tableApp.tableApp.filteredData
  // );

  const paginatedData = useSelector(selectPaginatedData);

  if (paginatedData.length === 0) {
    return <h1 className="font-bold text-xl">No Records Found</h1>;
  }

  return (
    <div>
      {/* Table */}
      <table cellPadding={15} className="border-white">
        <thead className="bg-blue-800 text-white">
          <tr className="border-b border-white-200">
            <th>RecordID</th>
            <th>Teacher Name</th>
            <th>Teacher Id</th>
            <th>Department</th>
            <th>Student</th>
            <th>Status</th>
            <th>All Details</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((t) => (
            <tr key={t.recordId} className="border-b-2">
              <td>{t.recordId}</td>
              <td>{t.teacherName}</td>
              <td>{t.teacherId}</td>
              <td>{t.department}</td>
              <td>{t.student}</td>
              <td>
                <div className="flex gap-2 items-center">
                  {t.status}
                  <StatusIndicator status={t.status} />
                </div>
              </td>
              <td className="text-blue-800">
                <div className="flex items-center">
                  <p>View More</p>
                  <FaAngleRight />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
