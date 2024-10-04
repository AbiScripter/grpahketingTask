import { useDispatch, useSelector } from "react-redux";
import { changePage, selectPaginatedData } from "../tSlice";
const Table = () => {
  // const filteredData = useSelector(
  //   (state) => state.tableApp.tableApp.filteredData
  // );

  const dispatch = useDispatch();
  const paginatedData = useSelector(selectPaginatedData);
  const currentPage = useSelector(
    (state) => state.tableApp.tableApp.currentPage
  );
  const totalPages = useSelector((state) => state.tableApp.tableApp.totalPages);

  const handlePageChange = (page) => {
    dispatch(changePage(page));
  };

  return (
    <div>
      <table border={1} cellPadding={5} cellSpacing={3}>
        <thead>
          <tr>
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
            <tr key={t.recordId}>
              <td>{t.recordId}</td>
              <td>{t.teacherName}</td>
              <td>{t.teacherId}</td>
              <td>{t.department}</td>
              <td>{t.student}</td>
              <td>{t.status}</td>
              <td>View More</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous
        </button>
        <span>{` Page ${currentPage} of ${totalPages} `}</span>
        <div>
          {Array(totalPages)
            .fill(0)
            .map((p, i) => (
              <button
                style={{
                  backgroundColor: `${currentPage === i + 1 ? "blue" : ""}`,
                }}
                onClick={() => handlePageChange(i + 1)}
                key={i}
              >
                {i + 1}
              </button>
            ))}
        </div>
        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Table;
