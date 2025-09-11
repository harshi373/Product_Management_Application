import React from "react";
import SvgIcon from "@mui/material/SvgIcon";

export default function CategoryIcon({ category, ...props }) {
  // Choose icon based on category
  switch ((category || '').toLowerCase()) {
    case 'electronics':
      return (
        <SvgIcon {...props} viewBox="0 0 24 24">
          <rect x="4" y="7" width="16" height="10" rx="2" fill="#FFC107"/>
          <rect x="8" y="3" width="8" height="4" rx="1" fill="#222326"/>
          <circle cx="12" cy="12" r="2" fill="#222326"/>
        </SvgIcon>
      );
    case 'bakery':
      return (
        <SvgIcon {...props} viewBox="0 0 24 24">
          <ellipse cx="12" cy="15" rx="7" ry="4" fill="#FFC107"/>
          <ellipse cx="12" cy="11" rx="5" ry="2.5" fill="#222326"/>
        </SvgIcon>
      );
    case 'other':
      return (
        <SvgIcon {...props} viewBox="0 0 24 24">
          <rect x="6" y="6" width="12" height="12" rx="3" fill="#FFC107"/>
          <rect x="9" y="9" width="6" height="6" rx="1" fill="#222326"/>
        </SvgIcon>
      );
    case 'story book':
    case 'book':
    case 'books':
      return (
        <SvgIcon {...props} viewBox="0 0 24 24">
          <rect x="4" y="5" width="16" height="14" rx="2" fill="#FFC107"/>
          <rect x="7" y="8" width="10" height="8" rx="1" fill="#222326"/>
        </SvgIcon>
      );
    case 'milk':
      return (
        <SvgIcon {...props} viewBox="0 0 24 24">
          <rect x="9" y="4" width="6" height="16" rx="3" fill="#FFC107"/>
          <rect x="10.5" y="7" width="3" height="10" rx="1.5" fill="#222326"/>
        </SvgIcon>
      );
    case 'earphones':
      return (
        <SvgIcon {...props} viewBox="0 0 24 24">
          <circle cx="8" cy="12" r="3" fill="#FFC107"/>
          <circle cx="16" cy="12" r="3" fill="#FFC107"/>
          <rect x="11" y="11" width="2" height="6" rx="1" fill="#222326"/>
        </SvgIcon>
      );
    default:
      return (
        <SvgIcon {...props} viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="8" fill="#FFC107"/>
          <circle cx="12" cy="12" r="4" fill="#222326"/>
        </SvgIcon>
      );
  }
}
