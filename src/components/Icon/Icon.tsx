import React, { ReactElement } from "react";

interface IconProps {
  icon: ReactElement;
}

export const Icon: React.FC<IconProps> = ({ icon }) => {
  return React.cloneElement(icon);
};
