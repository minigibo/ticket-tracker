import add from "../../assets/images/add.png";
import subtract from "../../assets/images/subtract.png";

type Employee = {
  name: string;
  role: string;
  ticketCount: number;
  incrementTicketCount: (name: string) => void;
  decrementTicketCount: (name: string) => void;
};

const EmployeeComponent = ({
  name,
  role,
  ticketCount,
  incrementTicketCount,
  decrementTicketCount,
}: Employee) => {
  return (
    <div className="employee">
      <h3>{name}</h3>
      <p>{role}</p>
      <p>Ticket Count: {ticketCount}</p>
      <div className="counter-icons">
        <button onClick={() => incrementTicketCount(name)}>
          <img src={add} alt="Increment" />
        </button>
        <button onClick={() => decrementTicketCount(name)}>
          <img src={subtract} alt="Decrement" />
        </button>
      </div>
    </div>
  );
};

export default EmployeeComponent;
