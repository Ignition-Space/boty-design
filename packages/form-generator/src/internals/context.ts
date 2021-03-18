import { createContext } from 'react';
import { FormContext } from '../types';

export const context = createContext<FormContext<any>>(null);
export const FormContextProvider = context.Provider;
export const FormContextConsumer = context.Consumer;
