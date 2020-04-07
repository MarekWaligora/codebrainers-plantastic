import React from "react";
import { Input, Label, FormGroup } from "reactstrap";
import propTypes from "prop-types";

const SelectComponent = ({
  labelDescription,
  name,
  value,
  onChange,
  optionList
}) => {
  const id = `id_${name}`;

  return (
    <FormGroup>
      <Label for={id}>{labelDescription}</Label>

      <Input
        id={id}
        type="select"
        name={name}
        value={value}
        onChange={onChange}
      >
        {optionList.map(item => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
        ;
      </Input>
    </FormGroup>
  );
};

SelectComponent.propTypes = {
  value: propTypes.string,
  name: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  optionList: propTypes.arrayOf(
    propTypes.shape({ label: propTypes.string, value: propTypes.string })
  ).isRequired,
  labelDescription: propTypes.string
};
export default SelectComponent;
