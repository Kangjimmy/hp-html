import React from 'react';
import PropTypes from 'prop-types';

export default function PropTypesComponent({ name, favoriteNumber }) {
  return (
    <div>
      안녕하세요 제 이름은 {name}입니다. 제가 좋아하는 숫자는 {favoriteNumber}
      입니다.
    </div>
  );
}

PropTypesComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};
