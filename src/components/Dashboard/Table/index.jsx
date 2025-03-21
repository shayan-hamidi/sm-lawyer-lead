"use client";
import React, { useState, useEffect, useMemo } from "react";
import { DataGrid } from "@mui/x-data-grid";
import useService from "@/hooks/useService";

export default function DataTable({ url, columns }) {
  const [rows, setRows] = useState([]);
  const [pagination, setPagination] = useState({ page: 0, pageSize: 15 });
  const { mutate: tableMutate, loading: tableLoading } = useService();
  const [total, setTotal] = useState(0);
  useEffect(() => {
    tableMutate(
      `${url}?skip=${pagination.page * pagination.pageSize}&limit=${
        pagination.pageSize
      }`,
      "GET",
      {},
      {
        Authorization: window.localStorage.getItem("token")
          ? `Bearer ${window.localStorage.getItem("token")}`
          : undefined,
      },
      (data) => {
        setTotal(data.total);
        setRows(data.data);
      }
    );
  }, [pagination]);
  const modifiedColumns = useMemo(() => {
    return [
      ...columns,
      {
        field: "row",
        headerName: "صف",
        width: 50,
        sortable: false,
        editable: false,
        renderCell: (params) => {
          const { page, pageSize } = pagination;
          const startingIndex = page * pageSize;
          const rowIndex = rows.findIndex((row) => row.id === params.row.id);
          const rowNumber = rowIndex !== -1 ? startingIndex + rowIndex + 1 : "";
          return rowNumber;
        },
      },
    ];
  }, [rows]);

  return (
    <div style={{ width: "100%" }}>
      <DataGrid
        localeText={"fa"}
        loading={tableLoading}
        sx={{ background: "white", boxShadow: 5 }}
        className="shadow-md"
        rows={rows}
        columns={modifiedColumns}
        pagination
        rowCount={total}
        paginationMode="server"
        paginationModel={pagination}
        onPaginationModelChange={setPagination}
        density="compact"
        autoHeight
        disableColumnMenu
        disableColumnSelector
        disableRowSelectionOnClick
        showCellVerticalBorder
        disableDensitySelector
        disableAutosize
        disableVirtualization
        disableColumnResize
      />
    </div>
  );
}
