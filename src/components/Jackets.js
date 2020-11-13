import React, {useState, useEffect} from 'react';
import Table from './Table';


export default function Jacketlist () {
  const [jackets, setJackets] = useState([]);

  useEffect(()=> fetchData(), []);

  const fetchData = () => {
      fetch ('https://bad-api-assignment.reaktor.com' + '/products/jackets')
      .then (response => response.json())
      .then (data => setJackets(data))
      .catch(err => console.error(err));
  }

  return (
    <div style={{ height: 800, width: '100%' }}>
        <Table data = {jackets} />
    </div>
  );
}