import { useEffect, useState } from "react";
import "./App.css";
import Table from "./Table";

function App() {
  const [url, setUrl] = useState("");
  const [data, setData] = useState([]);
  const [cityName, setCityName] = useState("");

  const tableHeader = ["#", "Name", "Phone", "Address", "Website"];
  useEffect(() =>
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data[0]) {
          data = data.map((item, index) => {
            return {
              id: index + 1,
              name: item.name,
              phone: item.phone,
              address: item.address,
              website: item.website,
            };
          });
          return setData(data);
        }
      })
  );
  
  const filterByDepartmentName = (event) => {
    event.preventDefault();
    const department = event.target.id;
    const url = `http://localhost:5000/${cityName}/${department}`;
    setUrl(url);
  };
  if (data[0]) {
  }
  return (
    <div className="App">
      <h2>London Mini-Guide</h2>
      <div>
        <label for="cities"></label>
        <select
          id="cities"
          onChange={(event) => setCityName(event.target.value)}
        >
          <option value="">Select a city...</option>
          <option value="harrow">Harrow</option>
          <option value="heathrow">Heathrow</option>
          <option value="stratford">Stratford</option>
        </select>
      </div>
      <div>
        <button id="pharmacies" onClick={filterByDepartmentName}>
          Pharmacies
        </button>
        <button id="colleges" onClick={filterByDepartmentName}>
          Schools and Colleges
        </button>
        <button id="hospitals" onClick={filterByDepartmentName}>
          Hospitals
        </button>
        <button id="doctors" onClick={filterByDepartmentName}>
          Doctors
        </button>
      </div>

      <Table labels={tableHeader} data={data} />
    </div>
  );
}

export default App;
