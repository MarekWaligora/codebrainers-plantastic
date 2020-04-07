import React from "react";
import SelectComponent from "./select";
import propTypes from "prop-types";
import { FormGroup } from "reactstrap";

const FormComp = (numRows, numColsPerRow, sizeXS, sizeLG, numSelects) => {
  function createRows(numColumns) {
    for (let i = 0; numRows - 1; i++) {
      numRows[i] = `<Row>to jest tekst ${i}</Row><Col>to jest kolumna</Col>`;
      console.log(numRows);
    }
  }

  return <FormGroup>{createRows(numColsPerRow)}</FormGroup>;
};

FormComp.propTypes = {
  numRows: propTypes.any,
  numColsPerRow: propTypes.any,
  sizeXS: propTypes.any,
  sizeLG: propTypes.any,
  numSelects: propTypes.any
};

export default FormComp;
