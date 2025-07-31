import { DataTable as PrimeDataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useGetTableData } from "../api/useGetTableData";
import { useState } from "react";

const DataTable = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useGetTableData(page);

  const tableData = data?.data?.map((item) => {
    return {
      title: item.title,
      place_of_origin: item.place_of_origin,
      artist_display: item.artist_display,
      inscription: item.inscription,
      date_start: item.date_start,
      date_end: item.date_end,
    };
  });
  console.log(data?.data);
  if (isLoading) return <div>Loading...</div>;

  return (
    <PrimeDataTable value={tableData} tableStyle={{ minWidth: "50rem" }}>
      <Column
        style={{
          justifyContent: "center",
          alignItems: "center",
          // backgroundColor: "red",
        }}
        field="title"
        header="title"></Column>
      <Column
        style={{ textAlign: "center" }}
        field="place_of_origin"
        header="place_of_origin"></Column>
      <Column
        style={{ textAlign: "center" }}
        field="artist_display"
        header="artist_display"></Column>
      <Column
        style={{ textAlign: "center" }}
        field="inscription"
        header="inscription"></Column>
      <Column
        style={{ textAlign: "center" }}
        field="date_start"
        header="date_start"></Column>
      <Column
        style={{ textAlign: "center" }}
        field="date_end"
        header="date_end"></Column>
    </PrimeDataTable>
  );
};

export default DataTable;
