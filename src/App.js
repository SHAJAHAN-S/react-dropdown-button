import { useRef } from "react";
import { useOutsideClick } from "./useOutsideClick.js";
import "./styles.css";

export default function App() {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  return (
    <div className="App">
      {/* Dropdown Container */}
      <div className="dropdown__container">
        {/* Dropdown Button */}
        <div className="dropdown__btn" onClick={onClick}>
          <img src="/images/avatar.jpg" alt="..." />
        </div>

        {/* Dropdown Content */}
        <div
          ref={dropdownRef}
          className={`dropdown__content ${isActive ? "active" : "inactive"}`}
        >
          <div className="dropdown__info">
            <ul>
              <li>
                <span>Settings</span>
              </li>
              <li>
                <span>Purchases</span>
              </li>
              <li>
                <span>Upgrade</span>
              </li>
              <li>
                <button type="button">Logout</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
