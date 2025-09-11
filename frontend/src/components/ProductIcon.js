import React from "react";
import SvgIcon from "@mui/material/SvgIcon";

export default function ProductIcon(props) {
  // Box/Inventory icon for product management
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      {/* Box base */}
      <rect x="4" y="8" width="16" height="10" rx="2" fill="#FFC107" stroke="#222326" strokeWidth="1.5" />
      {/* Box lid */}
      <rect x="6" y="6" width="12" height="4" rx="1" fill="#222326" />
      {/* Box lines */}
      <line x1="8" y1="12" x2="16" y2="12" stroke="#222326" strokeWidth="1.2" />
      <line x1="8" y1="15" x2="16" y2="15" stroke="#222326" strokeWidth="1.2" />
    </SvgIcon>
  );
}
