import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchData } from "./redux/slice/WeatherSlice"
import { FiSearch } from "react-icons/fi";
import { FaCloud } from "react-icons/fa";
import { IoMdArrowUp } from "react-icons/io";
import { IoArrowDownSharp } from "react-icons/io5";
import { IoWaterOutline } from "react-icons/io5";
import { IoIosRainy } from "react-icons/io";
import { MdShowChart } from "react-icons/md";
import { RiFoggyFill } from "react-icons/ri";
import { IoSunny } from "react-icons/io5";
import { FaWind } from "react-icons/fa";
import { useState } from "react";


const Weather = () => {
  const [city,setCity]=useState('tashkent')
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchData(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=5d4780f2e9cad46e7f4160347160b3bb`))
  },[city])
  
  const handleSubmit = (e)=>{
    e.preventDefault()
    dispatch(fetchData(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=5d4780f2e9cad46e7f4160347160b3bb`))
  }
  
  const data = useSelector(state=>state.weather)
  console.log(data);
  return (
    <section className="h-lvh flex flex-col items-center justify-center bg-gradient-to-b from-blue-500 to-cyan-100">
    <div className="p-8 w-[900px] border-[1px] border-white border-solid rounded-lg">
    
    <form onSubmit={handleSubmit} className="flex items-center w-full bg-white mb-6 rounded-lg px-6">
    <FiSearch className="text-blue-600 scale-150 mr-6" />
    <input value={city} onChange={(e)=>setCity(e.target.value.trim().toLowerCase())} type="text" placeholder="Tashkent" className="text-[18px] py-2 outline-0 w-full" required />
    <button className="text-blue-600 text-xl ">GO</button>
    </form>
    
    <div className="bg-white p-6 rounded-lg">
    <div className="flex w-full items-center justify-between mb-6">
    <h2 className="font-bold text-[23px] text-[#00000099]">Current Weather</h2>
    <select  className="bg-blue-500 text-white font-semibold py-[5px] px-[10px] outline-0 rounded-lg text-xl text-center">
    <option value="selsiy">Selsiy</option>
    <option disabled value="franheyt">Franheyt</option>
    </select>
    </div>
    
    <div className="flex  mb-8">
    <div className="border-e-[1px] w-1/2 border-[#0000004d]">
    <h3 className="text-[23px] text-blue-500 font-bold mb-6 pl-4">{data.data.length != 0 && data.data.name? data.data.name:'__'}</h3>
    <div className="flex gap-5 mb-6 items-start pl-10">
    {data.data.length != 0 && data.data.name && data.data.weather[0].main.toLowerCase().includes('clouds')?<FaCloud className="w-[80px] h-[80px] text-[#52525223]" />:data.data.length != 0 && data.data.name && data.data.weather[0].main.toLowerCase().includes('rain')?<IoIosRainy className="w-[80px] h-[80px] text-[#52525223]" />:data.data.length != 0 && data.data.name && data.data.weather[0].main.toLowerCase().includes('clear')?<IoSunny className="w-[80px] h-[80px] text-yellow-400" />:data.data.length != 0 && data.data.name && data.data.weather[0].main.toLowerCase().includes('mist')?<RiFoggyFill className="w-[80px] h-[80px] text-[#52525223]" />:''}
    <h2 className="text-7xl text-blue-500 font-medium">
      {data.data.length != 0 && data.data.name?`${data.data.main.temp}℃`:'0'}</h2>
    </div>
    <p className="pl-4 font-bold text-[23px] text-[#00000075]">{data.data.length != 0 && data.data.name?`${data.data.weather[0].description}`:'__'}</p>
    </div>
    
    <div className="w-1/2 pl-5">
    <h3 className="text-[23px] text-blue-500 font-bold mb-6">Feels like {data.data.length != 0 && data.data.name?`${data.data.main.feels_like}℃`:''} </h3>
      
      <ul className="flex w-full gap-[80px]  text-[24px]">
      <li>
      <ul className="flex flex-col gap-2 font-medium">
      <li className="flex text-blue-500 items-center gap-3"><IoMdArrowUp className="text-[#00000099]" /> {data.data.length != 0 && data.data.name?`${data.data.main.temp_max}℃`:'0'}</li>
        <li className="flex text-[#00000099] items-center gap-3"><IoWaterOutline /> Humidity</li>
        <li className="flex items-center gap-3 text-[#00000099]"><FaWind /> Wind</li>
        <li className="flex items-center gap-3 text-[#00000099]"><MdShowChart /> Pressure</li>
        </ul>
        </li>
        <li>
        <ul className="flex flex-col gap-2 font-medium">
        <li className="flex text-blue-500 items-center gap-3"><IoArrowDownSharp className="text-[#00000099]" /> {data.data.length != 0 && data.data.name?`${data.data.main.temp_min}℃`:'0'}</li>
        <li className="text-blue-500">{data.data.length != 0 && data.data.name?`${data.data.main?.humidity}%`:'0%'}</li>
        <li className="text-blue-500">{data.data.length != 0 && data.data.name?`${data.data.wind.speed}`:'0'}kph</li>
        <li className="text-blue-500">{data.data.length != 0 && data.data.name?`${data.data.main.pressure}`:'0'}hPa</li>
        </ul>
        </li>
        </ul>
        </div>
        </div>
        
     
        </div>
        </div>
        </section>
        )
      }
      
      export default Weather
      