import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

export const myContext = React.createContext();

const Provider = (props) => {
  const DARK_CLASS = "dark";

  const handleChecked = (e) => {
    console.log(e.target);
    setChecked(e.target.checked);
  };

  const systemPrefersDark = useMediaQuery(
    {
      query: "(prefers-color-scheme: dark)",
    },
    undefined,
    (prefersDark) => {
      setChecked(prefersDark);
    }
  );

  const [checked, setChecked] = useState(systemPrefersDark);

  useEffect(() => {
    if (checked) {
      document.documentElement.classList.add(DARK_CLASS);
    } else {
      document.documentElement.classList.remove(DARK_CLASS);
    }
  }, [checked]);

  return (
    <myContext.Provider
      value={{
        handleChecked,
        checked,
      }}
    >
      {props.children}
    </myContext.Provider>
  );
};

export default ({ element }) => <Provider>{element}</Provider>;
