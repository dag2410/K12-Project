import { useEffect, useState } from "react";

const useDebounce = (value, delay) => {
  const [input, setInput] = useState(null);
  useEffect(() => {
    const timeId = setTimeout(() => {
      setInput(value);
    }, delay);
    return () => {
      clearTimeout(timeId);
    };
  }, [value, delay]);

  return input;
};

export default useDebounce;
