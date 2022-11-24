import './App.css'
import Display from '../Display/Display.js'
import Header from '../Header/Header.js'
import logo from './logo512.png'
import { useEffect, useState } from 'react'

//TO DO: URL encoding to 'wrap' special characters for search params (see c++ for example)


function App() {
  
const [data, setData] = useState([])
const [searchBarText, setSearchBarText] = useState('')
const [progammingLanguageText, setProgammingLanguageText] = useState('')
const [spokenLanguageText, setSpokenLanguageText] = useState('')
const [locationText, setLocationText] = useState('')


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
    const response = await fetch(`http://localhost:3000/users/byLang?programming-language=${progammingLanguageText}&location=${locationText}&spoken-language=${spokenLanguageText}`, {method: 'GET', headers: {accept: 'application/JSON'},})
    const dataJson = await response.json() 
  
    setData(dataJson.payload)
  }
  getDataByLang()
},[progammingLanguageText, locationText, spokenLanguageText])



useEffect(()=>{
  async function getAllDataByKeyword() {
    const response = await fetch(`http://localhost:3000/users/${searchBarText}`, {method: 'GET', headers: {accept: 'application/JSON'},})
    const dataJson = await response.json() 
  
    setData(dataJson.payload)
  }
  getAllDataByKeyword()
},[searchBarText])


useEffect(()=>{
  console.log(data)
  console.log(`search console log >>> ${searchBarText}`)
},[data, searchBarText ])

function handleChange(e) {
  console.log(`value is changing >> ${e.target.value}`)
  setSearchBarText(e.target.value)
}

function onChangeProgrammingLang(e) {
  setProgammingLanguageText(e.value)
  console.log(e);
}

function onChangeSpokenLang(e) {
  setSpokenLanguageText(e.value)
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
      handleChange={handleChange}
      onChangeProgrammingLang={onChangeProgrammingLang}
        onChangeLocation={onChangeLocation}
        onChangeSpokenLang={onChangeSpokenLang}
      />
    </div>
  );
}



export default App;
