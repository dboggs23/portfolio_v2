import React from "react";

export default Code = ({ node }) => {
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
