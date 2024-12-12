import { styled } from "@mui/material";
import React from "react";
import {
  DataGrid,
  GridCallbackDetails,
  gridClasses,
  GridColDef,
  GridColumnVisibilityModel,
  GridFilterModel,
  GridPaginationModel,
  GridSortModel,
  GridValidRowModel,
  useGridApiRef,
} from "@mui/x-data-grid";
import { palette } from "../../theme";

const autosizeOptions = {
  includeHeaders: false,
  includeOutliers: false,
  expand: true,
};

export interface ILibraryTable {
  loading: boolean;
  columns: GridColDef<GridValidRowModel>[];
  rows: GridValidRowModel[];
  page: number;
  pageSize: number;
  filteredRowCount: number;
  sort: { field: string; direction: "asc" | "desc" };
  handleFilterModelChange: (
    model: GridFilterModel,
    details: GridCallbackDetails<any>
  ) => void;
  handleSortModelChanged: (
    model: GridSortModel,
    details: GridCallbackDetails<any>
  ) => void;
  handlePaginationModelChanged: (
    model: GridPaginationModel,
    details: GridCallbackDetails<any>
  ) => void;
  handleColumnVisibilityModelChanged: (
    model: GridColumnVisibilityModel
  ) => void;
  columnVisibilityModel: {};
  onRowDoubleClick?: (row: unknown) => void;
  quickFilterValues: any[];
  checkboxSelection?: boolean;
  //   toolbar:
  //     | React.JSXElementConstructor<GridToolbarProps & ToolbarPropsOverrides>
  //     | null
  //     | undefined;
  //     customPagination: React.JSXElementConstructor<Partial<TablePaginationProps> & PaginationPropsOverrides> | null | undefined
}

export const LyfeTable = (props: ILibraryTable) => {
  const apiRef = useGridApiRef();

  return (
    <div style={{ padding: "24px" }}>
      <StripedDataGrid
        loading={!!props.loading}
        apiRef={apiRef}
        disableColumnResize={true}
        columns={props.columns}
        rows={props.rows}
        disableRowSelectionOnClick
        checkboxSelection={!!props.checkboxSelection}
        slots={
          {
            // toolbar: props.toolbar,
            // pagination: props.customPagination,
            // noRowsOverlay: NoRowsOverlay,
            // noResultsOverlay: NoRowsOverlay,
            // row: Row,
          }
        }
        sx={{
          "& .MuiDataGrid-cell": {
            border: 0,
          },
          borderTop: 0,
          borderColor: palette.colors.gray[93],
          height: "calc(100vh - 220px)",
          minHeight: "500px",
        }}
        pagination
        disableColumnMenu
        pageSizeOptions={[25, 50, 100]}
        paginationModel={{ page: props.page, pageSize: props.pageSize }}
        paginationMode="server"
        onSortModelChange={props.handleSortModelChanged}
        onPaginationModelChange={props.handlePaginationModelChanged}
        rowCount={props.filteredRowCount}
        filterMode="server"
        filterModel={{
          items: [],
          quickFilterValues: props.quickFilterValues,
        }}
        sortingMode="server"
        sortModel={[
          {
            field: props.sort.field,
            sort: props.sort.direction?.toLowerCase() || ("asc" as any),
          },
        ]}
        onFilterModelChange={props.handleFilterModelChange}
        columnVisibilityModel={props.columnVisibilityModel}
        onColumnVisibilityModelChange={props.handleColumnVisibilityModelChanged}
        onRowDoubleClick={props.onRowDoubleClick}
        autosizeOptions={autosizeOptions}
        getRowClassName={(params) =>
          params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd"
        }
        rowHeight={48}
      />
    </div>
  );
};

const StripedDataGrid = styled(DataGrid)(() => ({
  [`& .${gridClasses.row}`]: {
    borderBottom: `1px solid ${palette.colors.gray[93]}`,

    "&:hover": {
      backgroundColor: "#DCEFEF",
    },
  },
  [`& .${gridClasses.row}.even`]: {
    backgroundColor: palette.colors.gray[99],
    "&:hover": {
      backgroundColor: "#DCEFEF",
    },
    "&.Mui-selected": {
      backgroundColor: palette.colors.primary[95],
    },
  },
  "& .MuiTablePagination-spacer": {
    display: "none",
  },
  "&.MuiDataGrid-root--densityStandard .MuiDataGrid-cell": {
    paddingLeft: "24px",
    paddingRight: "24px",
  },
  "& .MuiDataGrid-columnSeparator": {
    display: "none",
  },
}));
