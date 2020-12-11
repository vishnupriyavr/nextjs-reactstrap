import React, { memo } from 'react';
import {
  Badge,
  Button,
  ButtonDropdown,
  ButtonGroup,
  UncontrolledButtonDropdown,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

const ButtonsPage = memo(props => {
  const {
    /* dropdowns */
    isOpen,
    stateDropUp,
    setStateDropUp,
    stateDropLeft,
    setStateDropLeft,
    stateDropRight,
    setStateDropRight,
    stateDropRightAlign,
    setStateDropRightAlign,
    toggle,
  } = props;

  const styles = {
    iframe: {
      width: '100',
      height: '90',
      border: '0',
    },
  };

  return (
    <>
      <h3>Bring Your Own Data</h3>
      <iframe
        src="http://localhost:3000"
        title="Icons iframe"
        width="1000"
        height="500"
      >
        <p>Your browser does not support iframes.</p>
      </iframe>
    </>
  );
});

export default ButtonsPage;
