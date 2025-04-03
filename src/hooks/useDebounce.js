import { useEffect, useState } from "react";

const useDebounce = (value, delay) => {
  const [value, setValue] = useState(value);
  useEffect(() => {
    const timer = setTimeout((value) => {
      setValue(value);
    }, delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return [value];
};

export default useDebounce;
