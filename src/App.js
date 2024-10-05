import { useEffect } from "react";
import Header from "./components/Header";
import Table from "./components/Table";
import { useDispatch, useSelector } from "react-redux";
import teacherData from "./assets/teacherData";
import { updateFilterData } from "./redux/tSlice";
import Pagination from "./components/Pagination";

function App() {
  const searchTerm = useSelector((state) => state.tableApp.tableApp.searchTerm);

  console.log(searchTerm);
  const selectedStatuses = useSelector(
    (state) => state.tableApp.tableApp.selectedStatuses
  );
  const selectedDepartments = useSelector(
    (state) => state.tableApp.tableApp.selectedDepartments
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const filteredData = teacherData.filter((teacher) => {
      const matchesSearchTerm =
        teacher.teacherName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        teacher.teacherId.toString().includes(searchTerm) ||
        teacher.department.toLowerCase().includes(searchTerm.toLowerCase());

      // Check if the teacher is in selected statuses
      const matchesStatus =
        selectedStatuses.length === 0 ||
        selectedStatuses.includes(teacher.status.toLowerCase());

      // Check if the teacher is in selected departments
      const matchesDepartment =
        selectedDepartments.length === 0 ||
        selectedDepartments.includes(teacher.department.toLowerCase());

      // Return true only if all conditions are met (search term, status, department)
      return matchesSearchTerm && matchesStatus && matchesDepartment;
    });

    dispatch(updateFilterData(filteredData));
  }, [selectedDepartments, selectedStatuses, searchTerm]);

  return (
    <div className="App flex justify-center flex-col items-center">
      <Header />
      <Table />
      <Pagination />
    </div>
  );
}

export default App;
