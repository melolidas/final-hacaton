import React, { useState } from "react";
import "./styles.css";
import { Button } from "@mui/material";

function MobileSearchBar() {
  // const history = useHistory();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }
  return (
    <div className="mobile-search-bar">
      {/* < ranges={[selectionRange]} onChange={handleSelect} /> */}
      <h2>Number of guests</h2>
      <input min={0} defaultValue={2} type="number" />
      {/* <Button onClick={() => history.push("/search")}>Search Airbnb</Button> */}
    </div>
  );
}

export default MobileSearchBar;
