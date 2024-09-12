import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

export default function Main() {

  const offsets = ["/apps/file-manager", "/apps/email", "/apps/calendar"];
  const { pathname } = useLocation();
  const bc = document.body.classList;
  const [data, setData] = useState('');
  const navigate = useNavigate();

  // set sidebar to offset
  (offsets.includes(pathname)) ? bc.add("sidebar-offset") : bc.remove("sidebar-offset");

  // auto close sidebar when switching pages in mobile
  bc.remove("sidebar-show");

  // scroll to top when switching pages
  window.scrollTo(0, 0);

  // Automatically navigate to /apps/calendar if not already on that page
  useEffect(() => {
    const savedData = getCookie('user');
    if (savedData) {
      setData(savedData);
      console.log(data);      
    }
    if (pathname === "/") {
      navigate("/apps/calendar");
    }
  }, [pathname, navigate]);

  return (
    <React.Fragment>
      <Sidebar />
      <Outlet />
    </React.Fragment>
  )
}