import { useCallback, MutableRefObject } from 'react';
import { ValidateRule, Wrapped, FormContext, ActionEnums } from '../types';
import isPromise from '@boty-design/utils/src/isPromise';
import { FormActions } from '../types';

function setValidating<V>(
  field: keyof V,
  status: boolean,
  context: FormContext<V>
) {
  return context.dispatch({
    type: ActionEnums.SET_VALIDATING_FIELD,
    payload: { [field]: status },
  } as FormActions<V>);
}

function useValidator<V>(
  fieldName: keyof V,
  schema: {
    [K in keyof V]?: Wrapped<ValidateRule<V[K], FormContext<V>>>;
  },
  contextRef: MutableRefObject<FormContext<V>>
) {
  return (val: V) => {
    const context = contextRef.current;

    setValidating(fieldName, true, context);
    context.dispatch({
      type: ActionEnums.SET_ERRORS,
      payload: { [fieldName]: [] },
    } as FormActions<V>);

    if (!schema[fieldName]) {
      return [];
    }

    const rules: ValidateRule<V, FormContext<V>>[] = [].concat(
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
      setValidating(fieldName, false, context);
      return syncResults.filter(Boolean);
    } else {
      return Promise.all(asyncResults).then(([...resolved]) => {
        context.dispatch({
          type: ActionEnums.SET_ERRORS,
          payload: {
            [fieldName]: syncResults.concat(resolved).filter(Boolean),
          },
        } as FormActions<V>);

        setValidating(fieldName, false, context);

        return syncResults.concat(resolved).filter(Boolean);
      });
    }
  };
}

export default useValidator;
