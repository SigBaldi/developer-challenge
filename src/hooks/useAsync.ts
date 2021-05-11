import { useCallback, useEffect, useRef } from 'react';

const useMountedState = () => {
  const mountedRef = useRef(false);
  const isMounted = useCallback(() => mountedRef.current, []);

  useEffect(() => {
    mountedRef.current = true;

    return () => {
      mountedRef.current = false;
    };
  }, []);

  return isMounted;
};
const useSafeAsync = (): ((promise: unknown) => Promise<unknown>) => {
  const isMounted = useMountedState();
  const safeAsync = useCallback((promise) => {
    return new Promise((resolve) => {
      promise.then((value: unknown) => {
        if (isMounted()) {
          resolve(value);
        }
      });
    });
  }, []);

  return safeAsync;
};

export default useSafeAsync;
