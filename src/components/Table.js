import React, {useState, useEffect} from 'react';
import { GridOverlay, DataGrid } from '@material-ui/data-grid';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

function TablePr(props) {
    
    const classes = useStyles();
    const [stock, setStock] = useState(props.stock);
    //console.log(stock)

    const availability = (id) => {
        //console.log(stock[id])
        return stock[id]         
    }
     
    const columns = [
        //{ field: 'id', headerName: 'ID', width: 250 },
        { field: 'name', headerName: 'Name', width: 300 },
        { field: 'manufacturer', headerName: 'Brand', width: 130 },
        { field: 'color', valueGetter: (params) => `${params.getValue('color')}`, headerName: 'Color', width: 130 },
        { field: 'price', headerName: 'Price', width: 130 },
        { field: 'id', 
                        valueGetter: (params) => availability(params.value), 
                        cellClassName: (params) =>
                            clsx('super-app', {
                            instock: params.value === 'INSTOCK',
                            outofstock: params.value === 'OUTOFSTOCK',
                            lessthan: params.value === 'LESSTHAN10',
                            }), 
                        headerName: 'Stock', 
                        width: 250 },
    ];

    const data = {
        rows: props.data,
        columns: columns,
    };
    
    return (
        <div style={{ height: 800, width: '100%' }} className={classes.root}>
            <DataGrid
                components={{
                    loadingOverlay: CustomLoadingOverlay,
                }}
                loading
                {...data}
            />
        </div>
    );
}

export default TablePr;

function CustomLoadingOverlay() {
    return (
      <GridOverlay>
        <div style={{ position: 'absolute', top: 0, width: '100%' }}>
          <LinearProgress />
        </div>
      </GridOverlay>
    );
  }

const useStyles = makeStyles({
    root: {
      '& .super-app.instock': {
        backgroundColor: 'rgba(157, 255, 118, 0.49)',
        color: '#1a3e72',
        fontWeight: '600',
      },
      '& .super-app.outofstock': {
        backgroundColor: '#d47483',
        color: '#1a3e72',
        fontWeight: '600',
      },
      '& .super-app.lessthan': {
        backgroundColor: 'yellow',
        color: '#1a3e72',
        fontWeight: '600',
      },
    },
});

/*{
          field: 'fullName',
          headerName: 'Full name',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 160,
          valueGetter: (params) =>
            `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
        }, 
        
        const [stock, setStock] = useState(props.stock);

    const availability = (id) => {
        const productID = id
        const data = stock.find(item => item.id === productID)

        const regex = /\>(.*?)\</
        const check = data.DATAPAYLOAD.match(regex)
        
        return check
    
	}
        
        */