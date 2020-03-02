import React from 'react';
import PropTypes from 'prop-types';
import './CategoryItem.css';

class CategoryItem extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      className: "category-item"
    }
  }

  render() {
    const category = this.props.category;

    const onClick = () => {
      let className = 'category-item' + (this.state.className === 'category-item' ? ' active' : '');
      this.setState({ className })
    };

    return (
      <div className={this.state.className} onClick={ onClick }>
         { category }
      </div>
    );
  }
}

CategoryItem.propTypes = {
  category: PropTypes.string.isRequired,
  label: PropTypes.string,
};


export default CategoryItem;