import Employee from "./components/Employee/Employee";
import team from "./data/team";
import SearchBox from "./components/Search/Search";
import Dropdown from "./components/Dropdown/Dropdown";
import { useState, FormEvent } from "react";

const App = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedRole, setSelectedRole] = useState<string>("All");

  const roles = ["All", ...new Set(team.map((employee) => employee.role))];

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    const userInput = event.currentTarget.value.toLowerCase();
    setSearchTerm(userInput);
  };

  const handleRoleSelect = (role: string) => {
    setSelectedRole(role);
  };

  const filteredTeam = team.filter(
    (employee) =>
      employee.name.toLowerCase().includes(searchTerm) &&
      (selectedRole === "All" || employee.role === selectedRole)
  );

  return (
    <div className="app">
      <h1>Ticket Tracking System</h1>
      <div className="filter-container">
        <SearchBox searchTerm={searchTerm} handleInput={handleInput} />
        <Dropdown
          options={roles}
          selectedOption={selectedRole}
          onSelectOption={handleRoleSelect}
        />
      </div>
      <div className="employee-list">
        {filteredTeam.map((team) => (
          <Employee name={team.name} role={team.role} />
        ))}
      </div>
    </div>
  );
};

export default App;
