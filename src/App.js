import MultiForm from "./Multiform";
import Flexa from "./Flexa";
import Flexcont from "./Flexcont";
import Flexdivb from "./Flexdivb";
import Flexdivc from "./Flexdivc";
import FlexHead from "./FlexHead";

const formSections = [
  {
    id: "receiversAddress",
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
  {
    id: "sendersAddress",
    title: "Enter the sender's address",
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
  return (
    <Flexcont>
      <FlexHead>Wizard</FlexHead>
      <Flexdivc>1</Flexdivc>
      <Flexa>
        <MultiForm formSections={formSections} />
      </Flexa>
      <Flexdivb></Flexdivb>
    </Flexcont>
  );
}

export default App;
