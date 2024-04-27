/* eslint-disable react/no-unstable-nested-components */
import { Button, ButtonProps } from "antd";

import styles from "./ButtonTransparent.module.scss";

type ButtonPropTypes = ButtonProps;

export const ButtonTransparent: React.FC<ButtonPropTypes> = ({
  children,
  ...rest
}) => {
  return (
    <Button {...rest} className={styles.button}>
      {children}
    </Button>
  );
};
