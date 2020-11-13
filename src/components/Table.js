import React from 'react';
import { DataGrid } from '@material-ui/data-grid';


function TablePr(props) {

    const columns = [
        { field: 'id', headerName: 'ID', width: 250 },
        { field: 'name', headerName: 'Name', width: 300 },
        { field: 'manufacturer', headerName: 'Brand', width: 130 },
        { field: 'color', valueGetter: (params) => `${params.getValue('color')}`, headerName: 'Color', width: 130 },
        { field: 'price', headerName: 'Price', width: 130 },
        { field: '',  headerName: 'Stock', width: 250 },
        
      ];
    
    return (
        <div style={{ height: 800, width: '100%' }}>
            <DataGrid rows={props.data} columns={columns} />
        </div>
    );
}

export default TablePr;
/*{
          field: 'fullName',
          headerName: 'Full name',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 160,
          valueGetter: (params) =>
            `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
        }, */