import Image from "next/image";
import { useEffect, useState } from "react";
import handClickSrc from "@/assets/hand_click.png";
import { RecycleBinType } from "@/models/Bin";
import styles from "./RecyclingBin.module.css";
import RecyclingBinImage from "../RecyclingBinImage";

type RecyclingBinProps = {
  type: RecycleBinType;
  label: string;
  showIndicator?: boolean;
  onClick: (type: RecycleBinType) => void;
};

const RecyclingBin: React.FC<RecyclingBinProps> = ({
  type,
  label,
  showIndicator,
  onClick,
}) => {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => setClicked(false), 300);
    return () => clearTimeout(timeoutId);
  }, [clicked]);

  const handleClick = () => {
    onClick(type);
    setClicked(true);
  };

  return (
    <button className={`${clicked ? "bin-clicked" : ""}`} onClick={handleClick}>
      <RecyclingBinImage type={type} label={type} width={100} height={100} />
      <span className="absolute text-gray-800 invisible">{label}</span>
      {showIndicator && (
        <Image
          className={styles["bin-click-indicator"]}
          src={handClickSrc}
          width={50}
          height={50}
          alt={"hand clicking bin"}
        />
      )}
    </button>
  );
};

export default RecyclingBin;
