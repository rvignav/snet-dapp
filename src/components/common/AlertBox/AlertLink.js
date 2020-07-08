import React from "react";

const AlertLink = ({ link }) => {
  if (link) {
    return (
      <a href="https://centivize.tech" title="demo">
        {link}
      </a>
    );
  }
  return null;
};

export default AlertLink;
