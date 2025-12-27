import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { MdOutlineLightMode, MdNightlight, MdMenu, MdClose } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { useCurrentApp } from "components/context/app.context";
import { useTranslation } from "react-i18next";
import viFlag from "assets/svg/language/vi.svg";
import enFlag from "assets/svg/language/en.svg";
import jpFlag from "assets/svg/language/jp.svg";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import avatarImg from "assets/avatar.svg";

function AppHeader() {
  const { theme, setTheme } = useCurrentApp();
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const handleMode = (mode: "light" | "dark") => {
    localStorage.setItem("theme", mode);
    document.documentElement.setAttribute("data-bs-theme", mode);
    setTheme(mode);
  };

  const languages = [
    { code: "en", label: "English", flag: enFlag },
    { code: "vi", label: "Tiếng Việt", flag: viFlag },
    { code: "jp", label: "日本語", flag: jpFlag },
  ];

  return (
    <>
      <header className={`main-header ${theme}`}>
        <Container>
          <Navbar expand={false} className="py-3">
            <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="brand-text">
                Pham Tuan Dat
              </motion.span>
            </Link>

            <div className="d-flex align-items-center gap-3">
              <div className="theme-toggle" onClick={() => handleMode(theme === "light" ? "dark" : "light")}>
                {theme === "light" ? <MdNightlight /> : <MdOutlineLightMode />}
              </div>

              <button className="menu-btn" onClick={() => setIsOpen(true)}>
                <MdMenu size={28} />
              </button>
            </div>
          </Navbar>
        </Container>
      </header>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="drawer-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              className="custom-drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="drawer-header">
                <img src={avatarImg} alt="Avatar" className="drawer-avatar" />
                <button className="close-btn" onClick={() => setIsOpen(false)}>
                  <MdClose size={30} />
                </button>
              </div>

              <nav className="drawer-nav">
                <NavLink to="/" className="drawer-link" onClick={() => setIsOpen(false)}>
                  {t("appHeader.home")}
                </NavLink>
                <NavLink to="/project" className="drawer-link" onClick={() => setIsOpen(false)}>
                  {t("appHeader.project")}
                </NavLink>
                <NavLink to="/about" className="drawer-link" onClick={() => setIsOpen(false)}>
                  {t("appHeader.about")}
                </NavLink>
              </nav>

              <div className="drawer-footer">
                <p>{t("drawer.select")}</p>
                <div className="lang-grid">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => i18n.changeLanguage(lang.code)}
                      className={`lang-item ${i18n.resolvedLanguage === lang.code ? "active" : ""}`}
                    >
                      <img src={lang.flag} width={24} alt={lang.code} />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default AppHeader;
