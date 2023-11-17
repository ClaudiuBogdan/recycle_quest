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
        className={`px-6 py-2 mt-4 bg-yellow-500 text-white font-bold rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300 ${
          disabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {buttonName}
      </button>
    </Link>
  );
};

export default NavigationButton;
