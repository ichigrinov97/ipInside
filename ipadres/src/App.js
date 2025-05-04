import {useState,useEffect} from 'react';
import './App.css';
import axios from 'axios';

function App() {


  const [ip,setIp] = useState('...')

  async function getIp(){
    const myip = await axios.get('https://api.ipify.org/?format=json');
    console.log(myip.data);
    setIp(myip.data.ip)
  }

  useEffect(()=>getIp(),[])



  return (
    <div>
      <h1>{ip}</h1>
      <h2>{ip} ( This is your IP address...probably :P )</h2>
    </div>
  );
}

export default App;
