import { fn } from "@storybook/test";
import { LyfeTable } from "../components/Table";

export default {
  title: "Library/Tables/LyfeTable",
  component: LyfeTable,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {
    handleFilterModelChange: fn(),
    handleSortModelChanged: fn(),
    handlePaginationModelChanged: fn(),
    handleColumnVisibilityModelChanged: fn(),
    columnVisibilityModel: {},
    onRowDoubleClick: fn(),
  },
};

export const BaseTable = {
  args: {
    loading: false,
    columns: [
      { field: "id", headerName: "ID" },
      { field: "name", headerName: "Name" },
      { field: "category", headerName: "Category" },
      { field: "price", headerName: "Price ($)" },
      { field: "stock", headerName: "In Stock" },
    ],
    rows: [
      { id: 1, name: "Tomato", category: "Vegetable", price: 1.2, stock: true },
      {
        id: 2,
        name: "Cucumber",
        category: "Vegetable",
        price: 0.8,
        stock: true,
      },
      { id: 3, name: "Apple", category: "Fruit", price: 1.5, stock: false },
      { id: 4, name: "Banana", category: "Fruit", price: 1.1, stock: true },
      { id: 5, name: "Carrot", category: "Vegetable", price: 0.6, stock: true },
      { id: 6, name: "Orange", category: "Fruit", price: 1.4, stock: false },
      {
        id: 7,
        name: "Broccoli",
        category: "Vegetable",
        price: 1.3,
        stock: true,
      },
      { id: 8, name: "Potato", category: "Vegetable", price: 0.5, stock: true },
      { id: 9, name: "Blueberry", category: "Fruit", price: 2.5, stock: false },
      {
        id: 10,
        name: "Strawberry",
        category: "Fruit",
        price: 2.8,
        stock: true,
      },
    ],
    page: 1,
    pageSize: 25,
    filteredRowCount: 25,
    sort: { field: "id", direction: "asc" },
    checkboxSelection: true,
    //   quickFilterValues: any[];
  },
};
