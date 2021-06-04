import * as React from "react";

function SvgComponent(props) {
  return (
    <svg width={10} height={6} viewBox="0 0 10 6" fill="none" {...props}>
      <path
        d="M8.761 0L5 3.617 1.239 0 0 1.191 5 6l5-4.809L8.761 0z"
        fill="#20293A"
      />
    </svg>
  );
}

export default SvgComponent;
