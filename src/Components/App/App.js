import './App.css'
import Display from '../Display/Display.js'
import Header from '../Header/Header.js'
import logo from './logo512.png'
import { useEffect, useState } from 'react'


function App() {
  
const [data, setData] = useState([])
const [searchBarText, setSearchBarText] = useState('')
const [pLangText, setPLangText] = useState('javascript')
const [sLangText, setSLangText] = useState('UK')
const [locationText, setLocationText] = useState('english')


useEffect(()=>{
  async function getAllData() {
    const response = await fetch('http://localhost:3000/users', {method: 'GET', headers: {accept: 'application/JSON'},})
    const dataJson = await response.json() 
  
    setData(dataJson.payload)
  }
  getAllData()
},[])



useEffect(()=>{
  async function getDataByLang() {
    const response = await fetch(`http://localhost:3000/users/byLang?programming_language=${pLangText}&location=${locationText}&spoken_language=${sLangText}`, {method: 'GET', headers: {accept: 'application/JSON'},})
    const dataJson = await response.json() 
  
    setData(dataJson.payload)
  }
  getDataByLang()
},[pLangText, locationText, sLangText])



useEffect(()=>{
  async function getAllDataByKeyword() {
    const response = await fetch(`http://localhost:3000/users/${searchBarText}`, {method: 'GET', headers: {accept: 'application/JSON'},})
    const dataJson = await response.json() 
  
    setData(dataJson.payload)
  }
  getAllDataByKeyword()
},[searchBarText])


useEffect(()=>{
  //console.log(`data console log >>> ${data}`)
  //console.log(`search console log >>> ${searchBarText}`)
},[data, searchBarText ])

function handleChange(e) {
  console.log(`value is changing >> ${e.target.value}`)
  setSearchBarText(e.target.value)
}

function onChangePL(e) {
  setPLangText(e.value)
  console.log(e);
}

function onChangeSL(e) {
  setSLangText(e.value)
  console.log(e);
}

function onChangeLocation(e) {
  setLocationText(e.value)
  console.log(e);
}

return (
    <div className="App">
      <Header logo={logo}/>
      <Display data = {data}
      handleChange={handleChange} onChange = {onChangePL}/>
    </div>
  );
}



export default App;
