import { useContext } from 'react';
import { context } from '../internals/context';
import { FormContext } from '../types';

function useFormContext<V>() {
  return useContext<FormContext<V>>(context);
}

export default useFormContext;
