import './App.css';
import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Shirtslist from './components/Shirts';
import Jacketlist from './components/Jackets';
import Accessorieslist from './components/Accessories';
//import Data from './components/getData'

function App() {

  const[value, setValue] = useState('shirts');

  const handleChange= (event, value) => {setValue(value);};

  return(
    <div className="App">
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange}>
          <Tab value="jackets" label = "Jackets"/>
          <Tab value="shirts" label= "Shirts"/>
          <Tab value="accessories" label = "Accessories"/>
        </ Tabs>
      </AppBar>
      {value === 'jackets' && <div><Jacketlist /> </div>}
      {value === 'shirts' && <div><Shirtslist /></div>}
      {value === 'accessories' && <div><Accessorieslist /></div>}
    </div>
  );
}

export default App;
/*<div className="App">
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange}>
          <Tab value="jackets" label = "Jackets"/>
          <Tab value="shirts" label= "Shirts"/>
          <Tab value="accessories" label = "Accessories"/>
        </ Tabs>
      </AppBar>
      {value === 'jackets' && <div><Jacketlist /> </div>}
      {value === 'shirts' && <div><Shirtslist /></div>}
      {value === 'accessories' && <div><Accessorieslist /></div>}
    </div> */