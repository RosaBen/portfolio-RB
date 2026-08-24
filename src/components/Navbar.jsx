import { Menu } from "lucide-react";
import { useState } from "react";
import LinkList from "./LinkList";

export default function Navbar() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <nav>
      <h1>Rosa Benchabane</h1>
      <button onClick={() => setOpenModal(true)}>
        <Menu className="menu-icon" />
      </button>
      {openModal && (
        <div className="modal">
          <LinkList />
          <button
            onClick={() => setOpenModal(false)}
            className="close-btn"
            type="button"
          >
            X
          </button>
        </div>
      )}
      <div className="desktop-nav">
        <LinkList />
      </div>
    </nav>
  );
}
