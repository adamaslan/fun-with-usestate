/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import "./index.css";

const MultiForm = (props) => {
  const [currentFormSectionIndex, setCurrentFormSectionIndex] = useState(0);

  const [multiFormState, setMultiFormState] = useState(
    props.formSections.reduce((all, formSection) => {
      const formFieldsAsState = formSection.formFields.reduce(
        (fields, field) => {
          fields[field.label] = "";
          return fields;
        },
        {}
      );
      console.log("formFieldsAsState", formFieldsAsState);
      all[formSection.id] = formFieldsAsState;

      return all;
    }, {})
  );

  const onHandleNextSection = () => {
    console.log(currentFormSectionIndex + 1, props.formSections.length);
    if (currentFormSectionIndex + 1 < props.formSections.length) {
      setCurrentFormSectionIndex(currentFormSectionIndex + 1);
    }
  };
  const onHandlePreviousSection = () => {
    if (currentFormSectionIndex > 0) {
      setCurrentFormSectionIndex(currentFormSectionIndex - 1);
    }
  };

  const sectionPercentOfWhole = 100 / props.formSections.length;
  console.log("multiFormState", multiFormState);
  return (
    <div className="">
      <div
        className="progress-bar"
        style={{ width: "100%", border: "1px solid black" }}
      >
        {props.formSections.map((section, index) => {
          if (index < currentFormSectionIndex) {
            return (
              <div
                style={{
                  width: `${sectionPercentOfWhole}%`,
                  height: "20 px",
                  backgroundColor: "blue",
                }}
              >
                &nbsp;
              </div>
            );
          }
        })}
      </div>
      <p>{props.formSections[currentFormSectionIndex].title}</p>
      {props.formSections[currentFormSectionIndex].formFields.map((field) => {
        return (
          <div class="container">
            <div class="flex-outer">
              <label class="flex-outer" for={field.label}>
                {field.label}
              </label>
              <input
                type={field.type}
                id={field.label}
                name={field.label}
                onChange={(e) => {
                  setMultiFormState({
                    ...multiFormState,
                    [props.formSections[currentFormSectionIndex].id]: {
                      ...multiFormState[
                        props.formSections[currentFormSectionIndex].id
                      ],
                      [field.label]: e.target.value,
                    },
                  });
                }}
              />
            </div>
          </div>
        );
      })}
      <div class="flex-outer">
        <button class="cute" onClick={onHandlePreviousSection}>
          Back
        </button>
        <button class="cute" onClick={onHandleNextSection}>
          Next
        </button>
      </div>
    </div>
  );
};

export default MultiForm;
