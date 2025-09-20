import Logo from "../../images/Logo.png";
import Toggle from "../../components/CommonComponent/Toggle"
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="w-screen h-auto scroll-smooth">
      {/* Header */}
      <section className="bg-oklch(80.8% 0.114 19.571) w-screen h-16 flex items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center border-solid">
          <img src={Logo} alt="Logo" className="h-12 w-auto" />
        </div>

        {/* Navigation */}
        <div className="grid grid-cols-3 gap-6">
          <Link to="/" className="text-shadow-2xs">
            Home
          </Link>
          <a href="#about" className="text-shadow-2xs">
            About
          </a>
          <a href="#contact" className="text-shadow-2xs">
            Contact
          </a>
        </div>     
      </section>

      {/* Login Section */}
      <section
        className="w-screen h-[600px] flex items-center justify-center"
        style={{ backgroundColor: "oklch(20.8% 0.042 265.755)" }}
      >
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <Toggle/>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-screen bg-black text-gray-300  py-10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo + About */}
          <div id="about">
            <img src={Logo} alt="Logo" className="h-12 w-auto" />
            <h2 className="text-lg font-semibold">Student Management System</h2>
            <p className="text-sm text-gray-400 mt-2">
              Streamlining student success through smarter management.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/#register" className="hover:text-white">
                  Admissions
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Academic Programs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div id="contact">
            <h2 className="text-lg font-semibold mb-3">Contact Information</h2>
            <p className="text-sm">📍 Team Codex</p>
            <p className="text-sm">Amity University</p>
            <p className="text-sm mt-2">📞 +91 8976587678</p>
            <p className="text-sm">✉️ sms@amity.edu</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="text-center text-xs text-gray-500 mt-8 border-t border-gray-700 pt-4">
          © 2025 SMS. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
