import React from "react";
import Select from "react-select";
import { Departments } from "./data";

export default () => (
  <Select
    isMulti
    name="colors"
    options={Departments}
    className="basic-multi-select"
    classNamePrefix="select"
  />
);