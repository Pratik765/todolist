import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  const footerStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.025)",
  };
  return (
    <div className="text-center p-4" style={footerStyle}>
      © {year} Copyright:
      <a
        class="text-reset fw-bold"
        href="https://pratik765.github.io/pratikkamble.github.io/"
      >
        Pratik Kamble
      </a>
    </div>
  );
}
