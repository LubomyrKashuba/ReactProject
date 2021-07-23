import React from "react";
import Select from "react-select";
import { selectOption } from "..";


interface CustomSelectProps {
  onChange: (e: React.ChangeEvent<any>)=> void;
  value: string;
  options: selectOption[];
  className: string;
}

const CustomSelect = ({ onChange, value, options, className }: CustomSelectProps) => {
  const defaultValue = (options: any, value: string) => {
    return options ? options.find((option: selectOption) => option.value===value) : "";
  };
  return (
    <div className={className}>
      <Select
        value={defaultValue(options, value)}
        onChange={(value) => onChange(value)}
        options={options}
      />
    </div>
  );
};

export default CustomSelect;
