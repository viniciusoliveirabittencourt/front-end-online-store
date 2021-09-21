import React from 'react';
import PropTypes from 'prop-types';

class CardCategories extends React.Component {
  render() {
    const { category: { name, id }, onClick } = this.props;
    return (
      <li>
        <button
          type="button"
          onClick={ () => onClick(id) }
          data-testid="category"
        >
          { name }
        </button>
      </li>

    );
  }
}

CardCategories.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func.isRequired };

export default CardCategories;
