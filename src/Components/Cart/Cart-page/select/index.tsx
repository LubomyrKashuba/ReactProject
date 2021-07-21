import React from "react";
import Select from "react-select";

const CustomSelect = ({ onChange, value, options, className }: any) => {
  const defaultValue = (options: any, value: any) => {
    return options ? options.find((option: any) => option.value===value) : "";
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
