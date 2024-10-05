import { createSlice } from "@reduxjs/toolkit";
import teacherData from "../assets/teacherData";

const initialState = {
  tableApp: {
    searchTerm: "",
    selectedStatuses: [],
    selectedDepartments: [],
    filteredData: teacherData,
    filerModalOpen: false,
    statusOpen: false,
    departmentOpen: false,
    currentPage: 1, // Track the current page
    itemsPerPage: 10, // Items to display per page
    totalPages: Math.ceil(teacherData.length / 10), // Calculate total pages
  },
};

const TableSlice = createSlice({
  name: "tableApp",
  initialState: initialState,
  reducers: {
    handleSearchTermChange: (state, action) => {
      console.log(action.payload);
      state.tableApp.searchTerm = action.payload;
    },

    updateFilterData: (state, action) => {
      state.tableApp.filteredData = action.payload;
      // Update totalPages whenever filteredData is updated
      state.tableApp.totalPages = Math.ceil(
        action.payload.length / state.tableApp.itemsPerPage
      );

      // Optionally, reset current page to 1 when filtered data changes
      state.tableApp.currentPage = 1;
    },

    handleDepartmentCheckboxChange: (state, action) => {
      const { value, checked } = action.payload;

      console.log(value, checked);
      if (checked) {
        // Add the selected department to the state
        state.tableApp.selectedDepartments = [
          ...state.tableApp.selectedDepartments,
          value,
        ];
      } else {
        // Remove the unselected department from the state
        state.tableApp.selectedDepartments =
          state.tableApp.selectedDepartments.filter(
            (department) => department !== value
          );
      }
      state.tableApp.currentPage = 1;
    },

    handleStatusCheckboxChange: (state, action) => {
      const { value, checked } = action.payload;

      if (checked) {
        state.tableApp.selectedStatuses = [
          ...state.tableApp.selectedStatuses,
          value,
        ];
      } else {
        state.tableApp.selectedStatuses =
          state.tableApp.selectedStatuses.filter((status) => status !== value);
      }
      state.tableApp.currentPage = 1;
    },

    revertStatusAccordian: (state) => {
      state.tableApp.statusOpen = !state.tableApp.statusOpen;
    },

    revertDepartMentAccordian: (state) => {
      state.tableApp.departmentOpen = !state.tableApp.departmentOpen;
    },

    revertFilterModal: (state) => {
      state.tableApp.filerModalOpen = !state.tableApp.filerModalOpen;
    },

    changePage(state, action) {
      state.tableApp.currentPage = action.payload;
    },
  },
});

export const selectPaginatedData = (state) => {
  const { currentPage, itemsPerPage, filteredData } = state.tableApp.tableApp;
  console.log(state);
  const startIndex = (currentPage - 1) * itemsPerPage;
  return filteredData.slice(startIndex, startIndex + itemsPerPage);
};

export const {
  updateFilterData,
  handleSearchTermChange,
  handleDepartmentCheckboxChange,
  handleStatusCheckboxChange,
  revertFilterModal,
  revertDepartMentAccordian,
  revertStatusAccordian,
  changePage,
} = TableSlice.actions;

export default TableSlice.reducer;
