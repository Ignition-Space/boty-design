import { useState } from 'react';
import { FormItemType } from '../internals/symbols';

export default function useFormItem(proto: any) {
  console.log(Reflect.getMetadata('123', proto, 'hello'));

  console.log(Reflect.getMetadata(FormItemType, proto));
}
