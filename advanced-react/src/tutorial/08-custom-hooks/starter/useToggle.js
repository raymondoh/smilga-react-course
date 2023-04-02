import React, { useState } from "react";

const useToggle = defaultValue => {
  const [show, setShow] = useState(defaultValue);

  const toggle = () => {
    setShow(prev => {
      return !prev;
    });
  };

  return { show, toggle };
};

export default useToggle;
