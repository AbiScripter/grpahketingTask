import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Table from "./components/Table";
import { useDispatch, useSelector } from "react-redux";
import teacherData from "./assets/teacherData";
import { updateFilterData } from "./tSlice";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const selectedStatuses = useSelector(
    (state) => state.tableApp.tableApp.selectedStatuses
  );
  const selectedDepartments = useSelector(
    (state) => state.tableApp.tableApp.selectedDepartments
  );

  const dispatch = useDispatch();

  function handleSeachTermChange(val) {
    setSearchTerm(val);
  }

  useEffect(() => {
    const filteredData = teacherData.filter((teacher) => {
      // console.log(selectedDepartments);
      // Convert teacherId to string and apply search term filter
      const matchesSearchTerm =
        teacher.teacherName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        teacher.teacherId.toString().includes(searchTerm) ||
        teacher.department.toLowerCase().includes(searchTerm.toLowerCase());

      // Check if the teacher matches the selected statuses
      const matchesStatus =
        selectedStatuses.length === 0 ||
        selectedStatuses.includes(teacher.status.toLowerCase());

      // Check if the teacher matches the selected departments
      const matchesDepartment =
        selectedDepartments.length === 0 ||
        selectedDepartments.includes(teacher.department.toLowerCase());

      // Return true only if all conditions are met (search term, status, department)
      return matchesSearchTerm && matchesStatus && matchesDepartment;
    });

    dispatch(updateFilterData(filteredData));
  }, [selectedDepartments, selectedStatuses, searchTerm]);

  return (
    <div className="App">
      <Header
        searchTerm={searchTerm}
        handleSeachTermChange={handleSeachTermChange}
      />
      <Table searchTerm={searchTerm} />
      <Pagination />
    </div>
  );
}

const Pagination = () => {};

export default App;
