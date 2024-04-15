import { useState } from "react";

type Employee = {
  name: string;
  role: string;
};

const EmployeeComponent = ({ name, role }: Employee) => {
  const [ticketCount, setTicketCount] = useState<number>(0);

  const incrementTicketCount = () => {
    setTicketCount(ticketCount + 1);
  };

  const decrementTicketCount = () => {
    if (ticketCount > 0) {
      setTicketCount(ticketCount - 1);
    }
  };

  return (
    <div className="employee">
      <h3>{name}</h3>
      <p>{role}</p>
      <p>Ticket Count: {ticketCount}</p>
      <button onClick={incrementTicketCount}>Increment</button>
      <button onClick={decrementTicketCount}>Decrement</button>
    </div>
  );
};

export default EmployeeComponent;
