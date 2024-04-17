import add from "../../assets/images/add.png";
import subtract from "../../assets/images/subtract.png";
import "./Employee.scss";

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
      <p>Ticket Count</p>
      <p className="employee__count">{ticketCount}</p>
      <div className="employee__counter-icons">
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
