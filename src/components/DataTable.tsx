import { DataTable as PrimeDataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useGetTableData } from "../api/useGetTableData";
import { useState } from "react";
import headerStyle, {
  paginatorStyle,
  cellStyle,
  tableStyle,
  hideExtraTicks,
} from "./dataTable.styles";
import { Paginator, type PaginatorPageChangeEvent } from "primereact/paginator";
import { Checkbox } from "primereact/checkbox";

const DataTable = () => {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [selectedRows, setSelectedRows] = useState<any[]>([]);
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
  const handlePageChange = (event: PaginatorPageChangeEvent) => {
    const newPage = Math.floor(event.first / event.rows) + 1;
    setPage(newPage);
    setRowsPerPage(event.rows);
    console.log(event);
  };

  const handleSelectionChange = (event: any) => {
    setSelectedRows(event.value);
    console.log("Selected rows:", event.value);
  };
  return (
    <div
      style={{
        flexDirection: "column",
        // backgroundColor: "red",
        display: "flex",
        // justifyContent: "space-between",
        alignItems: "center",
      }}>
      <PrimeDataTable
        value={tableData}
        tableStyle={tableStyle}
        selection={selectedRows}
        onSelectionChange={handleSelectionChange}
        dataKey="title">
        <style>{hideExtraTicks}</style>
        <Column
          showAddButton
          selectionMode="multiple"
          headerStyle={headerStyle}
          style={cellStyle}
        />
        <Column
          style={cellStyle}
          alignHeader="left"
          headerStyle={headerStyle}
          field="title"
          header="title"></Column>
        <Column
          alignHeader="left"
          style={cellStyle}
          headerStyle={headerStyle}
          field="place_of_origin"
          header="place_of_origin"></Column>
        <Column
          alignHeader="left"
          style={cellStyle}
          headerStyle={headerStyle}
          field="artist_display"
          header="artist_display"></Column>
        <Column
          style={cellStyle}
          headerStyle={headerStyle}
          field="inscription"
          header="inscription"></Column>
        <Column
          alignHeader="left"
          style={cellStyle}
          headerStyle={headerStyle}
          field="date_start"
          header="date_start"></Column>
        <Column
          alignHeader="left"
          style={cellStyle}
          headerStyle={headerStyle}
          field="date_end"
          header="date_end"></Column>
      </PrimeDataTable>
      <Paginator
        first={(page - 1) * rowsPerPage}
        rows={rowsPerPage}
        totalRecords={data?.data?.length || 0}
        onPageChange={handlePageChange}
        rowsPerPageOptions={[10, 20, 50, 100]}
        style={paginatorStyle}
        template="FirstPageLink PrevPageLink NextPageLink LastPageLink"
      />
    </div>
  );
};

export default DataTable;
