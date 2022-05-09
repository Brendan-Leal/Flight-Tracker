import "./App.css";
import React, { useState, useEffect } from "react";
import data from "./data";
import Table from "./components/Table";
import Pagination from "./components/Pagination";

const App = () => {
  const [startRouteIndex, setStartRouteIndex] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(24);
  const [nextButtonDisabled, setNextButtonDisabled] = useState(false);
  const [prevButtonDisabled, setPrevButtonDisabled] = useState(true);

  const columns = [
    { name: 'Airline', property: 'airline' },
    { name: 'Source Airport', property: 'src' },
    { name: 'Destination Airport', property: 'dest' },
  ];

  const formatValue = (property, value) => {
    if (property === "airline") {
      return data.getAirlineById(value);
    } else {
      return data.getAirportByCode(value);
    }
  };

  useEffect(() => {
    if (startRouteIndex > 0) {
      setPrevButtonDisabled(false);
    } else {
      setPrevButtonDisabled(true);
    }

    if (rowsPerPage === data.routes.length - 1) {
      setNextButtonDisabled(true);
    } else {
      setNextButtonDisabled(false);
    }
  }, [startRouteIndex, rowsPerPage]);

  const onNextClick = () => {
    setStartRouteIndex(startRouteIndex + 25);
    setRowsPerPage(rowsPerPage + 25);
  };

  const onPrevClick = () => {
    setStartRouteIndex(startRouteIndex - 25);
    setRowsPerPage(rowsPerPage - 25);
  };

  return (
    <div className="app">
      <header className="header">
        <h1 className="title">Airline Routes</h1>
      </header>
      <section>
        <Table
          className="routes-table"
          columns={columns}
          rows={data.routes}
          format={formatValue}
          perPage={rowsPerPage}
          start={startRouteIndex}
        />
        <Pagination
          prevButtonDisabled={prevButtonDisabled}
          onPrevClick={onPrevClick}
          startRouteIndex={startRouteIndex}
          perPage={rowsPerPage}
          totalRoutes={data.routes.length}
          nextButtonDisabled={nextButtonDisabled}
          onNextClick={onNextClick}
        />
      </section>



    </div>
  );
};
export default App;