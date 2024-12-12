import { CircularProgress } from "@mui/material";
import React from "react";
import { palette } from "../../theme";
import TouchRipple from "@mui/material/ButtonBase/TouchRipple";
import "./Button.css";
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "contained" | "outlined" | "text";
  color?: "primary" | "secondary" | "error" | "warning" | "tertiary";
  size?: "medium" | "small" | "large";
  loading?: boolean;
}

interface LoaderProps {
  variant?: "contained" | "outlined" | "text";
  color?: "primary" | "secondary" | "error" | "warning" | "tertiary";
  size?: "medium" | "small" | "large";
}

const getColor = (
  color: string,
  variant: "contained" | "outlined" | "text"
) => {
  if (color !== "warning" && variant === "contained") {
    return palette.colors.base.white;
  }
  switch (color) {
    case "primary":
      return palette.colors.primary.main;
    case "secondary":
      return palette.colors.primary.main;
    case "error":
      return palette.colors.error.main;
    case "tertiary":
      return palette.colors.tertiary.main;
    case "warning":
      return palette.colors.warning[11];
    default:
      return palette.colors.primary.main;
  }
};

const ButtonLoading = ({ variant, color }: LoaderProps) => {
  const loaderColor = getColor(color || "primary", variant || "contained");
  return <CircularProgress size="16px" style={{ color: loaderColor }} />;
};

export const Button: React.FC<ButtonProps> = ({
  color = "primary",
  variant = "contained",
  size = "medium",
  ...props
}) => {
  const rippleRef = React.useRef(null);
  const onRippleStart = (e: any) => {
    (rippleRef?.current as any)?.start(e);
  };
  const onRippleStop = (e: any) => {
    (rippleRef?.current as any)?.stop(e);
  };

  const styles = () => {
    const propStyle = props.style ?? {};

    return propStyle;
  };

  return (
    <>
      <button
        {...props}
        style={styles()}
        onMouseDown={onRippleStart}
        onMouseUp={onRippleStop}
        className={`lyfe-button ${variant} ${variant}-${color} button-${size}`}
      >
        {props.loading ? (
          <ButtonLoading variant={variant} color={color} />
        ) : (
          props.children
        )}
        <TouchRipple ref={rippleRef} center={false} />
      </button>
    </>
  );
};
