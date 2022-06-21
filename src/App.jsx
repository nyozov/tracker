import { useEffect, useState } from "react";
import axios from "axios";
import IpInput from "./components/IpInput";
import Result from "./components/Result";
import Map from "./components/Map";
import { ipGenerator } from "./ipGenerator";
const api_key = process.env.REACT_APP_API_KEY
function App() {
  const [ipInput, setIpInput] = useState("");
  const [locationData, setLocationData] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchLocation = async () => {
    setLoading(true);
    const response = await axios.get(
      ipInput
        ? `https://ipgeolocation.abstractapi.com/v1/?api_key=${api_key}&ip_address=${ipInput}`
        : `https://ipgeolocation.abstractapi.com/v1/?api_key=${api_key}&ip_address=8.8.8.8`
    );
    console.log(response.data);
    setLocationData(response.data);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    fetchLocation();
  }, []);

  const fetchRandom = async () => {
    setLoading(true);
    const ip = ipGenerator();

    const response = await axios.get(`https://ipgeolocation.abstractapi.com/v1/?api_key=${api_key}&ip_address=${ip}`);
    setLocationData(response.data);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="App">
      <IpInput
        setIpInput={setIpInput}
        fetchLocation={fetchLocation}
        setLocationData={setLocationData}
      />
      <div className="w-screen flex justify-center items-center">
        <div
          onClick={fetchRandom}
          className="text-white font-medium bg-black p-2 px-6 hover:bg-gray-800 rounded-xl mt-2 lg:mt-8 shadow cursor-pointer"
        >
          Random Ip
        </div>
      </div>

      <Result locationData={locationData} loading={loading} />
      <Map locationData={locationData} loading={loading} />
    </div>
  );
}

export default App;
