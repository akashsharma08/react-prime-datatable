import { DataTable as PrimeDataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useGetTableData } from "../api/useGetTableData";
import { useState } from "react";

const DataTable = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useGetTableData(page);

  console.log(
    data?.data?.map((item) => {
      return {
        title: item.title,
        place_of_origin: item.place_of_origin,
        artist_display: item.artist_display,
        inscription: item.inscription,
        date_start: item.date_start,
        date_end: item.date_end,
      };
    })
  );

  if (isLoading) return <div>Loading...</div>;

  return (
    <PrimeDataTable value={data?.data}>
      <Column field="name" header="Name" />
    </PrimeDataTable>
  );
};

export default DataTable;
