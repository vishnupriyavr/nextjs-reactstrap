import React, { memo } from 'react';

import { EmployeeCard, EmployeeVCard } from '../../card';
import { CARDS } from '../../../constants/cards';

const EmployeePage = memo(props => {
  const { dispatch, storeLayout, id } = props;

  return (
    <>
      <h1>Templates</h1>
      <h4>Predefined Templates</h4>
      <EmployeeCard items={CARDS.employees} />
    </>
  );
});

export default EmployeePage;
