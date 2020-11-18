import React, {useState, useEffect} from 'react';
import Table from './Table';

export default function Shirtslist (props) {

    const [shirts, setShirts] = useState([]);
    const [brands, setBrands] = useState(['reps', 'abiplos', 'nouke', 'derp', 'xoon'])
    const [stock, setStock] = useState([]);

    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = () => {
        fetch ('https://bad-api-assignment.reaktor.com/products/shirts', {
            headers: {
                'x-force-error-mode': 'all'
            }
        })
        .then (response => response.json())
        .then (data => {
            setShirts(data);
        })
        .catch(err => console.error(err)); 

        getStock();
    }

    const getStock = () => {
        let attemptsCount = 0;
        let setAvailability = (brandName, callback) => {
            fetch('https://bad-api-assignment.reaktor.com/availability/' + brandName)
                .then(response => response.json())
                .then(data => {
                    // console.log(data);
                    if ('[]' === data.response && attemptsCount++ < 5) {
                        setAvailability(brandName, callback);
                    } else {
                        for (let item of data.response) {
                            const regex = /\>(.*?)\</
                            //const check = data.DATAPAYLOAD.
                            stock[item.id.toLowerCase()] = item.DATAPAYLOAD.match(regex)[1];
                        }
                        callback();
                    }
                })
                .catch(err => console.error(err));
        }
        
        let iterateBrands = (index) => {
            if (index < brands.length) {
                setAvailability(brands[index], () => iterateBrands(index + 1))
            }
        }
        iterateBrands(0);
    }
  
    return (
        <div style={{ height: 800, width: '100%' }}>
            <Table data = {shirts}  stock = {stock}/>
        </div>
    );
}

/* 
const getStock = () => {
        let attemptsCount = 0;
        let setAvailability = (value) => {
            fetch ('https://bad-api-assignment.reaktor.com/availability/' + value)
                .then (response => response.json())
                .then (data => {
                    // console.log(data);
                    if ('[]' === data.response && attemptsCount++ < 5) {
                        setAvailability(value);
                    } else {
                        for (let item of data.response) {
                            //stock[item.id] = item.DATAPAYLOAD;
                            stock.push(item)
                        }
                    }
                })
                .catch(err => console.error(err));
        }
        brands.map((value) => {attemptsCount = 0; setAvailability(value);});
    }

    const [shirts, setShirts] = useState([]);
    const [brands, setBrands] = useState(['reps', 'abiplos', 'nouke', 'derp', 'xoon'])
    const [stock, setStock] = useState([]);

    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = () => {
        fetch ('https://bad-api-assignment.reaktor.com' + '/products/shirts', {
            headers: {
                'x-force-error-mode': 'all'
            }
        })
        .then (response => response.json())
        .then (data => {
            setShirts(data);
        })
        .catch(err => console.error(err)); 

        getStock();
    }

    const getStock = () => {
        let attemptsCount = 0;
        let setAvailability = (brandName, callback) => {
            fetch('https://bad-api-assignment.reaktor.com/availability/' + brandName)
                .then(response => response.json())
                .then(data => {
                    // console.log(data);
                    if ('[]' === data.response && attemptsCount++ < 5) {
                        setAvailability(brandName, callback);
                    } else {
                        for (let item of data.response) {
                            const regex = /\>(.*?)\</
                            //const check = data.DATAPAYLOAD.
                            stock[item.id.toLowerCase()] = item.DATAPAYLOAD.match(regex)[1];
                        }
                        callback();
                    }
                })
                .catch(err => console.error(err));
        }
        
        let iterateBrands = (index) => {
            if (index < brands.length) {
                setAvailability(brands[index], () => iterateBrands(index + 1))
            }
        }
        iterateBrands(0);
    }
*/