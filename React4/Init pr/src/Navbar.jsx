import React from "react"

const Navbar = () => {
  return (
    <nav style={{
      background: "#0984e3",
      padding: "1rem",
      color: "white",
      display: "flex",
      justifyContent: "space-between"
    }}>
      <div className="logo"> MyApp</div>
      <ul style={{ display: "flex", gap: "1rem", listStyle: "none", margin: 0 }}>
        <li><a href="#" style={{ color: "white", textDecoration: "none" }}>Home</a></li>
        <li><a href="#" style={{ color: "white", textDecoration: "none" }}>About</a></li>
        <li><a href="#" style={{ color: "white", textDecoration: "none" }}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;