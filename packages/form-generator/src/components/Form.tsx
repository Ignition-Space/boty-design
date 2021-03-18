import React, {
  Reducer,
  useReducer,
  ReactNode,
  useMemo,
  useRef,
  useEffect,
  createContext,
} from 'react';
import invariant from 'invariant';
import {
  ValidateRule,
  Wrapped,
  FormErrors,
  FormTouched,
  FormValidators,
  FormActions,
  ActionEnums,
  FormContext,
  FormValidating,
  FormChangeEvent,
} from '../types';
import useValidator from '../hooks/useValidator';
import { FormContextProvider } from '../internals/context';
type FormValues = {
  [key in string]: any;
};

/**
 * Props provided to <Form />
 */
type FormProps<V> = {
  initialValues: V;
  initialTouched?: FormTouched<V>;
  initialErrors?: FormErrors<V>;
  validationSchema?: {
    [K in keyof V]?: Wrapped<ValidateRule<V[K], FormContext<V>>>;
  };
};

type FormChildrenProps<V> = FormStoreProps<V> & {
  validators: FormValidators<V>;
  handleChange: FormChangeEvent<V>;
};

type FormStoreProps<V> = {
  values: V;
  touched: FormTouched<V>;
  validating: FormValidating<V>;
  errors: FormErrors<V>;
  isValid: boolean;
};

function Form<Values extends FormValues>({
  initialValues,
  initialErrors,
  initialTouched,
  children,
  validationSchema,
}: FormProps<Values> & {
  children: (props: FormChildrenProps<Values>) => ReactNode | ReactNode;
}) {
  const [state, dispatch] = useReducer<
    Reducer<FormStoreProps<Values>, FormActions<Values>>
  >(
    (state, { type, payload }) => {
      // console.log('action dispatched', ActionEnums[type], payload);

      switch (type) {
        case ActionEnums.SET_ERRORS:
          return { ...state, errors: { ...state.errors, ...payload } };
        case ActionEnums.SET_FIELD:
          return { ...state, values: { ...state.values, ...payload } };
        case ActionEnums.SET_VALIDATING_FIELD: {
          return { ...state };
        }
        default:
          invariant(false, 'you provided an unkown action!');
      }
    },
    {
      values: initialValues,
      touched: {},
      errors: { ...initialErrors },
      validating: {},
      isValid: true,
    }
  );

  const validationContext = useRef<FormContext<Values>>({
    state,
    dispatch,
  });

  useEffect(() => {
    validationContext.current = { state, dispatch };
  });

  const validators = useMemo(() => {
    const vals = {};

    Object.keys(initialValues).map((fieldName) => {
      const validator = useValidator(
        fieldName,
        validationSchema,
        validationContext
      );
      vals[fieldName] = validator;
    });
    return vals;
  }, [validationSchema]) as FormValidators<Values>;

  const handleChange = useMemo(() => {
    const handlers = {};
    Object.keys(initialValues).map((fieldName) => {
      handlers[fieldName] = (val: any) =>
        dispatch({
          type: ActionEnums.SET_FIELD,
          payload: {
            [fieldName]: val,
          },
        } as FormActions<Values>);
    });

    return handlers;
  }, [initialValues]) as FormChangeEvent<Values>;

  return (
    <FormContextProvider value={{ state, dispatch }}>
      {children({ ...state, validators, handleChange })}
    </FormContextProvider>
  );
}

export default Form;
