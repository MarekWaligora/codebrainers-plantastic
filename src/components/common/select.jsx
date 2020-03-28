import React from "react";
import "./plantOptions";

const selectionFields = props => {
  const { data, label, value } = props;

  return (
    <select>
      {data.map(item => (
        <option value={item[value]} key={item[value]}>
          {item[label]}
        </option>
      ))}
    </select>
  );
};
selectionFields.defaultProps = {
  label: "label",
  value: "value"
};

export default selectionFields;

// class SelectionFields extends Component {
//     state = { label,value }

//     render() {
//         return (
//             {
//                 requiredExposureOptions.map(item => (
//             <option value={item.value}>{item.label}</option>
//           ))} );
//     }
// }
