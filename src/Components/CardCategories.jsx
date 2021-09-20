import React from 'react';
import PropTypes from 'prop-types';

class CardCategories extends React.Component {
  render() {
    const { category } = this.props;
    return (
      <li>
        <h3 data-testid="category">{category}</h3>
      </li>
    );
  }
}

CardCategories.propTypes = { category: PropTypes.string.isRequired };

export default CardCategories;
