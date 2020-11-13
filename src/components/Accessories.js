import React, {useState, useEffect} from 'react';
import Table from './Table';

export default function Accessorieslist () {
  const [accessories, setAccessories] = useState([]);

  useEffect(()=> fetchData(), []);

  const fetchData = () => {
      fetch ('https://bad-api-assignment.reaktor.com' + '/products/accessories')
      .then (response => response.json())
      .then (data => setAccessories(data))
      .catch(err => console.error(err));
  }

  return (
    <div style={{ height: 800, width: '100%' }}>
        <Table data = {accessories} />
    </div>
  );

}