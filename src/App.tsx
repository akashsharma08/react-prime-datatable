import "./App.css";

import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import DataTable from "./components/DataTable";

function App() {
  return (
    <PrimeReactProvider>
      <DataTable />
    </PrimeReactProvider>
  );
}

export default App;
