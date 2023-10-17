import React, { FC, ReactNode } from "react";

interface HighlightTextProps {
  color: string;
  children: ReactNode;
}

export const HighlightText: FC<HighlightTextProps> = ({ color, children }) => {
  return React.createElement(
    "span",
    {
      style: { color },
    },
    children
  );
};
