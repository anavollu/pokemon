import { Route, Routes } from "react-router-dom";
import "./App.css";
import Banner from "./components/Banner";
import Type from "./components/Type";
import ListByTypes from "./components/ListByTypes";
import dataType from "./typeColors";

function App() {
  return (
    <Routes>
      <Route path="/type-list" element={<ListByTypes />} />
      <Route
        path=""
        element={
          <>
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
          </>
        }
      />
    </Routes>
  );
}

export default App;
