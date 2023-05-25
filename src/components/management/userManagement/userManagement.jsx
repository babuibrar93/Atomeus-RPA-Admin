import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { TableWrapper } from "../style";

const columns = [
    { field: "name", headerName: "Name", width: 130 },
    { field: "noOfBoots", headerName: "No of Boots", width: 70 },
    { field: "role", headerName: "Role", width: 90 },
  {
    field: "lastLogin",
    headerName: "Last Login",
    type: "number",
    width: 130,
  },
  {
    field: "status",
    headerName: "Status",
    // description: "This column has a value getter and is not sortable.",
    // sortable: false,
    width: 70,
    // valueGetter: () =>
    //   `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  {
    field: "action",
    // headerName: "Status",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 70,
    // valueGetter: () =>
    //   `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, name: "Snow", noOfBoots: 2, role: "Admin", lastLogin: "2023-01-03", status: "Active", action: "/assets/images/modal/cross.svg"},
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export default function DataTable() {
  return (
    <TableWrapper style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </TableWrapper>
  );
}
