import { FC, ReactNode } from "react";

import styles from "./Panel.module.scss";

export type PanelProps = {
  title: string;
  isOpen: boolean;
  onPanelClick: () => void;
  children: ReactNode;
};

export const Panel: FC<PanelProps> = ({
  title,
  isOpen,
  onPanelClick,
  children,
}) => {
  return (
    <div className={styles.wrap}>
      <div onClick={onPanelClick} className={styles.wrapTitle}>
        <h3>{title}</h3>
      </div>
      {isOpen && <div className={styles.wrapText}>{children}</div>}
    </div>
  );
};
