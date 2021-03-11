import React, { Reducer, useReducer, ReactNode } from 'react';
import invariant from 'invariant';
type FormValues = {
  [key in string]: any;
};

enum ActionEnums {
  SET_FIELD,
  SET_ERRORS,
}

type Action<T, P> = { type: T; payload: P };

export type FormActions =
  | Action<ActionEnums.SET_ERRORS, Partial<FormErrors<FormValues>>>
  | Action<ActionEnums.SET_FIELD, Partial<FormValues>>;

/**
 * An object containing error messages whose keys correspond to FormValues.
 * Should always be an object of strings, but any is allowed to support i18n libraries.
 */
export type FormErrors<FormValues> = {
  [K in keyof FormValues]?: FormValues[K] extends any[]
    ? FormValues[K][number] extends object // [number] is the special sauce to get the type of array's element. More here https://github.com/Microsoft/TypeScript/pull/21316
      ? FormErrors<FormValues[K][number]>[] | string | string[]
      : string | string[]
    : FormValues[K] extends object
    ? FormErrors<FormValues[K]>
    : string;
};

/**
 * An object containing touched state of the form whose keys correspond to FormValues.
 */
export type FormTouched<FormValues> = {
  [K in keyof FormValues]?: FormValues[K] extends any[]
    ? FormValues[K][number] extends object // [number] is the special sauce to get the type of array's element. More here https://github.com/Microsoft/TypeScript/pull/21316
      ? FormTouched<FormValues[K][number]>[]
      : boolean
    : FormValues[K] extends object
    ? FormTouched<FormValues[K]>
    : boolean;
};

/**
 * Props provided to <Form />
 */
type FormProps<V> = {
  initialValues: V;
  initialTouched?: FormTouched<V>;
  initialErrors?: FormErrors<V>;
};

type FormChildrenProps<V> = {
  values: V;
  touched: FormTouched<V>;
  errors: FormErrors<V>;
};

function Form<Values extends FormValues>({
  initialValues,
  initialErrors,
  initialTouched,
  children,
}: FormProps<Values> & {
  children: (props: FormChildrenProps<Values>) => ReactNode | ReactNode;
}) {
  const [state, dispatch] = useReducer<
    Reducer<
      {
        values: Values;
        touched: FormTouched<Values>;
        errors: FormErrors<Values>;
        isValid: boolean;
      },
      FormActions
    >
  >(
    (state, { type, payload }) => {
      switch (type) {
        case ActionEnums.SET_ERRORS:
          return state;
        case ActionEnums.SET_FIELD:
          return { ...state, values: { ...state.values, ...payload } };
        default:
          invariant(true, 'you provided an unkown action!');
      }
      return state;
    },
    {
      values: initialValues,
      touched: initialTouched,
      errors: initialErrors,
      isValid: true,
    }
  );
  return <div>{children(state)}</div>;
}

export default Form;
