import React from 'react';
import {
  useFormItem,
  FormItem,
  IFormItem,
  IInputProps,
} from '@boty-design/form-generator';
import { FormItemType } from '@boty-design/form-generator/src/internals/symbols';

@Reflect.metadata(FormItemType, '123')
class Form {
  @FormItem()
  a!: IInputProps;

  @FormItem()
  public hello(): string {
    return 'hello world';
  }
}

export default function FormExample() {
  useFormItem(Form);
  return <div></div>;
}
