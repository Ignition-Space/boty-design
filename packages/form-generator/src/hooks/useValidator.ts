import { useCallback } from 'react';
import {
  ValidateRule,
  Wrapped,
  ValidateResultFor,
  ValidationContext,
  ActionEnums,
} from '../types';
import isPromise from '@boty-design/utils/src/isPromise';
import { FormActions } from '../types';

function useValidator<V>(
  fieldName: keyof V,
  schema: {
    [K in keyof V]?: Wrapped<ValidateRule<V[K], ValidationContext<V>>>;
  },
  context: ValidationContext<V>
) {
  return (val: V) => {
    console.log('validate');

    console.log(context.state.values);
    context.dispatch({
      type: ActionEnums.SET_ERRORS,
      payload: { [fieldName]: [] },
    } as FormActions<V>);

    if (!schema[fieldName]) {
      return [];
    }

    const rules: ValidateRule<V, ValidationContext<V>>[] = [].concat(
      schema[fieldName]
    );

    const results = rules.map((rule) => rule(val, context));
    const asyncResults: Promise<string>[] = results.filter((result) =>
      isPromise(result)
    ) as Promise<string>[];
    const syncResults: string[] = results.filter(
      (result) => !isPromise(result)
    ) as string[];

    if (!asyncResults.length) {
      return syncResults.filter(Boolean);
    } else {
      return Promise.all(asyncResults).then(([...resolved]) => {
        context.dispatch({
          type: ActionEnums.SET_ERRORS,
          payload: {
            [fieldName]: syncResults.concat(resolved).filter(Boolean),
          },
        } as FormActions<V>);
        return syncResults.concat(resolved).filter(Boolean);
      });
    }
  };
}

export default useValidator;
