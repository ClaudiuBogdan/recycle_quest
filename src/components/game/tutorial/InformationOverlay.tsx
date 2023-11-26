import SubmitButton from "@/components/SubmitButton";

type InformationOverlayProps = {
  title: string;
  message: string;
  buttonText: string;
  onClose: () => void;
};

const InformationOverlay: React.FC<InformationOverlayProps> = ({
  title,
  message,
  buttonText,
  onClose,
}) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg shadow-lg max-w-md text-center">
        <h2 className="text-lg font-bold mb-3">{title}</h2>
        <p>{message}</p>
        <SubmitButton onClick={onClose} label={buttonText} />
      </div>
    </div>
  );
};

export default InformationOverlay;
