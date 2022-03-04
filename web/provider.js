import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

export const myContext = React.createContext();

const Provider = (props) => {
  const DARK_CLASS = "dark";

  /*const systemPrefersDark = useMediaQuery(
    {
      query: "(prefers-color-scheme: dark)",
    },
    undefined 
    (prefersDark) => {
      setChecked(prefersDark);
    }
  );*/

  const [isChecked, setChecked] = useState(false);

  const handleChecked = (e) => {
    setChecked((isChecked) => !isChecked);
  };

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
