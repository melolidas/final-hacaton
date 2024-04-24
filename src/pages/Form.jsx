import React, { useState } from "react";
import Filter from "../components/Filter";
import Cards from "../components/Cards";
import { list, list2 } from "../assets/cards-list";

const Form = () => {
  const [selectedFilter, setSelectedFilter] = useState(0);
  return (
    <div>
      <Filter />
      {selectedFilter === 0 ? <Cards list={list} /> : <Cards list={list2} />}
    </div>
  );
};

export default Form;
