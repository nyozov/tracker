import { useEffect, useState } from "react";
import axios from "axios";
import IpInput from "./components/IpInput";
import Result from "./components/Result";
import Map from "./components/Map";
const api_key = process.env.REACT_APP_API_KEY;
function App() {
  const [ipInput, setIpInput] = useState("");
  const [locationData, setLocationData] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchLocation = async () => {
    setLoading(true);
    const response = await axios.get(
      
      `https://geo.ipify.org/api/v2/country,city?apiKey=${api_key}&ipAddress=${ipInput}`
    );
    console.log(response.data);
    setLocationData(response.data);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    fetchLocation();
  }, []);

  return (
    <div className="App">
      <IpInput
        setIpInput={setIpInput}
        fetchLocation={fetchLocation}
        setLocationData={setLocationData}
      />

      <Result locationData={locationData} loading={loading} />
      <Map locationData={locationData}/>
    </div>
  );
}

export default App;
