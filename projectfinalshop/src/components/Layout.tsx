import { Outlet } from "react-router-dom";
import Header from "./header";

export default function Layout() {
  return (
    <>
      {/* Header อยู่บนทุกหน้า */}
      <Header />
      {/* หน้าจริงๆ จะถูก render ตรง Outlet เท่านั้น */}
      <Outlet />
    </>
  );
}