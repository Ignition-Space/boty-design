import { FormItemType } from '../internals/symbols';
import { BaseFormItem } from '../types';

export default function FormItem<T extends BaseFormItem>(
  ctor: T
): ClassDecorator {
  return (target: Object) => {
    Reflect.defineMetadata(FormItemType, ctor, target);
  };
}
