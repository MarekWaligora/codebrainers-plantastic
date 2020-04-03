import React from "react";
import { Input, Label, FormGroup } from "reactstrap";
import PropTypes from "prop-types";

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

SelectComponent.PropTypes = {
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  optionList: PropTypes.arrayOf(
    PropTypes.shape({ label: PropTypes.string, value: PropTypes.string })
  ).isRequired,
  labelDescription: PropTypes.string
};

export default SelectComponent;
