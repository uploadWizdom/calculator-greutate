import * as React from "react";

function SvgComponent(props) {
  return (
    <svg width={12} height={9} viewBox="0 0 12 9" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 .75a.75.75 0 01-.75.75H.75a.75.75 0 010-1.5h10.5a.75.75 0 01.75.75zM12 4.25a.75.75 0 01-.75.75H.75a.75.75 0 010-1.5h10.5a.75.75 0 01.75.75zM12 7.75a.75.75 0 01-.75.75H.75a.75.75 0 010-1.5h10.5a.75.75 0 01.75.75z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgComponent;
