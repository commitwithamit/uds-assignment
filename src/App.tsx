import DataTable from "./components/DataTable";
import InputField from "./components/InputField";
import { useState } from "react";

// Define or import the Column type
type Column<T> = {
  key: string;
  title: string;
  dataIndex: keyof T;
  sortable?: boolean;
};

function App() {
  // InputField
  let [password, setPassword] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }

  // DataTable
const columns: Column<{ name: string; email: string }>[] = [
  { key: 'serial', title: 'Sr.no.', dataIndex: 'name' }, 
  { key: 'name', title: 'Name', dataIndex: 'name', sortable: true },
  { key: 'email', title: 'Email', dataIndex: 'email' },
];



  const data = [
    { name: 'Amit Kumar', email: 'amit@example.com' },
    { name: 'John Doe', email: 'john@example.com' },
  ];
  return (
    <>
      <InputField
        value={password}
        onChange={handleChange}
        label="Password"
        placeholder="Enter your password"
        helperText="Must be at least 8 characters."
        disabled={false}
        loading={false}
        invalid={password.length < 8 && password !== ""}
        errorMessage={password.length < 8 ? "Password must be at least 8 characters long." : ""}
        variant="filled"
        size="md"
      />

      <DataTable<{ name: string; email: string }> columns={columns} data={data} selectable={true} onRowSelect={(rows) => console.log(rows)} loading={false}/>


    </>
  )
}

export default App
