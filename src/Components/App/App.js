import './App.css'
import Display from '../Display/Display.js'
import Header from '../Header/Header.js'
import logo from './logo512.png'
import { useEffect, useState } from 'react'


function App() {
const [progammingLanguageText, setProgammingLanguageText] = useState('')
const [spokenLanguageText, setSpokenLanguageText] = useState('')
const [locationText, setLocationText] = useState('')
const [data, setData] = useState([])
const [searchBarText, setSearchBarText] = useState('')



useEffect(()=>{
  async function getAllData() {
    const response = await fetch('http://localhost:3000/users', {method: 'GET', headers: {accept: 'application/JSON'},})
    const dataJson = await response.json() 
  
    setData(dataJson.payload)
  }
  getAllData()
},[])



useEffect(()=>{
  async function getDataByFilter() {
    const response = await fetch(`http://localhost:3000/users/byFilter?programming_language=${progammingLanguageText}&location=${locationText}&spoken_language=${spokenLanguageText}`, {method: 'GET', headers: {accept: 'application/JSON'},})
    const dataJson = await response.json() 
    console.log(dataJson)
  
    setData(dataJson.payload)
  }
  getDataByFilter()
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
  //console.log(`search console log >>> ${searchBarText}`)
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
  console.log(e);
  console.log('onchangespokenlang called')
  setSpokenLanguageText(e.value)
  console.log(spokenLanguageText)
}

function onChangeLocation(e) {
  console.log(e)
  setLocationText(e.value)
  console.log(locationText);
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
