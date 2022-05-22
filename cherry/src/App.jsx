import { useState } from 'react'
// import logo from './logo.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import { Offers } from './components/Offers'
import userinfo from './data/userinfo.json'
import offerdata from './data/offers.json'
import { Filters } from './components/Filters'
import { Restaurants } from './components/Restaurants'
import restaurant from './data/restaurant.json'
function App() {
  const [data,setData] = useState(restaurant);
  const[filterby,setFilterby] = useState("")
  const filters= {
    1:" Cost High to Low",
    2:"Cost Low to High",
    3:" Ratings",
    4:" Delivery Time",
    5:" Relevance"
  }
  const updatefilter = (key)=>{
    // console.log(key);
   switch(key){
     case "1":{
       setFilterby(1);
       data.sort((a,b)=>b.costfortwo-a.costfortwo);
       setData([...data]);
       break;
     }
     case "2":{
      setFilterby(2);
      data.sort((a,b)=>a.costfortwo-b.costfortwo);
      setData([...data])
      break;
     }
     default:{
       
       setData(restaurant);
       break;
     }
   }
   
  }
 
  
  return (
    <div className="App">
      <Navbar userinfo={userinfo}/>
      <Offers offerdata={offerdata}/>
      <section className="near-you">
      <Filters filters={filters}  currentfilteredby={filterby} updatefilter={updatefilter}/>
      <Restaurants restaurant={data}  />
      </section>
    </div>
  )
}

export default App
