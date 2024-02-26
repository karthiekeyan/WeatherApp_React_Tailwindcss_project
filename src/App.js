import React, { useState } from "react"
import axios from "axios"



function App ()

{
    const [deg,setDeg] =useState("0")
    const [city, setCity] =useState("0")
    const [desc ,setDesc] =useState("0")
    const [evalue , setEvalue] =useState("")

    
    function handleChange(e){
        setEvalue(e.target.value)
    }

    function getweather(){
        var weatherdata = axios(`https://api.openweathermap.org/data/2.5/weather?q=${evalue}&appid=15771417198c4c99f589be2ac675b630`);
        weatherdata.then(function(hi){
            setDeg(hi.data.main.temp);
            setDesc(hi.data.weather[0].main)
            setCity(hi.data.name)
        })
    }

  return(

  
  <div className="flex flex-row justify-center h-[100vh] items-center">
    <div style = {{"background-image": "linear-gradient(to right, #b8cbb8 0%, #b8cbb8 0%, #b465da 0%, #cf6cc9 33%, #ee609c 66%, #ee609c 100%)",}} className="p-5 w-[450px] h-[450px] mb-3 rounded-md shadow">
        <div style={{"background-image": "linear-gradient(to top, #d9afd9 0%, #97d9e1 100%)"}} className=" flex justify-center items-center py-2 mb-5 mt-2 rounded-full">
        <h2 className=" font-semibold text-2xl  text-[#070716] hover:text-white cursor-pointer ">🌤️Weather App...</h2>
        </div>
        <h2 className="font-semibold text-3xl">Hey ! ⛅</h2>
        <p className="text-xm mt-1  mb-3">Do you want to know the weather Report :)</p>
        <input onChange={handleChange} className="rounded-md h-10 w-full text-1xl p-2 mt-3 mb-4 outline-none" placeholder="Enter Your City Name"></input>
        <br/>
        <button onClick={getweather} className="bg-[#070716] font-semibold text-white rounded-full px-7 p-3 mt-5 mb-5 text-md hover:text-yellow-500" >Get Report ⚡</button>

        <div className="flex w-full justify-between ">
            <div style={{"background-image": "linear-gradient(to top, #d9afd9 0%, #97d9e1 100%)"}} className="px-3 py-1 h-[90px] w-[100px] rounded-[20px] ">
                <p className="text-md mt-1 font-semibold text-center"> 🌡️<br/> Degree <br/> {deg}</p>
            </div>
            <div style={{"background-image": "linear-gradient(to top, #d9afd9 0%, #97d9e1 100%)"}} className="px-3 py-1 h-[90px] w-[100px] rounded-[20px] ">
                <p className="text-md mt-1 font-semibold text-center "> 🌏<br/> City <br/> {city}</p>
            </div>
            <div style={{"background-image": "linear-gradient(to top, #d9afd9 0%, #97d9e1 100%)"}} className="px-3 py-1 h-[90px] w-[100px] rounded-[20px] ">
                <p className="text-md mt-1 font-semibold text-center"> 🌦️<br/> Weather <br/> {desc}</p>
        </div>
    </div>
</div>
   
</div>
  )
}
 export default App