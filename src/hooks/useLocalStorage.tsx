import { useEffect } from "react";
import { useState } from "react";

export const useLocalStorage = <T,>(
  key: string,
  initialValue: T | (() => T)
) => {
  const getLS = (key: string, initValue: T | (() => T)) => {
    const ls = localStorage.getItem(key);
    return ls
      ? JSON.parse(ls)
      : typeof initValue === "function"
      ? (initValue as () => T)()
      : initValue;
  };

  const [val, setVal] = useState(() => getLS(key, initialValue));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(val));
  }, [key, val]);

  return [val, setVal] as [T, typeof setVal];
};
