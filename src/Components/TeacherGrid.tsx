import * as React from 'react';
import { DataGrid, GridColDef } from '@material-ui/data-grid';
import GetData from './Data';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 75 },
  { field: 'Surname', headerName: 'Фамилия', width: 150 },
  { field: 'First_name', headerName: 'Имя', width: 150 },
  { field: 'Middle_name', headerName: 'Отчество', width: 150 },
  { field: 'Phone', headerName: 'Телефон', width: 150 },
  { field: 'Experience', headerName: 'Опыт', width: 125 },
  { field: 'Age', headerName: 'Возраст', width: 125 },
];

const rows = GetData();

export default function DataGridDemo() {
  return (
    <div style={{ height: 900, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={15} />
    </div>
  );
}