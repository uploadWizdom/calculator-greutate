import * as React from "react";

function SvgComponent(props) {
  return (
    <svg width={10} height={10} viewBox="0 0 10 10" fill="none" {...props}>
      <path
        d="M6.174 5l3.58-3.573A.836.836 0 008.572.245L5 3.825 1.428.245A.836.836 0 10.246 1.427L3.826 5 .246 8.571a.833.833 0 000 1.183.832.832 0 001.182 0L5 6.174l3.572 3.58a.832.832 0 001.182 0 .832.832 0 000-1.183L6.174 5z"
        fill="#20293A"
      />
    </svg>
  );
}

export default SvgComponent;
