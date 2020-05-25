import React, { useContext } from "react";
import { AppContext } from "../App";

const Filters = () => {
  const { filter, searchTerm, handleChange, sortMethod } = useContext(
    AppContext
  );
  return (
    <div data-testid="filters" className="container">
      <section className="filters">
        <div className="filters__search">
          <input
            type="text"
            className="filters__search__input"
            placeholder="Pesquisar"
            value={searchTerm}
            onChange={handleChange}
          />

          <button className="filters__search__icon">
            <i className="fa fa-search" />
          </button>
        </div>

        <button
          className={`filters__item ${filter === "name" && "is-selected"}`}
          onClick={sortMethod}
          name="name"
        >
          Nome <i className="fas fa-sort-down" />
        </button>

        <button
          className={`filters__item ${filter === "country" && "is-selected"}`}
          onClick={sortMethod}
          name="country"
        >
          País <i className="fas fa-sort-down" />
        </button>

        <button
          className={`filters__item ${filter === "company" && "is-selected"}`}
          onClick={sortMethod}
          name="company"
        >
          Empresa <i className="fas fa-sort-down" />
        </button>

        <button
          className={`filters__item ${
            filter === "department" && "is-selected"
          }`}
          onClick={sortMethod}
          name="department"
        >
          Departamento <i className="fas fa-sort-down" />
        </button>

        <button
          className={`filters__item ${
            filter === "admissionDate" && "is-selected"
          }`}
          onClick={sortMethod}
          name="admissionDate"
        >
          Data de admissão <i className="fas fa-sort-down" />
        </button>
      </section>
    </div>
  );
};

export default Filters;
