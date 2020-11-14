import React, {useState, useEffect} from 'react';
import Table from './Table';

export default function Shirtslist () {

    const [shirts, setShirts] = useState([]);
    const [brands, setBrands] = useState(['reps', 'abiplos', 'nouke', 'derp', 'xoon'])
    const [stockData, setStockData] = useState([]);
    const [stock, setStock] = useState([]);

    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = () => {
        fetch ('https://bad-api-assignment.reaktor.com' + '/products/shirts')
        .then (response => response.json())
        .then (data => {
            setShirts(data);
        })
        .catch(err => console.error(err)); 
        
        getStock()
        //setBrands([...new Set(shirts.map((x) => x.manufacturer))]); 
        
    
    }

    const getStock = () => {
        brands.map((value) => {
            fetch ('https://bad-api-assignment.reaktor.com/availability/' + value)
            .then (response => response.json())
            .then (data => {
                setStockData(data);
                setStock(stockData, ...stock);

            })
            .catch(err => console.error(err)); 
          })
          console.log(stockData)
        }
        
    

    return (
        <div style={{ height: 800, width: '100%' }}>
            <Table data = {shirts}  status = {stockData}/>
        </div>
    );
}