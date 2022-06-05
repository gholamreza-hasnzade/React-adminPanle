import React from "react";

const Button = ({ bgColor, color, text, borderRadius, size }) => {
  console.log(bgColor);
  return (
    <button
      type="button"
      style={{
        background: bgColor,
        color: color,
        borderRadius: borderRadius,
      }}
      className={`text-${size} p-3 hover:drop-shadow-xl`}
    >
      {text}
    </button>
  );
};

export default Button;
