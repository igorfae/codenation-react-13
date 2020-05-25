import React from "react";

const Contact = ({ contato }) => {
  const formatarData = (date) => {
    return new Date(date).toLocaleDateString();
  };

  return (
    <article data-testid="contact" className="contact">
      <span className="contact__avatar">
        <img
          src={contato && contato.avatar}
          alt={`${contato && contato.name}`}
        />
      </span>
      <span data-testid="contact-name" className="contact__data">
        {contato && contato.name}
      </span>
      <span data-testid="contact-phone" className="contact__data">
        {contato && contato.phone}
      </span>
      <span data-testid="contact-country" className="contact__data">
        {contato && contato.country}
      </span>
      <span data-testid="contact-date" className="contact__data">
        {contato && formatarData(contato.admissionDate)}
      </span>
      <span data-testid="contact-company" className="contact__data">
        {contato && contato.company}
      </span>
      <span data-testid="contact-department" className="contact__data">
        {contato && contato.department}
      </span>
    </article>
  );
};

export default Contact;
