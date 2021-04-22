import { useEffect, useState } from "react";
import "./App.css";
import Table from "./components/Table";
import CitySelector from "./components/Selector";
import FilterButtons from "./components/ButtonsGroup";

function App() {
  // state variables
  const [url, setUrl] = useState("http://localhost:5000/");
  const [data, setData] = useState([]);
  const [cityName, setCityName] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("choose a city and category first");
  // build the display table header content
  const tableHeader = ["#", "Name", "Phone", "Address", "Website"];

  useEffect(() =>
    fetch(url)
      .then((res) => res.json())
      .then((data) => (Array.isArray(data) ? data.map(formatData) : []))
      .then((data) => setData(data))
  );

  const filterByDepartmentName = (department) => {
    const url = `http://localhost:5000/${cityName}/${department}`;
    if (cityName) {
      setUrl(url);
      setError("");
      setMessage("");
    } else {
      setUrl("http://localhost:5000/");
      setError(
        "No city has been selected. You must select a city from the list above."
      );
      setMessage("choose a city and category first");
    }
  };

  return (
    <div className="App">
      <h1 className="header">London City Mini-Guide</h1>
      <CitySelector
        onChangeHandler={(selectedCity) => setCityName(selectedCity)}
      />
      {error && <div className="error">{error}</div>}
      <FilterButtons onClickHandler={filterByDepartmentName} />
      <Table labels={tableHeader} data={data} />
      {message && <div className="message">{message}</div>}
    </div>
  );
}

export default App;

const formatData = (object, index) => {
  return {
    // add "id" property
    id: index + 1,
    // reorder original entries
    name: object.name,
    phone: object.phone,
    address: object.address,
    website: (
      // change website url into link
      <a href={object.website} rel="noreferrer" target="_blank">
        {object.name}
      </a>
    ),
  };
};
