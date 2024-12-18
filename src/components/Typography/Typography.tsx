import React from "react";
import { useMemo } from "react";
import "./Typography.css";
import { palette } from "../../palette";
import "../../styles.css";

type IVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "body_regular"
  | "body_light"
  | "body_semibold"
  | "body_semibold_uppercase"
  | "body_bold"
  | "h4_semibold"
  | "xx_large_regular"
  | "xx_large_semibold"
  | "x_large_regular"
  | "x_large_semibold"
  | "large_regular"
  | "large_semibold"
  | "large_semibold_uppercase"
  | "large_bold"
  | "small_regular"
  | "small_light"
  | "small_semibold"
  | "small_semibold_uppercase"
  | "x_small_regular"
  | "x_small_semibold_uppercase"
  | "xx_small_regular"
  | "xx_small_regular_uppercase"
  | "xx_small_semibold_uppercase"
  | "xxx_small_regular"
  | "xxx_small_bold_uppercase";

export interface TypographyProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: IVariant;
  colorVariant?: "primary" | "secondary" | "main" | "dark";
  textTransform?: "uppercase" | "lowercase" | "capitalize";
  children: React.ReactNode;
}

export const Typography: React.FC<TypographyProps> = ({
  variant,
  textTransform,
  colorVariant = "main",
  children,
  ...props
}) => {
  const styles = useMemo(() => {
    const propStyle = props.style ?? {};

    let color;
    switch (colorVariant) {
      case "primary":
        color = palette.colors.primary.main;
        break;
      case "secondary":
        color = palette.colors.warning.main;
        break;
      case "dark":
        color = palette.colors.base.black;
        break;
      default:
        color = palette.colors.base.black;
    }

    return {
      color,
      ...propStyle,
    };
  }, [colorVariant, props.style]);

  return (
    <p
      {...props}
      style={styles}
      className={`${variant} ${textTransform ? textTransform : ""}`}
    >
      {children}
    </p>
  );
};
