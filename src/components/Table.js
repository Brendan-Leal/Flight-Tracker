import React from "react";

function Table({
  className,
  columns,
  rows,
  format,
  perPage,
  start,
}) {

  const routesToShow = () => {
    let allTableRows = rows.map((r, index) => {
      return (
        <tr key={index}>
          <td>{format("airline", r.airline)}</td>
          <td>{format("src", r.src)}</td>
          <td>{format("dest", r.dest)}</td>
        </tr>
      );
    });

    return allTableRows.filter((r, index) => {
      return index >= start && index <= perPage;
    });
  };


  return (
    <table className={className}>
      <thead>
        <tr>
          {columns.map((c, index) => {
            return (
              <th key={index}>{c.name}</th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {routesToShow()}
      </tbody>
    </table>
  );
}

export default Table;