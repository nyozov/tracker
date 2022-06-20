import { useEffect, useState } from "react";
import axios from "axios";
import IpInput from "./components/IpInput";
import Result from "./components/Result";
import Map from "./components/Map";
import { ipGenerator } from "./ipGenerator";
function App() {
  const [ipInput, setIpInput] = useState("");
  const [locationData, setLocationData] = useState({});
  const [loading, setLoading] = useState(false);

  // window.navigator.permissions
  //   .query({ name: "geolocation" })
  //   .then(function (result) {
  //     if (result.state === "granted") {
  //       setPermission(true);
  //       console.log("worked");
  //     } else if (result.state === "prompt") {
  //       setPermission(false);
  //       console.log("didnt work");
  //     }
  //     // Don't do anything if the permission was denied.
  //   });

  const fetchLocation = async () => {
    setLoading(true);
    const response = await axios.get(
      ipInput
        ? `http://ip-api.com/json/${ipInput}`
        : `http://ip-api.com/json/8.8.8.8`
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
    setLoading(true)
    const ip = ipGenerator();
    
    const response = await axios.get(`http://ip-api.com/json/${ip}`);
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
          className="text-white font-medium bg-black p-2 hover:bg-gray-800 rounded-xl mt-2 shadow cursor-pointer"
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
