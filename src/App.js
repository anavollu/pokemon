import "./App.css";
import Banner from "./components/Banner";
import Type from "./components/Type";
import dataType from "./typeColors";

function App() {
  return (
    <div className="App">
      <Banner />
      {dataType.map((data) => (
        <Type
          key={data.type}
          type={data.type}
          primaryColor={data.primary}
          secondaryColor={data.secondary}
        />
      ))}
    </div>
  );
}

export default App;
