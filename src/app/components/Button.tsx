import { ButtonHTMLAttributes, PropsWithChildren } from "react";

export const Button = ({
  children,
  ...props
}: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) => {
  return (
    <button
      {...props} // Spread all native button props
      className="py-1 px-2 rounded-md border-2 border-solid border-white"
    >
      {children}
    </button>
  );
};
