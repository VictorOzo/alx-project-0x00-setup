import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, styles, onClick }) => {
  return (
    <button
      className={`px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 focus:outline-none ${styles}`}
      onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
