import { useState } from 'react';
import { FormItemType } from '../internals/symbols';

export default function useFormItem(proto: any) {
  Reflect.getMetadata(FormItemType, proto);
}
