import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import clsx from "clsx";
import styles from "./Button.module.scss";

function Button({
  children,
  size = "medium",
  to = "",
  href = "",
  className = "",
  primary = false,
  secondary = false,
  rounded = false,
  disabled = false,
  onClick,
  ...props
}) {
  let Component = "button";
  const passProps = { ...props };

  if (to) {
    Component = Link;
    passProps.to = to;
  }
  if (href) {
    Component = "a";
    passProps.href = href;
  }

  const handleClick = (event) => {
    if (disabled) {
      event.preventDefault();
      return;
    }
    if (onClick) onClick(event);
  };

  return (
    <Component
      {...passProps}
      className={clsx(styles.wrapper, className, {
        [styles.primary]: primary,
        [styles.secondary]: secondary,
        [styles.rounded]: rounded,
        [styles.disabled]: disabled,
        [styles.small]: size === "small",
        [styles.medium]: size === "medium",
        [styles.large]: size === "large",
      })}
      onClick={handleClick}
    >
      <span>{children}</span>
    </Component>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  className: PropTypes.string,
  to: PropTypes.string,
  href: PropTypes.string,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  rounded: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
