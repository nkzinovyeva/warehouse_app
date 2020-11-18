import React, {useState} from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

function TableView(props) {
    
    const classes = useStyles();
    const [stock, setStock] = useState(props.stock);
    //console.log(stock)

    const availability = (id) => {
        //console.log(stock[id])
        return stock[id]         
	};
 
    const columns = [
        //{ field: 'id', headerName: 'ID', width: 250 },
        { field: 'name', headerName: 'Name', width: 300 },
        { field: 'manufacturer', headerName: 'Brand', width: 130 },
        { field: 'color', valueGetter: (params) => `${params.getValue('color')}`, headerName: 'Color', width: 130 },
        { field: 'price', headerName: 'Price', width: 130 },
        { field: 'id', renderHeader: () => (<strong>
                                                {'Stock (wait for rendering!) '}
                                            </strong>
                                            ),
                        valueGetter: (params) => availability(params.value), 
                        cellClassName: (params) =>
                            clsx('super-app', {
                            default: params,
                            instock: params.value === 'INSTOCK',
                            outofstock: params.value === 'OUTOFSTOCK',
                            lessthan: params.value === 'LESSTHAN10',
                            }), 
                        width: 250 },
    ];
    
    return (
        <div style={{ height: 800, width: '100%' }} className={classes.root}>
            <DataGrid rows={props.data} columns={columns} />
        </div>
    );
};

export default TableView;

const useStyles = makeStyles({
    root: {
        '& .super-app.default': {
        backgroundColor: 'rgba(240, 240, 240, 0.5)',
        color: 'black',
        fontWeight: '600',
        },
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