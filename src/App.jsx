import React, { useState, useEffect, createContext } from "react";
import Topbar from "./components/Topbar";
import Filters from "./components/Filters";
import Contacts from "./components/Contacts";
import "./App.scss";

// Create context object
export const AppContext = createContext();

const App = () => {
  const [contatos, setContatos] = useState([]);
  const [mostrarContatos, setMostrarContatos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const getContacts = async () => {
    let response = await fetch(
      "https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts"
    );
    return await response.json();
  };

  useEffect(() => {
    const contacts = () => {
      getContacts().then((res) => {
        setContatos(res);
        setMostrarContatos(res);
        setTimeout(() => {
          setLoading(false);
        }, 200);
      });
    };
    return contacts();
  }, []);

  useEffect(() => {
    const compare = (a, b) => {
      const A = a[filter].toUpperCase();
      const B = b[filter].toUpperCase();
      let comparison = 0;
      if (A > B) {
        comparison = 1;
      } else if (A < B) {
        comparison = -1;
      }
      return comparison;
    };
    const sorted = contatos.sort(compare);
    setMostrarContatos(sorted);
    setTimeout(() => {
      setLoading(false);
    }, 10);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  useEffect(() => {
    const results = contatos.filter(({ name }) =>
      name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setMostrarContatos(results);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const sortMethod = (type) => {
    setLoading(true);
    const filter = type.target.name;
    setFilter(filter);
  };

  return (
    <React.Fragment>
      <Topbar />
      <AppContext.Provider
        value={{
          filter,
          searchTerm,
          loading,
          handleChange,
          sortMethod,
          mostrarContatos,
        }}
      >
        <Filters />
        <Contacts />
      </AppContext.Provider>
    </React.Fragment>
  );
};

export default App;
