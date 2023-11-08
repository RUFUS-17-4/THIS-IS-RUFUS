import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  const footerStyles = {
    color: "red",
  };

  return (
    <div className="footer" style={footerStyles}>
      <p>&copy; {currentYear}</p>
    </div>
  );
}

export default Footer;