import { useEffect } from "react";
import { useState } from "react"

const useLocalStorage = (key, initial) => {
  const [state, setState] = useState(() => {
    const local = localStorage.getItem(key);
    return local ? local : initial;
  });

  useEffect(() => {
    localStorage.setItem(key, state);
  }, [state, key])

  return [state, setState];
}

export default useLocalStorage;
