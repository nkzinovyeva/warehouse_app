import React, {useState, useEffect} from 'react';
import { DataGrid } from '@material-ui/data-grid';


function TablePr(props) {
    /*const [data, setData] = useState(props.data);
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        setBrands([...new Set(data.map(x => x.manufacturer))])
        console.log(brands)
    }, []);*/

    console.log(props.stock)
    console.log(props.warehouse)
    
    const columns = [
        { field: 'id', headerName: 'ID', width: 250 },
        { field: 'name', headerName: 'Name', width: 300 },
        { field: 'manufacturer', headerName: 'Brand', width: 130 },
        { field: 'color', valueGetter: (params) => `${params.getValue('color')}`, headerName: 'Color', width: 130 },
        { field: 'price', headerName: 'Price', width: 130 },
        //{ field: 'id', valueGetter: (params) => {availability(params)},  headerName: 'Stock', width: 250 },
        
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
        }, 
        
        const [stock, setStock] = useState(props.stock);

    const availability = (id) => {
        const productID = id
        const data = stock.find(item => item.id === productID)

        const regex = /\>(.*?)\</
        const check = data?.DATAPAYLOAD.match(regex)[1]
        
    
	}
        
        */