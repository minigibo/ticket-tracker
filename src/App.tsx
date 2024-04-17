import "./App.scss";
import { useState, FormEvent } from "react";
import team from "./data/team";
import Employee from "./components/Employee/Employee";
import SearchBox from "./components/Search/Search";
import Dropdown from "./components/Dropdown/Dropdown";

type EmployeeCountMap = { [name: string]: number };

const App = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedRole, setSelectedRole] = useState<string>("All");

  const initialTicketCounts: EmployeeCountMap = {};

  team.forEach((employee) => {
    initialTicketCounts[employee.name] = 0;
  });

  const [ticketCounts, setTicketCounts] =
    useState<EmployeeCountMap>(initialTicketCounts);

  const roles = ["All", ...new Set(team.map((employee) => employee.role))];

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    const userInput = event.currentTarget.value.toLowerCase();
    setSearchTerm(userInput);
  };

  const handleRoleSelect = (role: string) => {
    setSelectedRole(role);
  };

  const incrementTicketCount = (name: string) => {
    setTicketCounts((prevCounts) => ({
      ...prevCounts,
      [name]: prevCounts[name] + 1,
    }));
  };

  const decrementTicketCount = (name: string) => {
    setTicketCounts((prevCounts) => ({
      ...prevCounts,
      [name]: Math.max(prevCounts[name] - 1, 0),
    }));
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
        <div>
          Filter by role
          <Dropdown
            options={roles}
            selectedOption={selectedRole}
            onSelectOption={handleRoleSelect}
          />
        </div>
      </div>
      <div className="employee-list">
        {filteredTeam.map((employee) => (
          <Employee
            key={employee.name}
            name={employee.name}
            role={employee.role}
            ticketCount={ticketCounts[employee.name]}
            incrementTicketCount={incrementTicketCount}
            decrementTicketCount={decrementTicketCount}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
