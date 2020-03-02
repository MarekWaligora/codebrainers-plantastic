import React from 'react';
import PropTypes from 'prop-types';
import './CategoryItem.css'

//kazdy komponet klasowty posiada pole nazywajace sie this.props
//React dba o this.props
class CategoryItem extends React.PureComponent{
    
    render(){
        const name=this.props.name;
        const categoryLabel=this.props.label;
       // console.log(name);
        return(       
        <p>
            { name }
            { ' ' }
            { categoryLabel }
        
        </p>
    );
    }
}

//Przypisanie wlasciwosci do klasy !!!
//pole statyczne propTypes
CategoryItem.propTypes={
    name:PropTypes.string.isRequired,
    label:PropTypes.string,
};
// demonstracyjnie - mozna przypisac 
/* CategoryItem.metoda=function(){
    console.log();
};

CategoryItem.metoda(); */

export default CategoryItem;