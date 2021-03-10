export type Wrapped<T> = T | T[];

export type ValidateRule = (
  context: any /** FIX ME!!! */
) => boolean | Promise<boolean>;

export interface BaseFormItem {
  label: string | React.ReactElement;
  rules: Wrapped<ValidateRule>;
}
