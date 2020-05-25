import React, {useContext} from "react";
import Contact from "./Contact";
import { AppContext } from '../App'

const Contacts = () => {
  const { loading, mostrarContatos } = useContext(AppContext);
  return (
    <div data-testid="contacts" className="container">
      <section className="contacts">
        <article className="contact">
          <span data-testid="contacts-avatar" className="contact__avatar" />
          <span data-testid="contacts-name" className="contact__data">
            Nome
          </span>
          <span data-testid="contacts-phone" className="contact__data">
            Telefone
          </span>
          <span data-testid="contacts-country" className="contact__data">
            País
          </span>
          <span data-testid="contacts-date" className="contact__data">
            Admissão
          </span>
          <span data-testid="contacts-company" className="contact__data">
            Empresa
          </span>
          <span data-testid="contacts-department" className="contact__data">
            Departamento
          </span>
        </article>
        {loading ? (
          <p style={{ textAlign: "center", fontSize: "80px" }}>Loading...</p>
        ) : (
          mostrarContatos &&
          mostrarContatos.map((contato) => {
            return <Contact key={contato.id} contato={contato} />;
          })
        )}
      </section>
    </div>
  );
};

export default Contacts;
