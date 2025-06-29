import React, { useState } from "react";
import "./Navbar.css";
import { useTheme } from "../../context/ThemeContext";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { theme, toggleTheme } = useTheme();

  return (
    <header className="navbar">
      <div className="logo">
        <img src='https://logo.svgcdn.com/l/java.png' width={33} />
      </div>

      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Inicio</Link>
        <Link to="/blog">Blog</Link>
        <a href="#">Proyectos</a>
        <a href="#">Contacto</a>
      </nav>

      <div className="theme-toggle" onClick={toggleTheme}>
        {theme === "light" ? (
          <svg xmlns="http://www.w3.org/2000/svg" width={35} height={35} viewBox="0 0 512 512"><defs><linearGradient id="meteoconsMoonriseFill0" x1={54.3} x2={187.2} y1={29} y2={259.1} gradientUnits="userSpaceOnUse"><stop offset={0} stopColor="#86c3db"></stop><stop offset={0.5} stopColor="#86c3db"></stop><stop offset={1} stopColor="#5eafcf"></stop></linearGradient><clipPath id="meteoconsMoonriseFill1"><path fill="none" d="M512 306H304l-35.9-31.4a18.4 18.4 0 0 0-24.2 0L208 306H0V0h512Z"></path></clipPath><symbol id="meteoconsMoonriseFill2" viewBox="0 0 270 270"><path fill="url(#meteoconsMoonriseFill0)" stroke="#72b9d5" strokeLinecap="round" strokeLinejoin="round" strokeWidth={6} d="M252.3 168.6A133.4 133.4 0 0 1 118 36.2A130.5 130.5 0 0 1 122.5 3A133 133 0 0 0 3 134.6C3 207.7 63 267 137.2 267c62.5 0 114.8-42.2 129.8-99.2a135.6 135.6 0 0 1-14.8.8Z"><animateTransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="-15 135 135; 9 135 135; -15 135 135"></animateTransform></path></symbol></defs><path fill="none" stroke="#374151" strokeLinecap="round" strokeLinejoin="round" strokeWidth={18} d="M128 332h88l40-36l40 36h88"></path><g clipPath="url(#meteoconsMoonriseFill1)"><use width={270} height={270} href="#meteoconsMoonriseFill2" transform="translate(121 121)"></use></g></svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width={35} height={35} viewBox="0 0 512 512"><defs><linearGradient id="meteoconsSunsetFill0" x1={150} x2={234} y1={119.2} y2={264.8} gradientUnits="userSpaceOnUse"><stop offset={0} stopColor="#fbbf24"></stop><stop offset={0.5} stopColor="#fbbf24"></stop><stop offset={1} stopColor="#f59e0b"></stop></linearGradient><clipPath id="meteoconsSunsetFill1"><path fill="none" d="M512 306H296a21.5 21.5 0 0 0-14 5.3L256 334l-26-22.7a21.5 21.5 0 0 0-14-5.3H0V0h512Z"></path></clipPath><symbol id="meteoconsSunsetFill2" viewBox="0 0 384 384"><circle cx={192} cy={192} r={84} fill="url(#meteoconsSunsetFill0)" stroke="#f8af18" strokeMiterlimit={10} strokeWidth={6}></circle><path fill="none" stroke="#fbbf24" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={24} d="M192 61.7V12m0 360v-49.7m92.2-222.5l35-35M64.8 319.2l35.1-35.1m0-184.4l-35-35m254.5 254.5l-35.1-35.1M61.7 192H12m360 0h-49.7"><animateTransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 192 192; 45 192 192"></animateTransform></path></symbol></defs><g clipPath="url(#meteoconsSunsetFill1)"><use width={384} height={384} href="#meteoconsSunsetFill2" transform="translate(64 100)"></use></g><path fill="none" stroke="#374151" strokeLinecap="round" strokeLinejoin="round" strokeWidth={18} d="M128 332h88l40 36l40-36h88"></path></svg>
        )}
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span className={menuOpen ? "line open" : "line"}></span>
        <span className={menuOpen ? "line open" : "line"}></span>
        <span className={menuOpen ? "line open" : "line"}></span>
      </div>
    </header>
  );
}
