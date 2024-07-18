import React, { useState } from "react";
import Select, { MultiValue, ActionMeta } from "react-select";
import { Departments, DepartmentOption } from "./data";

const App: React.FC = () => {
  const [selectedDepartments, setSelectedDepartments] = useState<DepartmentOption[]>([]);

  const handleChange = (
    newValue: MultiValue<DepartmentOption>,
    actionMeta: ActionMeta<DepartmentOption>
  ) => {
    setSelectedDepartments(newValue as DepartmentOption[]);
  };

  return (
    <div>
      <h3>Select Departments</h3>
      <Select
        isMulti
        name="departments"
        options={Departments}
        className="basic-multi-select"
        classNamePrefix="select"
        onChange={handleChange}
        value={selectedDepartments}
      />
    </div>
  );
};

export default App;
