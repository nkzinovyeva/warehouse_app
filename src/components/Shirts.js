import React, {useState, useEffect} from 'react';
import Table from './Table';

export default function Shirtslist () {

    const [shirts, setShirts] = useState([]);
    const [brands, setBrands] = useState([])
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
        
        setBrands([...new Set(shirts.map((x) => x.manufacturer))]); 
        console.log(brands)
    
    }

    const getStock = () => {
        
        for (const i = 0; i < brands.length; i++) {
            fetch ('https://bad-api-assignment.reaktor.com/availability/' + brands[i])
            .then (response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                } 
                response.json()
            })
            .then (data => {
                setStock([data, ...stock])
                console.log(stock) 
            })
            .catch(err => console.error(err));
        }  
    }

    return (
        <div style={{ height: 800, width: '100%' }}>
            <Table data = {shirts} />
        </div>
    );
}