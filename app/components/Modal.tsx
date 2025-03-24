import { gradientSmallButtonStyle } from "../styles/styles";
export const Modal = ({ message, onClose }:{message:string,onClose:any}) => (
    
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-pink1 p-20 flex gap-4 flex-col justify-between items-center rounded-lg shadow-lg max-w-sm mx-auto">
        <h2 className="text-xl text-primary text-nowrap font-bold text-center">{message}</h2>
        <button
          onClick={onClose}
          className={`mt-4 px-6 py-2 ${gradientSmallButtonStyle} text-white rounded-lg w-full`}
        >
          Go To Home Page
        </button>
      </div>
    </div>
  );
  