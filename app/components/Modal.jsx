import ReactDOM from "react-dom";
import "../styles/carousel.css";

export default function Modal({ children, onClose }) {
  // Render the modal outside of the parent container
  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()} // prevents closing when clicking inside
      >
        {children}
      </div>
    </div>,
    document.body // ✅ portal renders directly to body
  );
}
