import React, { useState, useEffect } from "react";

function Pagination({
  prevButtonDisabled,
  onPrevClick,
  startRouteIndex,
  perPage,
  totalRoutes,
  nextButtonDisabled,
  onNextClick
}) {
  return (
    <div className="pagination">
      <p>
        Showing {startRouteIndex + 1} - {perPage + 1} routes of {totalRoutes} total routes
      </p>
      <p>
        <button
          disabled={prevButtonDisabled}
          onClick={onPrevClick}
        >Prev</button>

        <button
          disabled={nextButtonDisabled}
          onClick={onNextClick}
        >Next</button>
      </p>

    </div >
  );
}

export default Pagination;