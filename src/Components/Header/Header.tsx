import "./Header.css";
import logo from "../../../public/dodo.svg";

export default function Header() {
  return (
    <header className="header sticky text-white p-4 flex justify-between items-center">
      <div className="logo-container flex items-center gap-2">
        <img src={logo} alt="Logo" className="logo w-12" />
        <span className="app-name text-lg cursor-default">Task Manager</span>
      </div>
      <nav className="nav-links flex gap-5 pl-100">
        <a href="#product" className="nav-link">
          Product
        </a>
        <a href="#pricing" className="nav-link">
          Pricing
        </a>
        <a href="#about" className="nav-link">
          About Us
        </a>
      </nav>
      <div className="auth-buttons flex gap-2">
        <button className="login-button px-4 py-2 border rounded">Login</button>
        <button className="signup-button px-4 py-2 rounded">Sign Up</button>
      </div>
    </header>
  );
}
