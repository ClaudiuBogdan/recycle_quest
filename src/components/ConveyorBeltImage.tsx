import Image from "next/image";
import conveyor from "@/assets/conveyor.png";

export default function ConveyorBeltImage() {
  return <Image src={conveyor} width={128} alt="Conveyor belt" />;
}
