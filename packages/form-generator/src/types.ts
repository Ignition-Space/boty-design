export type Wrapped<T> = T | T[];

export type ValidateRule<T> = (
  value: T,
  context: any /** FIX ME!!! */
) => boolean | Promise<boolean>;

export interface IFormItemAttributes<T = any> {
  label: string | React.ReactElement;
  rules: Wrapped<ValidateRule<T>>;
  value: T;
  validators: Wrapped<ValidateRule<T>>;
}
