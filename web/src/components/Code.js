import React from "react";

export const Code = ({ node }) => {
  if (!node || !node.code) {
    return null;
  }
  const { language, code } = node;
  return (
    <div>
      language = {language}
      <pre>{code}</pre>
    </div>
  );
};
