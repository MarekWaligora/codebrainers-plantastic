import React, { Component } from "react";
import './plantOptions'
//import { requiredExposureOptions } from "../common/plantOptions"

const selectionFields = (data) => {
    return ( 
        {
            data.map(item => (
            <option value={item.value} key={item.value}>{item.label}</option> ))
        }
    )
} 
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
 

