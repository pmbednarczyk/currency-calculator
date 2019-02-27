import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import ListItem from './components/ListItem';

import styles from './styles.module.scss';

const DropdownList = (
  {
    onElementClick,
    elements,
  },
) => {
  const dropdownClassnames = classNames({
    [styles.dropdownList]: true,
  });

  const maybeRenderOptions = () => {
    if (!elements.length) {
      return null;
    }

    return elements.map(element => <ListItem onClick={onElementClick} data={element} />);
  };

  return (
    <ul className={dropdownClassnames}>
      {maybeRenderOptions()}
    </ul>
  );
};

DropdownList.propTypes = {
  onElementClick: PropTypes.func.isRequired,
  elements: PropTypes.array,
};

DropdownList.defaultProps = {
  elements: [],
};

export default DropdownList;
