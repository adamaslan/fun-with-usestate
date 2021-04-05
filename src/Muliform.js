/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";

const MultiForm = (props) => {
  const [currentFormSectionIndex, setCurrentFormSectionIndex] = useState(0);

  const onHandleNextSection = () =>
    setCurrentFormSectionIndex(currentFormSectionIndex + 1);
  const onHandlePreviousSection = () =>
    setCurrentFormSectionIndex(currentFormSectionIndex - 1);

  return (
    <div className="">
      <p>{props.formSections[currentFormSectionIndex].title}</p>
      {props.formSections[currentFormSectionIndex].formFields.map(() => {
        return <input type={field.type} id={field.label} name={field.label} />;

return (
          <div>
            <button onClick={onHandlePreviousSection}>Back</button>
            <button onClick={onHandleNextSection}>Next</button>
          </div>
        );
      })}
    </div>
  );
};

export default MultiForm;
