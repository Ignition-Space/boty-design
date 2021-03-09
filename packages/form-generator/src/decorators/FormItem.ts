import { FormItemType } from '../internals/symbols';
import { IFormItem } from '../types';

export default function FormItem(): PropertyDecorator {
  return (target, prop) => {
    console.log(Reflect.getMetadata('design:type', target, prop));
    console.log(Reflect.getMetadata('design:type', target, prop));
  };
}
