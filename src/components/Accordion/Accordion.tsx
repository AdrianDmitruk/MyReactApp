import React, { FC, ReactElement, useState } from "react";
import { PanelProps } from "./Panel/Panel";

type AccordionProps = {
  children: ReactElement<PanelProps>[];
};

export const Accordion: FC<AccordionProps> = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handlePanelClick = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      {children.map((child, index) => {
        return React.cloneElement(child, {
          key: index,
          isOpen: activeIndex === index,
          onPanelClick: () => handlePanelClick(index),
        });
      })}
    </div>
  );
};
