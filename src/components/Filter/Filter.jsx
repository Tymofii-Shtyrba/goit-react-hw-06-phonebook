import { FilterField } from './Filter.styled';
import { filterOut } from 'redux/filterSlice';

import React from 'react';
import { useDispatch } from 'react-redux';

export default function Filter() {
  const dispatch = useDispatch();

  const onChnage = e => {
    dispatch(filterOut(e.target.value));
  };

  return (
    <FilterField>
      Find by name
      <input type="text" name="filter" onChange={onChnage} />
    </FilterField>
  );
}
