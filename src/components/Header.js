import { useDispatch, useSelector } from "react-redux";
import { handleSearchTermChange } from "../redux/tSlice";
import Filter from "./Filter";
import { FaBell, FaUser } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";

const Header = () => {
  const searchTerm = useSelector((state) => state.tableApp.tableApp.searchTerm);
  const dispatch = useDispatch();

  function handleChange(e) {
    dispatch(handleSearchTermChange(e.target.value));
  }

  return (
    <div className="flex gap-10 p-10 items-baseline">
      <p className="text-xl font-bold">Welcome, User!</p>

      {/* Input field */}
      <div className="relative">
        <CiSearch className="absolute left-2 top-1/2 transform -translate-y-1/2" />
        <input
          type="text"
          value={searchTerm}
          className="bg-slate-200 pl-10 pr-10 py-1 rounded-xl w-full"
          placeholder="search here"
          onChange={handleChange}
        />
        <FaArrowRight className="absolute right-2 top-1/2 transform -translate-y-1/2" />
      </div>

      {/* Filter Modal */}
      <Filter />

      {/* User Buttons */}
      <div className="flex gap-3 items-center">
        <button>
          <FaBell />
        </button>
        <button>
          <FaUser />
        </button>
      </div>
    </div>
  );
};

export default Header;
