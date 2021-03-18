import { useRef, useEffect } from 'react';

function usePrevious<V>(value: V) {
  const ref = useRef<V>();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

export default usePrevious;
