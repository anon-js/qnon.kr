import { motion, MotionProps } from "framer-motion";
import { button } from "./button.css";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export default function Button({
  onClick,
  children,
  ...props
}: ButtonProps & MotionProps) {
  return (
    <motion.button
        className={button}
        onClick={onClick}
        {...props}
    >
      {children}
    </motion.button>
  );
}