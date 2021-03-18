export type Wrapped<T> = T | T[];

export type ValidateRule<T, C = any> = (
  value: T,
  context?: C /** FIX ME!!! */
) => void | string | Promise<void | string>;

export type ValidateResultFor<R> = R extends (
  ...args: infer U
) => void | string | Promise<void | string>
  ? (...args: U) => string[] | Promise<string[]>
  : never;

export interface IFormItemAttributes<T = any> {
  label: string | React.ReactElement;
  rules: Wrapped<ValidateRule<T>>;
  value: T;
  validators: Wrapped<ValidateRule<T>>;
}

export enum ActionEnums {
  SET_FIELD,
  SET_ERRORS,
  SET_VALIDATING_FIELD,
  SET_VALIDING,
}

type Action<T, P> = { type: T; payload: P };

export type FormActions<V = any> =
  | Action<ActionEnums.SET_ERRORS, Partial<FormErrors<V>>>
  | Action<ActionEnums.SET_FIELD, Partial<V>>
  | Action<ActionEnums.SET_VALIDATING_FIELD, Partial<FormValidating<V>>>;

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
    : string[];
};

export type FormChangeEvent<FormValues> = {
  [K in keyof FormValues]: (val: any) => void;
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

export type FormValidating<FormValues> = {
  [K in keyof FormValues]?: FormValues[K] extends any[]
    ? FormValues[K][number] extends object // [number] is the special sauce to get the type of array's element. More here https://github.com/Microsoft/TypeScript/pull/21316
      ? FormValidating<FormValues[K][number]>[]
      : boolean
    : FormValues[K] extends object
    ? FormValidating<FormValues[K]>
    : boolean;
};

export type FormValidators<FormValues, C = FormContext<FormValues>> = {
  [K in keyof FormValues]: (val: FormValues[K]) => string[] | Promise<string[]>;
};
export type FormContext<V> = {
  state: {
    values: V;
    touched: FormTouched<V>;
    errors: FormErrors<V>;
    isValid: boolean;
  };
  dispatch: React.Dispatch<FormActions<V>>;
};
