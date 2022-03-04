import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

export const myContext = React.createContext();

const Provider = (props) => {
  const DARK_CLASS = "dark";

  const handleChecked = (e) => {
    setChecked(!isChecked);
  };

  const systemPrefersDark = useMediaQuery(
    {
      query: "(prefers-color-scheme: dark)",
    },
    undefined /*
    (prefersDark) => {
      setChecked(prefersDark);
    }*/
  );

  const [isChecked, setChecked] = useState(systemPrefersDark);

  /*useEffect(() => {
    if (isChecked) {
      document.documentElement.classList.add(DARK_CLASS);
    } else {
      document.documentElement.classList.remove(DARK_CLASS);
    }
  }, [isChecked]);*/

  return (
    <myContext.Provider
      value={{
        handleChecked,
        isChecked,
      }}
    >
      {props.children}
    </myContext.Provider>
  );
};

export default ({ element }) => <Provider>{element}</Provider>;
