import { Outlet } from "react-router-dom";
import AppHeader from "components/layout/app.header";
import AppFooter from "components/layout/app.footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Layout() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <>
      <AppHeader />
      <Outlet />
      <AppFooter />
    </>
  );
}

export default Layout;
