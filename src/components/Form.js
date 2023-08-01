import React from "react";
import "./Form.css";
const Form = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log(formData.get("name"), formData.get("email"));
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-inputs">
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <label>
            Email:
            <input type="email" name="email" />
          </label>
        </div>

        <label>
          Query
          <textarea name="message" rows="4" cols="50" />
        </label>

        {/* <button className="triangle-button" type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="100"
            viewBox="0 0 270 259"
            fill="none"
          >
            <path
              d="M99.535 108.76L201.552 11.3541C227.316 -13.245 270 5.01615 270 40.6375V218.512C270 240.873 251.873 259 229.512 259H41.5153C4.7943 259 -12.9616 214.042 13.8496 188.95L99.535 108.76Z"
              fill="black"
            />
            
          </svg>
          <h1 className="text">Click me</h1>
        </button> */}


     
   <button>
   <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="100"
            viewBox="0 0 270 259"
            fill="none"
          >
            <path
              d="M99.535 108.76L201.552 11.3541C227.316 -13.245 270 5.01615 270 40.6375V218.512C270 240.873 251.873 259 229.512 259H41.5153C4.7943 259 -12.9616 214.042 13.8496 188.95L99.535 108.76Z"
              fill="black"
            />

          </svg>
   </button>


      </form>
    </div>
  );
};

export default Form;
