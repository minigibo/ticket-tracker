import { ChangeEvent } from "react";

type DropdownProps = {
  options: string[];
  selectedOption: string;
  onSelectOption: (option: string) => void;
};

const Dropdown = ({
  options,
  selectedOption,
  onSelectOption,
}: DropdownProps) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onSelectOption(event.target.value);
  };

  return (
    <select value={selectedOption} onChange={handleChange}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;

// trying to commit
