import React from 'react';
import PropTypes from 'prop-types';

class CardCategorias extends React.Component {
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

CardCategorias.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CardCategorias;
