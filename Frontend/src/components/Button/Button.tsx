import cn from "clsx";

function Button({
  variant = "primary",
  type = "button",
  children,
  ...props
}: {
  [x: string]: any;
  variant?: string | undefined;
  type?: string | undefined;
  children: any;
}): JSX.Element {
  const classes = cn({ btn: true }, `btn-${variant}`);

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

export default Button;
