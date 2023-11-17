import Link from "next/link";
import React from "react";

interface NavigationButtonProps {
  path: string;
  buttonName: string;
  disabled?: boolean;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({
  path,
  buttonName,
  disabled = false,
}) => {
  return (
    <Link href={path} passHref>
      <button
        disabled={disabled}
        className={`text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ${
          disabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {buttonName}
      </button>
    </Link>
  );
};

export default NavigationButton;
