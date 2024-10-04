import Filter from "./Filter";

const Header = ({ searchTerm, handleSeachTermChange }) => {
  return (
    <>
      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => handleSeachTermChange(e.target.value)}
        />
      </div>
      <Filter />
    </>
  );
};

export default Header;
