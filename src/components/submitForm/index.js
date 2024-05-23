import React from "react";
import "./index.css";

const SubmitForm = () => {
  const onSubmitForm = (event) => {
    event.preventDefault();
  };
  return (
    <form className="form-container" onSubmit={onSubmitForm}>
      <input type="text" className="form-input-container" placeholder="Name" />
      <input type="text" className="form-input-container" placeholder="Email" />
      <input
        type="text"
        className="form-input-container"
        placeholder="Mobile number*"
      />
      <input
        type="text"
        className="form-input-container"
        placeholder="Whatsapp number*"
      />
      <button className="btn btn-primary form-button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default SubmitForm;
