import react from "react";
import logo from "./logo.svg";
import "./App.css";
import MultiForm from "./Muliform";

const formSections = [
  {
    title: "Enter the receiver's address",
    onSubmit: () => {
      // post request
    },
    formFields: [
      {
        label: "name",
        type: "string",
        validation: (input) => {
          if (!input) {
            return "Name is required";
          }
          return null;
        },
      },
      {
        label: "street",
        type: "string",
        validation: (input) => {
          if (!input) {
            return "Street is required";
          }
          return null;
        },
      },
      {
        label: "city",
        type: "string",
        validation: (input) => {
          if (!input) {
            return "City is required";
          }
          return null;
        },
      },
      {
        label: "state",
        type: "string",
        validation: (input) => {
          if (!input) {
            return "State is required";
          }
          return null;
        },
      },
      {
        label: "zipCode",
        type: "string",
        validation: (input) => {
          if (!input) {
            return "Zip Code is required";
          }
          return null;
        },
      },
    ],
  },
];

function App() {
  return <MultiForm formSections={formSections} />;
}

export default App;
