import { ThreeDots } from "react-loader-spinner";
import "./Loader.css";

export const Loader = () => {
  return (
    <div className="loader-container">
      <ThreeDots width="75" color="green" ariaLabel="loading-indicator" />
    </div>
  );
};
