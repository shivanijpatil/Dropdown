export interface DepartmentOption {
  value: string;
  label: string;
}

export const Departments: DepartmentOption[] = [
  { value: 'hr', label: 'HR' },
  { value: 'it', label: 'IT' },
  { value: 'fin', label: 'Finance' },
  {value: 'Management', label: 'Management'},
  {value: 'Tech', label: 'Tech'}
];
