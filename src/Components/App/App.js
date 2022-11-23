import './App.css'
import Display from '../Display/Display.js'
import Header from '../Header/Header.js'
import logo from './logo512.png'
import { useEffect, useState } from 'react'


function App() {
  
const [data, setData] = useState([])
const [search, setSearch] = useState([])


useEffect(()=>{
  async function getAllData() {
    const response = await fetch('http://localhost:3000/users', {method: 'GET', headers: {accept: 'application/JSON'},})
    const dataJson = await response.json() 
  
    setData(dataJson.payload)
  }
  getAllData()
},[])

useEffect(()=>{
  console.log(`data console log >>> ${data}`)
  console.log(`search console log >>> ${search}`)
},[data, search ])

//create a function that captures the value of the programming language dropdown and uses that value to send dropdown title as searchParam, and dropdown content as searchValue, and saves in setSearch state.
  //get value of dropdown menu

return (
    <div className="App">
      <Header logo={logo}/>
      <Display data = {data}
      handleChange={(e)=> setSearch(e.target.value)}/>
    </div>
  );
}

export default App;
