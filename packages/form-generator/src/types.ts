export type Wrapped<T> = T | T[];

export type ValidateRule = (
  context: any /** FIX ME!!! */
) => boolean | Promise<boolean>;

export interface IFormItem {
  label?: string | React.ReactElement;
  rules?: Wrapped<ValidateRule>;
}

export interface IInputProps extends IFormItem {}
