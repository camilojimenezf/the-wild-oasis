import { useEffect, useRef } from "react";

export function useOutsideClick(callback, listenCapituring = true) {
  const ref = useRef();

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        callback();
      }
    }

    document.addEventListener("click", handleClick, listenCapituring);

    return () => document.removeEventListener("click", handleClick);
  }, [callback, listenCapituring]);

  return {
    ref,
  };
}
